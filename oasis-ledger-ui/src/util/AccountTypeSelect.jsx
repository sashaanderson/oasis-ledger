import React from 'react';

const AccountTypeSelect = ({ accountTypes, children }) => {
  const options = [
    <option value="" hidden>Choose account type...</option>
  ];
  if (accountTypes) {
    options.push(accountTypes.map(accountType =>
      <option value={accountType.accountTypeId}>
        {accountType.accountTypeCode} - {accountType.accountTypeName}
      </option>
    ));
  } else {
    options.push(
      <option disabled className="text-muted">Loading...</option>
    );
  }
  const selectComponent = React.Children.only(children); // <select>
  return React.cloneElement(selectComponent, selectComponent.props, ...options);
}

export default AccountTypeSelect;
