import React, { useState, useRef } from 'react';

import { emsp } from 'util/unicode';

function AccountPicker({ id, accountTypes, accounts, onPick, valid }) {
  const [text, setText] = useState("");
  const [selectedAccountId, setSelectedAccountId] = useState(0);
  const inputRef = useRef(null);

  function setAccount(account, setTextFlag = false) {
    setSelectedAccountId(account.accountId);
    if (setTextFlag) {
      setText(account.accountCode + " - " + account.accountName);
    }
    if (!selectedAccountId || selectedAccountId !== account.accountId) {
      onPick(account.accountId);
    }
  }

  function handleChange(e) {
    const text = e.target.value;
    setText(text);
    const account = accounts && accounts.find(a => text == a.accountCode + " - " + a.accountName);
    if (account) {
      setAccount(account, false);
    } else {
      setSelectedAccountId(0);
      if (selectedAccountId)
        onPick(undefined);
    }

    setTimeout(function() {
      const dropdown = bootstrap.Dropdown.getOrCreateInstance(inputRef.current);
      dropdown.show();
    }, 0);
  }

  function handleClick(e, accountId) {
    e.preventDefault();
    const account = accounts.find(a => a.accountId === accountId);
    setAccount(account, true);

    const dropdown = bootstrap.Dropdown.getInstance(inputRef.current);
    dropdown.hide();
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
            onClick={e => handleClick(e, account.accountId)}
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
        accountsInDropdown.some(account => account.accountTypeId === accountType.accountTypeId));
    } else {
      accountsInDropdown = accounts;
      accountTypesInDropdown = accountTypes;
    }
    if (accountsInDropdown.length == 0 || accountTypesInDropdown.length == 0) {
      return null;
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
    const dropdownMenuItems = renderDropdownMenuItems();
    return (
      <ul className={"dropdown-menu dropdown-menu-end" + (dropdownMenuItems ? "" : " invisible")}
          tabIndex="-1"
          style={{maxHeight: "45vh", overflowY: "auto", minWidth: "100%"}}>
        {dropdownMenuItems}
      </ul>
    );
  }

  return (
    <div className="dropdown">
      <input type="text"
        className={"form-control" + (valid === undefined || valid ? "" : " is-invalid")}
        id={id}
        placeholder="Select account..."
        aria-label="Select account..."
        data-bs-toggle="dropdown"
        value={text}
        onChange={handleChange}
        ref={inputRef}
      />
      {renderDropdownMenu()}
    </div>
  );
}

export default AccountPicker;
