import React from 'react';

import FetchContainer, { fetchJSON } from 'util/FetchContainer';

import Post from './Post';

const Dashboard = () => (
  <div className="m-3">
    <div className="row">
      <div className="col-md mb-3">zzz</div>
      <div className="col-md-auto">
        <FetchContainer wait={false} fetch={{
          accountTypes: fetchJSON("api/account-type"),
          accounts: fetchJSON("api/account"),
          currencies: fetchJSON("api/currency"),
        }}>
          <Post/>
        </FetchContainer>
      </div>
    </div>
  </div>
);

export default Dashboard;
