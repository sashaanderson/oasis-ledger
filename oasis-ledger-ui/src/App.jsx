import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import Dashboard from './Dashboard';
import Settings from './Settings';
import Sidebar from './Sidebar';

const App = () => (
  <div className="oasisledger-root">
    <header>
      <div className="oasisledger-logo">
        Oasys Ledger
      </div>
    </header>
    <HashRouter>
      <div className="oasisledger-content">
        <Route path="/" component={Sidebar}/>
        <main className="oasisledger-main">
          <Switch>
            <Redirect exact from="/" to="/dashboard"/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
          <Route path="/settings" component={Settings}/>
        </main>
      </div>
    </HashRouter>
  </div>
);

export default App;
