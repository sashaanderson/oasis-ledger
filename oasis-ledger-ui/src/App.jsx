import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

import AccountSelect from 'util/AccountSelect';
import FetchContainer, { fetchJSON } from 'util/FetchContainer';

function App() {
  return (
    <HashRouter>
      <div className="oasisledger-root">
        <header className="py-2">
          <div className="container-xxl">
            <div className="d-flex align-items-center">
              <Link to="/" className="oasisledger-brand">
                <img src="favicon.svg" width="30" height="30" className="me-2"/>
                <span className="align-middle fw-bold">Oasis Ledger</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="my-4">
          <div className="container-xxl">
            <div className="row row-cols-auto mb-5">
              <div className="col">
                <Link to="/post" className="btn btn-success" role="button">
                  <i className="bi bi-plus-lg"></i> Post
                </Link>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-success">
                  <i className="bi bi-upload"></i> Bulk Import
                </button>
              </div>
            </div>
            {/*
            <div className="mb-4 d-flex align-items-center">
              Post:
              <button type="button" className="btn btn-outline-success">New quick entry</button>
              <button type="button" className="btn btn-outline-success">New split entry</button>
              <button type="button" className="btn btn-outline-success">Upload from file</button>
            </div>

            <div className="mb-5">
              {JSON.stringify(d3.range(10))}
            </div>
            */}

            <Post/>

            <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
            <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
            <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>

            <Post/>

            <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
            <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>

          </div>
        </main>
      </div>
    </HashRouter>
  );
}

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
  return (
    <div>
      <form>
        <AccountSelect label="From" accountTypes={accountTypes} accounts={accounts}/>
        <br/><br/>
        <AccountSelect label="To" accountTypes={accountTypes} accounts={accounts}/>
      </form>
    </div>
  );
}

export default App;
