import React from 'react';

import FetchContainer, { fetchJSON, fetchText } from 'util/FetchContainer';
import { formatAmount, formatDateLong } from 'util/formatters';
import { mdash } from 'util/unicode';

class Balances extends React.Component {
  render() {
    const balancesDate = moment().subtract(1, "days").toISOString(true).substring(0, 10);
    return (
      <div className="m-3">
        <FetchContainer fetch={{
          accounts: fetchJSON("api/account"),
          accountTypes: fetchJSON("api/account-type"),
          accountBalances: fetchJSON("api/account-balance/summary/" + balancesDate),
          balancesDate: balancesDate,
        }}>
          <BalancesView/>
        </FetchContainer>
      </div>
    );
  }
}

class BalancesView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderListGroup(accountTypeCode) {
    const accountType = this.props.accountTypes.find(at => at.accountTypeCode === accountTypeCode);
    if (!accountType) return;
    const accounts = this.props.accounts
      .filter(account => account.accountTypeId === accountType.accountTypeId);
    return (
      <div className="card d-inline-flex mb-4 mr-4" key={accountType.accountTypeId}>
        <div className="card-header">
          <div className="d-flex w-100 justify-content-between">
            <div>{accountType.accountTypeCode + " - " + accountType.accountTypeName}</div>
            <div><small>{accounts.length} account{accounts.length == 1 ? "" : "s"}</small></div>
          </div>
        </div>
        <ul className="list-group list-group-flush">
          {accounts
            .filter(account => !account.parentAccountId)
            .map(account => this.renderListGroupItem(account))}
        </ul>
      </div>
    );
  }

  renderListGroupItem(account, depth = 1) {
    const accountType = this.props.accountTypes.find(at => at.accountTypeId === account.accountTypeId);
    const balances = this.props.accountBalances
      .filter(ab => ab.accountId === account.accountId)
      .filter(ab => ab.postingDate <= this.props.balancesDate);
    const balancePrev = balances.length > 1 && balances[0].reconciled === "Y" && balances[0];
    const balanceCurr = balances.length > 0 && balances[balances.length - 1];
    const balanceNext = balanceCurr && balanceCurr.postingDate < this.props.balancesDate &&
      Object.assign({},
        ["accountId", "currencyId", "postingCount", "amount"]
          .reduce((a, key) => { a[key] = balanceCurr[key]; return a }, {}),
        { postingDate: this.props.balancesDate, reconciled: "N" });
    return (
      <React.Fragment key={account.accountId}>
        <li className="list-group-item py-2" key={account.accountId}>
          <div style={{ marginLeft: depth + "em" }}>
            <div className={(
                (balancePrev && balancePrev.amount) ||
                (balanceCurr && balanceCurr.amount)) ? "font-weight-bold" : ""}>
              {account.accountCode + " - " + account.accountName}
            </div>
            <BalanceRow
              accountBalance={balancePrev}
              sign={accountType.sign}
            />
            <BalanceRow
              accountBalance={balanceCurr}
              sign={accountType.sign}
              balancePrev={balancePrev}
              accountBalances={this.props.accountBalances}
            />
            <BalanceRow
              accountBalance={balanceNext}
              sign={accountType.sign}
            />
          </div>
        </li>
        {this.props.accounts
          .filter(a2 => a2.parentAccountId == account.accountId)
          .map(a2 => this.renderListGroupItem(a2, depth + 1))}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.renderListGroup("A")}
        {this.renderListGroup("L")}
        <p>
          {this.props.accountTypes.map(accountType => (
            <div>{JSON.stringify(accountType)}</div>
          ))}
        </p>
        <p>{JSON.stringify(this.props.accountBalances)}</p>
        <p>{JSON.stringify(this.props.accounts)}</p>
      </div>
    );
  }
}

class BalanceRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
    this.handleReconcile = this.handleReconcile.bind(this);
  }

  handleReconcile(e) {
    e.preventDefault();
    this.setState({ loading: true });

    const accountBalance = Object.assign({}, this.props.accountBalance, { reconciled: "Y" });
    fetchText("api/account-balance/reconcile", {
      method: "POST",
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(accountBalance)
    }).then(() => {
      this.props.accountBalance.reconciled = "Y";
      this.setState({ loading: false });
    }).catch(err => {
      this.setState({ loading: false, error: err });
    });
  }

  renderCheckbox() {
    if (this.state.loading) {
      return (
        <span className="oasisledger-balances__row__checkbox oasisledger-balances__row__checkbox--loading">
          <i className="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
        </span>
      );
    } else if (this.state.error) {
      return (
        <span className="oasisledger-balances__row__checkbox text-danger">
          <i className="fa fa-exclamation-triangle fa-fw" aria-hidden="true"></i>
        </span>
      );
    } else if (this.props.accountBalance.reconciled === "Y") {
      return (
        <span className="oasisledger-balances__row__checkbox text-success">
          <i className="fa fa-check fa-fw" aria-hidden="true"></i>
        </span>
      );
    } else {
      return (
        <a href="#"
          onClick={this.handleReconcile}
          className="oasisledger-balances__row__checkbox"
         ><i className="fa fa-check fa-fw" aria-hidden="true"></i>
        </a>
      );
    }
  }

  render() {
    const { accountBalance, sign, balancePrev } = this.props;
    if (!accountBalance) return null;
    const postingCount = balancePrev &&
      d3.sum(this.props.accountBalances
        .filter(ab =>
          ab.accountId === accountBalance.accountId &&
          ab.postingDate > balancePrev.postingDate &&
          ab.postingDate <= accountBalance.postingDate),
        ab => ab.postingCount);
    return (
      <div className="row oasisledger-balances__row" style={{ marginLeft: "1em" }}>
        <div className="col">
          {formatDateLong(accountBalance.postingDate)}
          {Number.isInteger(postingCount) && (
            <span> {mdash} <span className="text-primary">
              {postingCount} new posting{postingCount > 1 && "s"}
            </span></span>
          )}
        </div>
        <div className="col-auto">
          <span className={accountBalance.amount * sign < 0 ? " text-danger" : ""}>
            {formatAmount(accountBalance.amount * sign)}
          </span>
        </div>
        <div className="col-auto pl-0">
          {this.renderCheckbox()}
        </div>
      </div>
    );
  }
}

export default Balances;
