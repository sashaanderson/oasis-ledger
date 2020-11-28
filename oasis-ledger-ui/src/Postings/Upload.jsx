import React, { useEffect, useState, useRef } from 'react';

import AccountInput from 'util/AccountInput';
import DocumentTitle from 'util/DocumentTitle';
import FetchContainer, { fetchJSON } from 'util/FetchContainer';
import { mdash } from 'util/unicode'
import { formatAmount, formatDateLong, formatDateShort } from 'util/formatters';

export default function Upload() {
  return (
    <DocumentTitle title="Upload">
      <div className="m-3">
        <FetchContainer wait={false} fetch={{
          accountTypes: fetchJSON("api/account-type"),
          accounts: fetchJSON("api/account"),
          institutions: fetchJSON("api/institution"),
          institutionLinks: fetchJSON("api/institution/link"),
        }}>
          <Upload1/>
        </FetchContainer>
      </div>
    </DocumentTitle>
  );
}

function Upload1({ accountTypes, accounts, institutions, institutionLinks }) {
  const [state, setState] = useState({
    input: {},
    valid: null,
    submitting: false,
    err: null,
  });
  const fileInputRef = useRef();
  useEffect(() => {
    bsCustomFileInput.init();
  });

  if (state.statements) {
    return (
      <Upload2
        key={state.input.file}
        accountTypes={accountTypes}
        accounts={accounts}
        statements={state.statements}
      />
    );
  }

  function setInput(input) {
    setState(Object.assign({}, state, {
      input: Object.assign({}, state.input, input),
      valid: null,
    }));
  }

  function handleClear() {
    $(fileInputRef.current).val('');
    $(fileInputRef.current).next('label').html('Choose file...');
    setState(Object.assign({}, state, {
      input: {},
      valid: null,
      err: null,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const valid = {
      file: !!state.input.file,
      institution: !!state.input.institution,
      account: !!state.input.account,
    };
    if (!Object.keys(valid).every(key => valid[key])) {
      setState(Object.assign({}, state, {
        valid: valid,
      }));
      return;
    }
    setState(Object.assign({}, state, {
      submitting: true,
      err: null,
    }));
    const formData = new FormData();
    formData.append('file', state.input.file);
    formData.append('institution', state.input.institution);
    if (state.input.account > 0) {
      formData.append('account', state.input.account);
    }
    fetchJSON('api/upload', {
      method: 'POST',
      body: formData
    }).then(statements => {
      statements.forEach((statement, i) => {
        statement.key = i + 1;
        statement.account = accounts.find(a => a.accountId === statement.accountId);
      });
      setState(Object.assign({}, state, {
        submitting: false,
        statements: statements,
      }));
    }).catch(err => {
      setState(Object.assign({}, state, {
        submitting: false,
        err: err,
      }));
    });
  }

  return (
    <div className="mx-auto" style={{maxWidth: "35em"}}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="custom-file">
            <input
              type="file"
              ref={fileInputRef}
              className={"custom-file-input" + ((!state.valid || state.valid.file) ? "" : " is-invalid")}
              id="uploadFile"
              onChange={e => setInput({ "file": e.target.files[0] })}
            />
            <label className="custom-file-label" htmlFor="uploadFile">Choose file...</label>
          </div> 
        </div>
        <div className="form-group">
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="oneAccount1"
              name="oneAccount"
              className="custom-control-input"
              checked={state.input.oneAccount == 0}
              onChange={e => setInput({
                "oneAccount": 0,
                "account": -1,
              })}
            />
            <label className="custom-control-label" htmlFor="oneAccount1">One or many accounts</label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              id="oneAccount2"
              name="oneAccount"
              className="custom-control-input"
              checked={state.input.oneAccount == 1}
              onChange={e => setInput({
                "oneAccount": 1,
                "account": "",
              })}
            />
            <label className="custom-control-label" htmlFor="oneAccount2">One account</label>
          </div>
        </div>
        <div className="form-group">
          <label>If one or many accounts:</label>
          <InstitutionSelect institutions={institutions} institutionLinks={institutionLinks}>
            <select
              className={"custom-select" + ((!state.valid || state.valid.institution) ? "" : " is-invalid")}
              value={state.input.institution || ""}
              onChange={e => setInput({
                "institution": e.target.value,
                "account": "-1",
                "oneAccount": 0,
              })}
            />
          </InstitutionSelect>
        </div>
        <div className="form-group">
          <label>If one account:</label>
          <AccountSelect accounts={
            accounts && accounts
              .filter(a => institutionLinks && institutionLinks.some(link => link.accountId == a.accountId))
              .filter(a => (
                !(state.input.oneAccount === 0) || !state.input.institution ||
                institutionLinks.some(link => (
                  link.accountId == a.accountId &&
                  link.institutionId == state.input.institution
                ))
              ))
          }>
            <select
              className={"custom-select" + ((!state.valid || state.valid.account) ? "" : " is-invalid")}
              value={state.input.account || ""}
              onChange={e => setInput({
                "account": e.target.value,
                "institution": institutionLinks.find(link => link.accountId == e.target.value).institutionId,
                "oneAccount": 1,
              })}
            />
          </AccountSelect>
        </div>
        <button
          type="submit"
          className="btn btn-primary mr-2"
          disabled={state.submitting}
        >Submit</button>
        <button
          type="button"
          className="btn btn-outline-secondary mr-2"
          disabled={state.submitting}
          onClick={handleClear}
        >Clear</button>
      </form>
      {state.err && (
        <div className={"alert alert-danger alert-dismissible mt-3"}>
          <button type="button" className="close" aria-label="Close" onClick={() =>
            setState(Object.assign({}, state, {
              err: null,
            }))
          }>
            <span aria-hidden="true">&times;</span>
          </button>
          {state.err.toString()}
        </div>
      )}
      {/*
      <p className="mt-3">state = {JSON.stringify(state)}</p>
      */}
    </div>
  );
}

function InstitutionSelect({ institutions, institutionLinks, children }) {
  const options = [
    <option value="" hidden>Choose institution...</option>
  ];
  if (institutions) {
    institutions.sort((i1, i2) => i1.institutionCode.localeCompare(i2.institutionCode));
    for (const institution of institutions) {
      const links = institutionLinks.filter(link => link.institutionId == institution.institutionId);
      if (links.length > 0) {
        options.push(
          <option value={institution.institutionId} disabled={links.length == 0}>
            {institution.institutionCode} {mdash} {institution.institutionName}
          </option>
        );
      }
    }
  } else {
    options.push(
      <option disabled className="text-muted">Loading...</option>
    );
  }
  const selectComponent = React.Children.only(children); // <select>
  return React.cloneElement(selectComponent, selectComponent.props, ...options);
}

function AccountSelect({ accounts, children }) {
  const options = [
    <option value="" hidden>Choose account...</option>
  ];
  if (accounts) {
    options.push(
      <option key={-1} value="-1" disabled hidden>N/A</option>
    );
    options.push(accounts.map(account => (
      <option key={account.accountId} value={account.accountId}>
        {account.accountCode + " - " + account.accountName}
      </option>
    )));
  } else {
    options.push(
      <option disabled className="text-muted">Loading...</option>
    );
  }
  const selectComponent = React.Children.only(children); // <select>
  return React.cloneElement(selectComponent, selectComponent.props, ...options);
}

function Upload2({ accountTypes, accounts, statements }) {
  if (!accounts) return null;
  const statementAccountIds = accounts
    .map(a => a.accountId)
    .filter(accountId => statements.some(s => s.accountId === accountId));

  return (
    <div>
      <p className="text-muted">
        Total of {statements.length} {statements.length == 1 ? "entry" : "entries"} to be posted
        for {statementAccountIds.length} account{statementAccountIds.length == 1 ? "" : "s"}.
      </p>
      {statementAccountIds.map(accountId => (
        <Upload21
          accountTypes={accountTypes}
          accounts={accounts}
          statements={statements.filter(s => s.accountId === accountId)}
          key={accountId}
        />
      ))}
      <p className="mt-3">statements = {JSON.stringify(statements)}</p>
    </div>
  );
}

function Upload21({ accountTypes, accounts, statements }) {
  const account = accounts.find(a => a.accountId === statements[0].accountId);
  const statementDates = [...new Set(statements.map(s => s.statementDate))].sort();
  return (
    <div>
      <p>
        <strong>{account.accountCode + " - " + account.accountName}</strong>
        <span className="text-muted">
          {" " + mdash + " " + statements.length + " " + (statements.length == 1 ? "entry" : "entries") +
           " over " + statementDates.length + " date" + (statementDates.length == 1 ? "" : "s")}.
        </span>
      </p>

      {statementDates.map(statementDate => (
        <div key={statementDate} className="mb-3">
          <h6>{formatDateLong(statementDate)}</h6>
          <div className="list-group mb-2">
            {statements.filter(statement => statement.statementDate === statementDate).map(statement => (
              <Upload22
                accountTypes={accountTypes}
                accounts={accounts}
                statement={statement}
                key={statement.key}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function Upload22({ accountTypes, accounts, statement }) {
  const [state, setState] = useState({
    stateKey: 0,
    input: {
      description: statement.description,
    },
    valid: null,
    submitting: false,
    submitted: false,
    err: null,
    message: null,
  });

  function setInput(input) {
    setState(Object.assign({}, state, {
      input: Object.assign({}, state.input, input),
      valid: null,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const valid = {
      account: !!state.input.account,
      description: !!state.input.description,
    };
    if (!Object.keys(valid).every(key => valid[key])) {
      setState(Object.assign({}, state, {
        valid: valid,
      }));
      return;
    }

    const postingDTO = {
      postingDate: statement.statementDate,
      description: state.input.description,
      details: [
        {
          accountId: statement.accountId,
          amount: statement.amount,
          statement: {
            statementDate: statement.statementDate,
            accountId: statement.accountId,
            amount: statement.amount,
            description: statement.description,
          }
        }, {
          accountId: state.input.account,
          amount: -statement.amount,
        }
      ],
    };

    setState(Object.assign({}, state, {
      submitting: true,
      err: null,
    }));
    //fetch, setState(submitting: false, message: ...)

    fetchJSON('api/posting', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(postingDTO)
    }).then(posting => {
      setState(Object.assign({}, state, {
        submitting: false,
        submitted: true,
        err: null,
        message: "Posted successfully: #" + posting.postingHeaderId,
      }));
    }).catch(err => {
      setState(Object.assign({}, state, {
        submitting: false,
        submitted: false,
        err: err,
        message: err.message,
      }));
    });

  }

  const account = accounts.find(a => a.accountId === statement.accountId);
  return (
    <div className="list-group-item" key={statement.key}>
      <div className="row">
        <div className="col-sm-auto">{formatDateShort(statement.statementDate)}</div>
        <div className={"col-sm-auto" + (statement.amount < 0 ? " text-danger" : "")}>
          {formatAmount(statement.amount)}
          {statement.amount > 0 && <span className="invisible">()</span>}
        </div>
        <div className="col-sm mb-1">{statement.account.accountCode} - {statement.account.accountName}</div>
        <div className="col-md">
          <div className="row">
            <div className="col-sm-auto d-block d-md-none" style={{minWidth: "9em"}}></div>
            <div className="col-sm mb-1">{statement.description}</div>
          </div>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-sm-auto invisible">{formatDateShort(statement.statementDate)}</div>
        <div className={"col-sm-auto" + (statement.amount > 0 ? " text-danger" : "")}>
          {formatAmount(-statement.amount)}
          {statement.amount < 0 && <span className="invisible">()</span>}
        </div>
        <div className="col-sm mb-1">
          <AccountInput
            key={state.stateKey}
            accountTypes={accountTypes}
            accounts={accounts}
            onChange={accountId => setInput({ account: accountId })}
           ><input
              className={"form-control" + ((state.valid && !state.valid.account) ? " is-invalid" : "")}
              placeholder="Select account..."
              type="text"
            />
          </AccountInput>
        </div>
        <div className="col-md">
          <div className="row">
            <div className="col-sm-auto d-block d-md-none" style={{minWidth: "9em"}}></div>
            <div className="col-sm mb-1">
              <input
                className={"form-control" + ((state.valid && !state.valid.description) ? " is-invalid" : "")}
                placeholder="Description..."
                type="text"
                value={state.input.description || ""}
                onChange={e => setInput({ description: e.target.value })}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex-sm-row-reverse align-items-center">
        <div className="col-sm-auto mt-1 align-self-start">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSubmit}
            disabled={state.submitting || state.submitted}
           >Post</button>
        </div>
        <div className="col-sm-auto mt-1">
          {state.submitting ? (
            <div className="spinner-grow spinner-grow-sm text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : state.err ? (
            <div className="text-danger">
              <strong>Oh sorrow!</strong> {state.message}
            </div>
          ) : (
            <div className="text-success">
              {state.message}
            </div>
          )}
        </div>
      </div>
      <div><small>statement = {JSON.stringify(statement)}</small></div>
    </div>
  );
}
