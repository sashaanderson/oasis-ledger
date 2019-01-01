import React from 'react';
import { Link, Route } from 'react-router-dom';

import Accounts from './Accounts';
import Users from './Users';

const Settings = () => (
  <div>
    <Route exact path="/settings" component={SettingsIndex}/>
    <Route path="/settings/accounts" component={Accounts}/>
    <Route path="/settings/users" component={Users}/>
  </div>
);

const SettingsIndex = () => (
  <div className="m-3">
    <ul className="nav flex-column">
      <li className="nav-item">
        <Link to="/settings/accounts" className="nav-link">Accounts</Link>
      </li>
      <li className="nav-item">
        <Link to="/settings/users" className="nav-link">Users</Link>
      </li>
    </ul>
  </div>
);

export default Settings;
