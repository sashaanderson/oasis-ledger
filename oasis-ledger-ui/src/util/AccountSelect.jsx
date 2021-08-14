import React, { useState, useRef } from 'react';

import { emsp } from 'util/unicode';

function AccountSelect({ label, accountTypes, accounts }) {
  const [text, setText] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(0);
  const inputRef = useRef(null);

  function handleChange(e) {
    const text = e.target.value;
    const account = accounts && accounts.find(a => text == a.accountCode + " - " + a.accountName);
    setText(text);
    setSelectedAccountId(account && account.accountId);

    const dropdown = bootstrap.Dropdown.getOrCreateInstance(inputRef.current);
    dropdown.show();
  }

  function handleClick(accountId, e) {
    e.preventDefault();
    const account = accounts.find(a => a.accountId === accountId);
    setText(account.accountCode + " - " + account.accountName);
    setSelectedAccountId(account.accountId);
    inputRef.current.focus();
  }

  function findAncestors(accountId) {
    const accountIds = [];
    let account = accounts.find(a => a.accountId === accountId);
    while (account.parentAccountId) {
      account = accounts.find(a => a.accountId === account.parentAccountId);
      accountIds.unshift(account.accountId);
    }
    return accountIds;
  }

  function findDescendants(accountId) {
    const accountIds = accounts
      .filter(account => account.parentAccountId === accountId)
      .map(account => account.accountId);
    for (let accountId of accountIds) {
      accountIds.push(...findDescendants(accountId));
    }
    return accountIds;
  }

  function renderLabel(label) {
    if (text) {
      const i = label.toLowerCase().indexOf(text.toLowerCase());
      if (i >= 0) {
        return (
          <span>
            {label.substring(0, i)}
            <span className="bg-warning">
              {label.substring(i, i + text.length)}
            </span>
            {label.substring(i + text.length)}
          </span>
        );
      }
    }
    return (
      <span>{label}</span>
    )
  }

  function renderDropdownMenuItem(account, accountsInDropdown, depth = 0) {
    const label = account.accountCode + " - " + account.accountName;
    const active = (text === label);
    return (
      <React.Fragment key={account.accountId}>
        <li>
          <a className={"dropdown-item" + (active ? " active" : "")}
            href="#"
            onClick={e => handleClick(account.accountId, e)}
           >{emsp.repeat(depth)}
            {active ? label : renderLabel(label)}
          </a>
        </li>
        {accountsInDropdown
          .filter(a2 => a2.parentAccountId == account.accountId)
          .map(a2 => renderDropdownMenuItem(a2, accountsInDropdown, depth + 1))}
      </React.Fragment>
    );
  }

  function renderDropdownMenuItems() {
    if (!accountTypes || !accounts) {
      return (
        <li><h6 className="dropdown-header">Loading...</h6></li>
      );
    }
    let accountsInDropdown, accountTypesInDropdown;
    if (text && !selectedAccountId) {
      accountsInDropdown = [...new Set(accounts
        .filter(account => (account.accountCode + " - " + account.accountName)
          .toLowerCase()
          .includes(text.toLowerCase()))
        .map(account => account.accountId)
        .reduce((a, accountId) =>
          a.concat(findAncestors(accountId))
            .concat([accountId])
            .concat(findDescendants(accountId)), [])
        )].map(accountId => accounts.find(account => account.accountId === accountId));
      accountTypesInDropdown = accountTypes.filter(accountType =>
        accounts.some(account => account.accountTypeId === accountType.accountTypeId));
    } else {
      accountsInDropdown = accounts;
      accountTypesInDropdown = accountTypes;
    }
    if (accountsInDropdown.length == 0 || accountTypesInDropdown.length == 0) {
      return (
        <li><h6 className="dropdown-header">Account(s) not found</h6></li>
      );
    }
    return (
      accountTypesInDropdown.map(accountType => (
        <React.Fragment key={accountType.accountTypeId}>
          {accountType !== accountTypesInDropdown[0] &&
            <li><hr className="dropdown-divider"/></li>
          }
          <li>
            <h6 className="dropdown-header">
              {accountType.accountTypeCode + " - " + accountType.accountTypeName}
              {accountsInDropdown !== accounts &&
                <small className="float-end">
                  Showing {accountsInDropdown
                    .filter(account => account.accountTypeId === accountType.accountTypeId).length
                  } out of {accounts
                    .filter(account => account.accountTypeId === accountType.accountTypeId).length
                  }
                </small>}
            </h6>
          </li>
          {accountsInDropdown
            .filter(account => account.accountTypeId === accountType.accountTypeId)
            .filter(account => !account.parentAccountId)
            .map(account => renderDropdownMenuItem(account, accountsInDropdown))}
        </React.Fragment>
      ))
    );
  }

  function renderDropdownMenu() {
    return (
      <ul className={"dropdown-menu dropdown-menu-end"}
          style={{maxHeight: "45vh", overflowY: "auto", minWidth: "100%"}}>
        {renderDropdownMenuItems()}
      </ul>
    );
  }

  return (
    <div className="row mb-3 g-3 align-items-center">
      <div className="col-auto" style={{minWidth: "4em"}}>{label}:</div>
      <div className="col-auto px-0">
        <div className="dropdown">
          <input type="text"
            className="form-control"
            placeholder="Select account..."
            aria-label="Select account..."
            size="50"
            data-bs-toggle="dropdown" 
            value={text}
            onChange={handleChange}
            ref={inputRef}
          />
          {renderDropdownMenu()}
        </div>
      </div>
      <div className="col-auto">
        <i className={"bi bi-check2 " + (selectedAccountId ? "text-success" : "invisible")}></i>
      </div>
    </div>
  );
}

export default AccountSelect;
