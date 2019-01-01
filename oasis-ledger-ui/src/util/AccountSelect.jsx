import React from 'react';
import PropTypes from 'prop-types';

import { emsp } from 'util/unicode';

class AccountSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  renderOption(account, depth = 0) {
    return (
      <React.Fragment key={account.accountId}>
        <option value={account.accountId}>
          {emsp.repeat(depth)}
          {account.accountCode + " - " + account.accountName}
        </option>
        {this.props.accounts
          .filter(a2 => a2.parentAccountId == account.accountId)
          .map(a2 => this.renderOption(a2, depth + 1))}
      </React.Fragment>
    );
  }

  render() {
    const selectComponent = React.Children.only(this.props.children); // <select>
    const options = React.Children.toArray(selectComponent.props.children);
    if (this.props.accountTypes && this.props.accounts) {
      options.push(this.props.accountTypes
        .filter(accountType => this.props.accounts.some(account => account.accountTypeId === accountType.accountTypeId))
        .map(accountType => (
          <optgroup
            key={accountType.accountTypeId}
            label={accountType.accountTypeCode + " - " + accountType.accountTypeName}
           >{this.props.accounts
              .filter(account => account.accountTypeId === accountType.accountTypeId)
              .filter(account => !account.parentAccountId)
              .filter(account => !this.props.activeOnly || account.activeFlag === "Y")
              .map(account => this.renderOption(account))}
          </optgroup>
        )));
    } else {
      options.push(
        <optgroup disabled label="Loading..." className="text-muted"></optgroup>
      );
    }
    return React.cloneElement(selectComponent, selectComponent.props, ...options);
  }
}

AccountSelect.propTypes = {
  accountTypes: PropTypes.array,
  accounts: PropTypes.array,
  activeOnly: PropTypes.bool,
};

export default AccountSelect;
