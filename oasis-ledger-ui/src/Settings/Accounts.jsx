import React from 'react';

import AccountSelect from 'util/AccountSelect';
import AccountTypeSelect from 'util/AccountTypeSelect';
import DocumentTitle from 'util/DocumentTitle';
import FetchContainer, { fetchJSON, fetchText } from 'util/FetchContainer';
import { mdash } from 'util/unicode';

const Accounts = () => (
  <div className="m-3">
    <FetchContainer fetch={{
      accounts: fetchJSON("api/account"),
      accountTypes: fetchJSON("api/account-type"),
    }}>
      <AccountsMain/>
    </FetchContainer>
  </div>
);

class AccountsMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accounts: props.accounts.slice(0) // shallow copy
    };
    this.accountCreateModalRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
    this.handleAccountCreated = this.handleAccountCreated.bind(this);
  }

  handleClick() {
    this.accountCreateModalRef.current.showModal();
  }

  handleAccountCreated(account) {
    this.setState(prevState => ({
      accounts: prevState.accounts.concat([account])
        .sort((a1, a2) => a1.accountCode.localeCompare(a2.accountCode))
    }));
  }

  renderListGroup(accountType) {
    const accounts = this.state.accounts
      .filter(account => account.accountTypeId === accountType.accountTypeId);
    return (
      <div className="card mb-4" key={accountType.accountTypeId}>
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
    return (
      <React.Fragment key={account.accountId}>
        <li className="list-group-item py-2" key={account.accountId}>
          <span style={{ paddingLeft: depth + "em" }}>
            {account.accountCode + " - " + account.accountName}
          </span>
        </li>
        {this.state.accounts
          .filter(a2 => a2.parentAccountId == account.accountId)
          .map(a2 => this.renderListGroupItem(a2, depth + 1))}
      </React.Fragment>
    );
  }

  render() {
    return (
      <DocumentTitle title="Accounts">
        <div className="container-fluid">
          <p>
            <button type="button" className="btn btn-primary" onClick={this.handleClick}>
              <i className="fa fa-plus"></i> Create Account
            </button>
            <AccountCreateModal
              accountTypes={this.props.accountTypes}
              accounts={this.state.accounts}
              handleAccountCreated={this.handleAccountCreated}
              ref={this.accountCreateModalRef}
            />
          </p>
          <div className="row">
            <div className="col-12 col-lg-6">
              {this.props.accountTypes
                .filter(accountType => accountType.accountTypeId <= 3) // Asset, Liability, Equity
                .map(accountType => this.renderListGroup(accountType))}
            </div>
            <div className="col-12 col-lg-6">
              {this.props.accountTypes
                .filter(accountType => accountType.accountTypeId > 3) // Income, Expense
                .map(accountType => this.renderListGroup(accountType))}
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}

class AccountCreateModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      err: null, message: null,
      input: {
        accountType: "",
        accountCode: "",
        accountName: "",
        parentAccount: "",
      },
      valid: {},
    };

    this.modalRef = React.createRef();

    this.showModal = this.showModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $(this.modalRef.current).on('hidden.bs.modal', (e) => {
    });
  }

  showModal() {
    this.handleClear();
    $(this.modalRef.current).modal();
  }

  setInput(id, value) {
    this.setState(prevState => {
      const input = Object.assign({}, prevState.input);
      input[id] = value;
      if (id == "accountType" && prevState.input[id] != value) {
        input["parentAccount"] = "";
      }
      return {
        input: input,
        valid: {}
      };
    });
  }

  handleChange(e) {
    const id = e.target.id.replace(/Input$/, '');
    this.setInput(id, e.target.value);
  }

  handleClear() {
    this.setState({
      err: null, message: null,
      input: Object.keys(this.state.input).reduce((input, key) => {
        input[key] = "";
        return input;
      }, {}),
      valid: {}
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const input = this.state.input;
    const valid = this.state.valid;
    valid.accountType= !!input.accountType;
    valid.accountCode = !!input.accountCode;
    valid.accountName = !!input.accountName;
    valid.parentAccount = true;
    if (!Object.keys(valid).every(id => valid[id])) {
      this.setState({ valid: valid });
      return;
    }

    this.setState({ disabled: true, err: null, message: null });

    const accountDTO = {
      accountTypeId: input.accountType,
      accountCode: input.accountCode,
      accountName: input.accountName,
      parentAccountId: input.parentAccount,
    };
    fetchJSON('api/account', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(accountDTO)
    }).then(account => {
      this.setState({
        disabled: false,
        message: account.accountCode + " " + mdash + " account has been created."
      });
      this.props.handleAccountCreated(account);
    }).catch(err => {
      this.setState({
        disabled: false,
        err: err
      });
    });
  }

  getFormControlProps(id) {
    let className = 'form-control';
    if (this.state.valid.hasOwnProperty(id)) {
      if (this.state.valid[id]) {
        className += " is-valid";
      } else {
        className += " is-invalid";
      }
    }
    return {
      className: className,
      id: id + "Input",
      value: this.state.input[id],
      onChange: this.handleChange,
    };
  }

  renderAlert() {
    const handleClear = () => this.setState({ err: null, message: null });
    if (this.state.err || this.state.message) {
      return (
        <div className={"alert alert-" + (this.state.err ? "danger" : "success") + " alert-dismissible mb-0"}>
          <button type="button" className="close" aria-label="Close" onClick={handleClear}>
            <span aria-hidden="true">&times;</span>
          </button>
          {this.state.err ? this.state.err.toString() : this.state.message}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div ref={this.modalRef}
             className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Account</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-row">
                  <div className="form-group col-lg-4">
                    <label htmlFor="accountTypeInput">Account Type</label>
                    <AccountTypeSelect accountTypes={this.props.accountTypes}>
                      <select {...this.getFormControlProps('accountType')}/>
                    </AccountTypeSelect>
                  </div>
                  <div className="form-group col-lg-8">
                    <label htmlFor="parentAccountInput">Parent Account</label>
                    <AccountSelect
                      accountTypes={this.props.accountTypes}
                      accounts={this.props.accounts.filter(a => a.accountTypeId == this.state.input.accountType)}
                      activeOnly
                     ><select disabled={!this.state.input.accountType} {...this.getFormControlProps('parentAccount')}>
                        <option value="">None</option>
                      </select>
                    </AccountSelect>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="accountCodeInput">Short Code</label>
                  <input
                    type="text"
                    placeholder="Short Code"
                    {...this.getFormControlProps('accountCode')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="accountNameInput">Long Name</label>
                  <input
                    type="text"
                    placeholder="Long Name"
                    {...this.getFormControlProps('accountName')}
                  />
                </div>
                {this.renderAlert()}
              </div>
              <div className="modal-footer justify-content-start flex-wrap">
                <button type="button" className="btn my-1 btn-primary" disabled={this.state.disabled}
                  onClick={this.handleSubmit}>Create Account</button>
                <button type="button" className="btn my-1 btn-outline-secondary"
                  onClick={this.handleClear}>Clear</button>
                <button type="button" className="btn my-1 btn-outline-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Accounts;
