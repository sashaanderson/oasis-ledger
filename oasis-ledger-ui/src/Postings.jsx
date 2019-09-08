import React from 'react';

import FetchContainer, { fetchJSON } from 'util/FetchContainer';
import { formatAmount, formatDateShort, formatDateLong } from 'util/formatters';

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
        <PostingsListing/>
      </div>
    </div>
  </div>
);

class PostingsListing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: { month: 0, year: 0 },
      top: { days: 14, key: 1 }, // { days: N } or { month: M, year: Y }
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setInput(id, value) {
    this.setState(prevState => ({
      input: Object.assign({}, prevState.input, { [id]: value }),
    }));
  }
  handleChange(e) {
    const id = e.target.id.replace(/Input$/, '');
    this.setInput(id, e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    const m = this.state.input.month;
    const y = this.state.input.year;
    if (m && y) {
      this.setState({ top: {
        month: m,
        year: y,
        key: this.state.top.key + 1
      }});
    }
  }

  handleClick(days) {
    this.setState({ top: {
      days: days,
      key: this.state.top.key + 1
    }});
  }

  render() {
    return (
      <div>
        <form className="mb-3" onSubmit={this.handleSubmit}>
          <div className="form-row">
            <div className="col-auto my-1">
              <div className="input-group">
                <select className="custom-select"
                  id="monthInput"
                  value={this.state.input.month}
                  onChange={this.handleChange}
                >
                  <option value="0" selected>Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
                <select className="custom-select"
                  id="yearInput"
                  value={this.state.input.year}
                  onChange={this.handleChange}
                >
                  <option value="0" selected>Year</option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
                <div className="input-group-append">
                  <button type="submit"
                    className="btn btn-outline-primary"
                    disabled={!this.state.input.month || !this.state.input.year}
                  >View</button>
                </div>
              </div>
            </div>
            <div className="col-auto my-1">
              <div className="btn-group">
                <button type="button" className="btn btn-outline-primary"
                  onClick={this.handleClick.bind(this, 14)}
                >14 days</button>
                <button type="button" className="btn btn-outline-primary"
                  onClick={this.handleClick.bind(this, 30)}
                >30 days</button>
              </div>
            </div>
          </div>
        </form>
        {/*
        <div className="card bg-light mb-3">
          <div className="card-body">
            Month... Year... View ....... Last 30 days ... Last 14 days 
          </div>
        </div>
        */}
        <FetchContainer key={this.state.top.key} fetch={{
          accounts: fetchJSON("api/account"),
          currencies: fetchJSON("api/currency"),
          postings: this.state.top.days
            ? fetchJSON("api/posting/top?days=" + this.state.top.days)
            : fetchJSON("api/posting/month?year=" + this.state.top.year + "&month=" + this.state.top.month)
        }}>
          <PostingsListingResults top={this.state.top}/>
        </FetchContainer>
      </div>
    );
  }
}

class PostingsListingResults extends React.Component {
  constructor(props) {
    super(props);
  }

  renderPostingsGroup(postingDate, postingsGroup) {
    return (
      <React.Fragment>
        <h6 className="mt-4">{formatDateLong(postingDate)}</h6>
        <div className="list-group mb-2">
          {postingsGroup.map(posting => (
            <div className="list-group-item">
              <div className="row">
                <div className="col-sm-auto oasisledger-postings-listing__date">
                  {formatDateShort(posting.postingDate)}
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
    const postings = [...this.props.postings || []].sort((a, b) => b.postingDate - a.postingDate);
    const postingsGroups = new Map();

    postings.forEach(posting => {
      if (!postingsGroups.has(posting.postingDate)) {
        postingsGroups.set(posting.postingDate, []);
      }
      postingsGroups.get(posting.postingDate).push(posting);
    });

    return (
      <div className="oasisledger-postings-listing">
        <p>Found {postings.length} posting{postings.length == 1 ? "" : "s"} in {
          this.props.top.days
            ? "the past " + this.props.top.days + " days"
            : "month " + this.props.top.month + " year " + this.props.top.year}.</p>
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
