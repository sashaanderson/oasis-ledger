import React from 'react';

import AccountInput from 'util/AccountInput';
import DatePicker from 'util/DatePicker';
import { fetchJSON } from 'util/FetchContainer';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);

    this.defaultInput = {
      inputCurrency: "CAD",
    };
    this.state = {
      resetCount: 0,
      input: this.defaultInput,
      valid: null,
      running: false,
      message: null,
    };
  }
  
  setInput(id, value) {
    this.setState(prevState => ({
      input: Object.assign({}, prevState.input, { [id]: value }),
      valid: null,
    }));
  }

  getInput(id) {
    return this.state.input[id] || "";
  }

  handleChange(e) {
    this.setInput(e.target.id, e.target.value);
  }

  handleClear() {
    this.setState(prevState => ({
      resetCount: prevState.resetCount + 1,
      input: this.defaultInput,
      valid: null,
      message: null,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    const input = this.state.input;
    const inputDate = moment(input.inputDate, "M/D/YYYY", true); // use strict parsing

    const valid = {
      inputDate: inputDate.isValid(),
      inputCurrency: !!input.inputCurrency,
      inputAmount: !!input.inputAmount && /^(\d+(,\d\d\d)*)?(\.\d+)?$/.test(input.inputAmount),
      inputAccountFrom: !!input.inputAccountFrom,
      inputAccountTo: !!input.inputAccountTo,
    };
    if (!Object.keys(valid).every(key => valid[key])) {
      this.setState({ valid: valid });
      return;
    }

    const inputAmount = input.inputAmount.replace(/,/g, "");

    const postingDTO = {
      postingDate: inputDate.format("YYYY-MM-DD"),
      description: input.inputDescription,
      details: [
        {
          accountId: input.inputAccountFrom,
          currency: input.inputCurrency,
          amount: "-" + inputAmount,
        }, {
          accountId: input.inputAccountTo,
          currency: input.inputCurrency,
          amount: inputAmount,
        },
      ],
    }

    this.setState({ running: true });

    fetchJSON('api/posting', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(postingDTO)
    }).then(posting => {
      this.setState({
        running: false,
        message: "Posted successfully: #" + posting.postingHeaderId,
      });
    }).catch(err => {
      this.setState({
        running: false,
        message: err,
      });
    });
  }

  handleDismiss() {
    this.setState({ message: null });
  }

  render() {
    return (
      <form className="oasisledger-post-form" onSubmit={this.handleSubmit}>
        <div className="form-row">
          <div className="col-auto mb-2">
            <DatePicker
              key={this.state.resetCount}
              onChange={this.setInput.bind(this, "inputDate")}
              value={this.getInput("inputDate")}
             ><input
                id="inputDate"
                type="text"
                placeholder="MM/DD/YYYY"
                className={"form-control" + (this.state.valid
                  ? (this.state.valid.inputDate ? "" : " is-invalid")
                  : "")}
                style={{maxWidth: "9.5em"}}
              />
            </DatePicker>
          </div>
          <div className="col mb-2">
            <div className="input-group flex-nowrap">
              <select
                className="custom-select flex-grow-0 w-auto"
                id="inputCurrency"
                onChange={this.handleChange}
                value={this.getInput("inputCurrency")}
                style={{minWidth: "5.3em"}}
               >{this.props.currencies && this.props.currencies
                  .sort((a, b) => a.currencyCode.localeCompare(b.currencyCode))
                  .map(c =>
                    <option>{c.currencyCode}</option>
                  )}
              </select>
              <input
                type="text"
                className={"form-control" + (this.state.valid
                  ? (this.state.valid.inputAmount ? "" : " is-invalid")
                  : "")}
                id="inputAmount"
                placeholder="0.00"
                onChange={this.handleChange}
                value={this.getInput("inputAmount")}
                style={{minWidth: "5.5em"}}
              />
            </div>
          </div>
        </div>
        <div className="form-row mb-2">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  From:
                </span>
              </div>
              <AccountInput
                accountTypes={this.props.accountTypes}
                accounts={this.props.accounts}
                key={this.state.resetCount}
                onChange={this.setInput.bind(this, "inputAccountFrom")}
               ><input
                  className={"form-control" + (this.state.valid
                    ? (this.state.valid.inputAccountFrom ? "" : " is-invalid")
                    : "")}
                  id="inputAccountFrom"
                  placeholder="Select account..."
                  type="text"
                />
              </AccountInput>
            </div>
          </div>
        </div>
        <div className="form-row mb-2">
          <div className="col">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  To:
                </span>
              </div>
              <AccountInput
                accountTypes={this.props.accountTypes}
                accounts={this.props.accounts}
                key={this.state.resetCount}
                onChange={this.setInput.bind(this, "inputAccountTo")}
               ><input
                  className={"form-control" + (this.state.valid
                    ? (this.state.valid.inputAccountTo ? "" : " is-invalid")
                    : "")}
                  id="inputAccountTo"
                  placeholder="Select account..."
                  type="text"
                />
              </AccountInput>
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <input
            className="form-control"
            id="inputDescription"
            placeholder="Description"
            onChange={this.handleChange}
            value={this.getInput("inputDescription")}
           />
        </div>
        <div className="form-row mb-2 align-items-center">
          <div className="col-auto">
            <button
              type="submit"
              className={"btn btn-primary" +
                (this.state.running ? " disabled" : "")}
             >Post</button>
          </div>
          <div className="col-auto">
            <button
              type="reset"
              className={"btn btn-outline-secondary" +
                (this.state.running ? " disabled" : "")}
              onClick={this.handleClear}
             >Clear</button>
          </div>
          <div className="col ml-2">
            {this.state.running ? (
              <div className="spinner-grow spinner-grow-sm text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            ) : (this.state.message && !(this.state.message instanceof Error) && (
              <div className="text-success">
                {this.state.message}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2">
          {!this.state.running && (this.state.message instanceof Error) && (
            <div className="alert alert-danger alert-dismissible" role="alert">
              {this.state.message.message}
              <button type="button" className="close" data-dismiss="alert" aria-label="Close"
                onClick={this.handleDismiss}
               ><span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
        </div>
      </form>
    );
  }
}

export default Post;
