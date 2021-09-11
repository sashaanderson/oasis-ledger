import React, { useState } from 'react';

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

  function getInputValue(id) {
    return input[id] || "";
  }

  function setInputValue(id, value) {
    if (input[id] !== value) {
      setInput(Object.assign({}, input, { [id]: value }));
      setValid(null);
    }
  }

  return (
    <DocumentTitle title="Post">
      <div>
        <div className="mb-5">
          input={JSON.stringify(input)}
        </div>

        <form>
          <div className="mb-2">
          </div>

          <div className="row mb-3">
            <div className="col-auto">
              <DatePicker onPick={postingDate => setInputValue("postingDate", postingDate)}/>
            </div>
            <div className="col">
              <input type="text" className="form-control" placeholder="0.00"/>
            </div>
          </div>

          <div className="row mb-3 g-3 align-items-center">
            <div className="col-auto" style={{minWidth: "4em"}}>From:</div>
            <div className="col ps-0">
              <AccountPicker
                accountTypes={accountTypes}
                accounts={accounts}
                onPick={accountId => setInputValue("accountFrom", accountId)}
              />
            </div>
          </div>

          <div className="row mb-3 g-3 align-items-center">
            <div className="col-auto" style={{minWidth: "4em"}}>To:</div>
            <div className="col-auto ps-0">
              <AccountPicker
                accountTypes={accountTypes}
                accounts={accounts}
                onPick={accountId => setInputValue("accountTo", accountId)}
              />
            </div>
          </div>

        </form>
      </div>
    </DocumentTitle>
  );
}

export default Post;

