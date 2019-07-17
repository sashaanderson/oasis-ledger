import React from 'react';

import FetchContainer, { fetchJSON } from 'util/FetchContainer';
import { formatAmount, formatDate } from 'util/formatters';
import { emsp, mdash } from 'util/unicode';

import Post from './Post';

const Postings = () => (
  <div className="m-3">
    <div className="row">
      <div className="col-md mb-3">zzz</div>
      <div className="col-md-auto mb-3">
        <FetchContainer wait={false} fetch={{
          accountTypes: fetchJSON("api/account-type"),
          accounts: fetchJSON("api/account"),
          currencies: fetchJSON("api/currency"),
        }}>
          <Post/>
        </FetchContainer>
      </div>
    </div>
    <div className="row">
      <div className="col mb-3">
        <hr/>
        {/*
        <div className="card mb-3">
          <div className="card-body">
            Sort by: ...
          </div>
        </div>
        */}
        <FetchContainer fetch={{
          accounts: fetchJSON("api/account"),
          currencies: fetchJSON("api/currency"),
          postings: fetchJSON("api/posting/top"),
        }}>
          <PostingsListing/>
        </FetchContainer>
      </div>
    </div>
  </div>
);

class PostingsListing extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPostingsGroup(postingDate, postingsGroup) {
    const m = moment(postingDate);
    const postingDateText = "Posting date: " + m.format('ddd, MMM Do, YYYY') +
      (dd =>
        dd == 0 ? " " + mdash + " Today" : 
        dd == 1 ? " " + mdash + " Yesterday" :
        dd > 1 ? " " + mdash + " " + dd + " days ago" : ""
      )(moment().diff(m, 'days'));
    return (
      <React.Fragment>
        <h6 className="mt-4">{postingDateText}</h6>
        <div className="list-group mb-2">
          {postingsGroup.map(posting => (
            <div className="list-group-item">
              <div className="row">
                <div className="col-sm-auto oasisledger-postings-listing__date">
                  {formatDate(posting.postingDate)}
                </div>
                <div className="col-sm font-weight-bold mb-1">{posting.description}</div>
              </div>
              {posting.details.filter(pd => pd.amount > 0).map(pd => (
                <div className="row">
                  <div className="col-sm-auto oasisledger-postings-listing__amount">{formatAmount(pd.amount)}</div>
                  <div className="col-sm text-nowrap">{this.props.accounts.find(a => a.accountId === pd.accountId).accountName}</div>
                  <div className="col-sm-auto text-nowrap"></div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-sm-auto d-block d-md-none" style={{minWidth: "9em"}}></div>
                      <div className="col-sm oasisledger-postings-listing__statement">
                        {pd.statement && pd.statement.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {posting.details.filter(pd => pd.amount < 0).map(pd => (
                <div className="row">
                  <div className="col-sm-auto text-nowrap"></div>
                  <div className="col-sm-auto text-danger oasisledger-postings-listing__amount">{formatAmount(pd.amount)}</div>
                  <div className="col-sm text-nowrap">{this.props.accounts.find(a => a.accountId === pd.accountId).accountName}</div>
                  <div className="col-md">
                    <div className="row">
                      <div className="col-sm-auto d-block d-md-none"></div>
                      <div className="col-sm-auto d-block d-md-none" style={{minWidth: "9em"}}></div>
                      <div className="col-sm oasisledger-postings-listing__statement">
                        {pd.statement && pd.statement.description}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/*
              <div className="pull-right">
                <small className="text-muted">{new Date(posting.auditTs).toString()}</small>
              </div>
              */}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }

  render() {
    if (!this.props.postings || this.props.postings.length == 0) {
      return (
        <div>N/A</div>
      );
    }

    const postings = [...this.props.postings].sort((a, b) => b.postingDate - a.postingDate);
    const postingsGroups = new Map();

    postings.forEach(posting => {
      if (!postingsGroups.has(posting.postingDate)) {
        postingsGroups.set(posting.postingDate, []);
      }
      postingsGroups.get(posting.postingDate).push(posting);
    });

    return (
      <div className="oasisledger-postings-listing">
        {Array.from(postingsGroups.entries())
          .map(([postingDate, postingsGroup]) =>
            this.renderPostingsGroup(postingDate, postingsGroup)
          )}
        {/*
        <p className="mt-3"><small>{JSON.stringify(this.props.postings)}</small></p>
        <p className="mt-3"><small>{JSON.stringify(this.props.currencies)}</small></p>
        <p className="mt-3"><small>{JSON.stringify(this.props.accounts)}</small></p>
        */}
      </div>
    );
    /*
          .map(ts => (
            <div>
              <div>{postingDate}</div>
              <div className="list-group">
                {postings.filter(posting => posting.postingDate == postingDate)
                  .map(posting => (
                    <div className="list-group-item">
                      <div>{posting.description}</div>
                      <div>{new Date(posting.auditTs).toString()}</div>
                    </div>
                  ))}
              </div>
            </div>
    */
  }
}

export default Postings;
