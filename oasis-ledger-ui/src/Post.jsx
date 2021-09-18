import React, { useEffect, useState } from 'react';

import AccountPicker from 'util/AccountPicker';
import DatePicker from 'util/DatePicker';
import DocumentTitle from 'util/DocumentTitle';
import FetchContainer, { fetchJSON } from 'util/FetchContainer';

function Post({ accountTypes, accounts, fetched = false }) {
  if (!fetched) {
    return (
      <FetchContainer wait={false} fetch={{
        accountTypes: fetchJSON("api/account-type"),
        accounts: fetchJSON("api/account"),
      }}>
        <Post fetched={true}/>
      </FetchContainer>
    );
  }

  const [input, setInput] = useState({});
  const [valid, setValid] = useState(null);

  const [resetKey, setResetKey] = useState(0);

  const [running, setRunning] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    document.getElementById("post__postingDate").focus();
  }, [resetKey]);

  function getInputValue(id) {
    return input[id] || "";
  }

  function setInputValue(id, value) {
    if (input[id] !== value) {
      setInput(Object.assign({}, input, { [id]: value }));
      setValid(null);
    }
  }

  function handleClear() {
    setResetKey(resetKey + 1);
    setInput({});
    setValid(null);
    setMessage(null);
  }

  function handleDismissMessage() {
    setMessage(null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const valid2 = {
      postingDate: !!input.postingDate && /^\d\d\d\d-\d\d-\d\d$/.test(input.postingDate),
      amount: !!input.amount
        && /[1-9]/.test(input.amount)
        && /^(\d+(,\d\d\d)*)?(\.\d+)?$/.test(input.amount), //XXX
      accountFrom: !!input.accountFrom,
      accountTo: !!input.accountTo,
    }
    if (!Object.keys(valid2).every(key => valid2[key])) {
      setValid(valid2);
      return;
    }

    const amount = input.amount.replace(/,/g, ""); //XXX
    const postingDTO = {
      postingDate: input.postingDate,
      description: input.description || "",
      details: [{
        accountId: input.accountFrom,
        amount: "-" + amount,
      }, {
        accountId: input.accountTo,
        amount: amount,
      }]
    };

    setRunning(true);

    fetchJSON('api/posting', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(postingDTO)
    }).then(posting => {
      setRunning(false);
      setMessage("Posted successfully -- #" + posting.postingHeaderId);
    }).catch(err => {
      setRunning(false);
      setMessage(err);
    });
  }

  return (
    <DocumentTitle title="Post">
      <div style={{maxWidth: "32em", margin: "0 auto"}}>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3 g-3">
            <div className="col-auto">
              <DatePicker
                id="post__postingDate"
                key={resetKey}
                valid={!valid || valid.postingDate}
                initialDate={resetKey == 0}
                onPick={postingDate => setInputValue("postingDate", postingDate)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className={"form-control" + (!valid || valid.amount ? "" : " is-invalid")}
                placeholder="0.00"
                onChange={e => setInputValue("amount", e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3 g-3 align-items-center">
            <div className="col-auto" style={{minWidth: "4em"}}>From:</div>
            <div className="col ps-0">
              <AccountPicker
                key={resetKey}
                valid={!valid || valid.accountFrom}
                accountTypes={accountTypes}
                accounts={accounts}
                onPick={accountId => setInputValue("accountFrom", accountId)}
              />
            </div>
          </div>

          <div className="row mb-3 g-3 align-items-center">
            <div className="col-auto" style={{minWidth: "4em"}}>To:</div>
            <div className="col ps-0">
              <AccountPicker
                key={resetKey}
                valid={!valid || valid.accountTo}
                accountTypes={accountTypes}
                accounts={accounts}
                onPick={accountId => setInputValue("accountTo", accountId)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Description..."
                onChange={e => setInputValue("description", e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3 g-3 align-items-center justify-content-between">
            <div className="col-auto">
              <button
                type="submit"
                className={"btn btn-success btn-lg" + (running ? " disabled" : "")}
               ><i className="bi bi-plus-lg pe-1"></i> Post
              </button>
            </div>
            <div className="col-auto">
              {running && (
                <div className="spinner-border spinner-border-sm text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              )}
            </div>
            <div className="col d-flex flex-row-reverse">
              <button
                type="reset"
                className={"btn btn-outline-secondary" + (running ? " disabled" : "")}
                onClick={handleClear}
               ><i className="bi bi-x-lg pe-1"></i> Clear
              </button>
            </div>
          </div>

        </form>

        <div className="mt-4">
          {message && !running && !(message instanceof Error) && (
            <div className="alert alert-success" role="alert">
              {message}
            </div>
          )}
          {message && !running && (message instanceof Error) && (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              {message.message}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                onClick={handleDismissMessage}></button>
            </div>
          )}
        </div>

      </div>
    </DocumentTitle>
  );
}

export default Post;

