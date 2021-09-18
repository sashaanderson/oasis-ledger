import React from 'react';
import { Link, Route, Switch, useLocation } from 'react-router-dom';

import Main from './Main';
import Post from './Post';
import ErrorBoundary from './ErrorBoundary';

function App() {
  const loc = useLocation();

  function renderBrandIcon() {
    if (loc.pathname === "/") {
      return (
        <img src="favicon.svg" width="30" height="30"/>
      );
    } else {
      return (
        <svg className="bi" width="30" height="30">
          <use xlinkHref="lib/bootstrap-icons-1.5.0/bootstrap-icons.svg#arrow-left"/>
        </svg>
      );
    }
  }

  return (
    <div className="oasisledger-root">
      <header className="py-2">
        <div className="container-xxl">
          <div className="oasisledger-brand d-flex align-items-center">
            <Link to="/" className="d-inline-block p-1 me-1">
              {renderBrandIcon()}
            </Link>
            <Link to="/" className="d-inline-block p-1">
              <span className="align-middle fw-bold">Oasis Ledger</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="my-4">
        <div className="container-xxl">
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={Main}/>
              <Route path="/post" component={Post}/>
            </Switch>
          </ErrorBoundary>

          {/*
          */}

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

          {/*
          <Post/>
          <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
          <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
          <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
          <Post/>
          <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
          <br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>.<br/>
          */}

        </div>
      </main>
    </div>
  );
}

export default App;
