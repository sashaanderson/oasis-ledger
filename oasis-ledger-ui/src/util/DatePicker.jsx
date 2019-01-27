import React from 'react';
import PropTypes from 'prop-types';

const FIRST_DAY_OF_WEEK = 0; // 0=Sunday, 6=Saturday

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.today = moment().startOf("day");
    this.state = {
      show: false,
      firstDate: moment(this.today).startOf("month"),
      hoverDate: null,
      selectedDate: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.inputRef = React.createRef();
  }

  static getDerivedStateFromProps(newProps, prevState) {
    const m = moment(newProps.value, "M/D/YYYY", true).startOf("day");
    if (m.isValid() && !m.isSame(prevState.selectedDate)) {
      return {
        firstDate: moment(m).startOf("month"),
        selectedDate: m,
      };
    }
    if (!m.isValid()) {
      return { selectedDate: null };
    }
  }

  handleChange(e) {
    const value = e.target.value;
    this.props.onChange(value);
  }

  setSelectedDate(m, e) {
    e.preventDefault();
    this.setState({
      firstDate: moment(m).startOf("month"),
      selectedDate: m,
      show: false,
    });
    this.props.onChange(m.format("M/D/YYYY"));
  }

  setFirstDate(m, e) {
    e.preventDefault();
    this.setState({ firstDate: m });
  }

  handleFocus(e) {
    clearTimeout(this.showTimeoutId);
    if (!this.state.show) {
      this.setState({ show: true });
    }
  }

  handleBlur() {
    this.showTimeoutId = setTimeout(() => {
      if (this.state.show) {
        this.setState({ show: false });
      }
    }, 0);
  }

  handleHover(m) {
    this.setState({ hoverDate: m });
  }

  renderPickButton(m) {
    let btnClass;
    if (m.isSame(this.state.hoverDate)) {
      btnClass = "btn-outline-warning";
    } else if (m.isSame(this.state.selectedDate)) {
      btnClass = "btn-primary";
    } else if (m.isSame(this.today)) {
      btnClass = "btn-outline-success";
    }
    let textClass;
    if (m.month() != this.state.firstDate.month()) {
      textClass = "text-secondary";
    }
    return (
      <a
        className={"btn" + (btnClass ? " " + btnClass : "") + " oasisledger-datepicker__pick-button"}
        href="#" role="button"
        onMouseEnter={this.handleHover.bind(this, m)}
        onMouseLeave={this.handleHover.bind(this, null)}
        onClick={this.setSelectedDate.bind(this, m)}
       ><span className={textClass}>
          {m.date()}
        </span>
      </a>
    );
  }

  renderDropdownMenu() {
    let startDate = moment(this.state.firstDate);
    while (startDate.day() != FIRST_DAY_OF_WEEK) {
      startDate.subtract(1, "d");
    }
    return (
      <div className={"shadow dropdown-menu" + (this.state.show ? " show" : "")}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        tabIndex="-1"
       ><div className="oasisledger-datepicker">
          <div className="d-inline-block">
            <div className="d-flex">
              <a className="btn"
                href="#" role="button"
                onClick={this.setFirstDate.bind(this, moment(this.state.firstDate).subtract(1, "M"))}
               ><i className="fa fa-angle-left" aria-hidden="true"></i>
              </a>
              <div className="align-self-center flex-grow-1 text-center">
                {this.state.firstDate.format("MMMM YYYY")}
              </div>
              <a className="btn"
                href="#" role="button"
                onClick={this.setFirstDate.bind(this, moment(this.state.firstDate).add(1, "M"))}
               ><i className="fa fa-angle-right" aria-hidden="true"></i>
              </a>
            </div>
            <div>
              {d3.range(7)
                .map(dd => moment(startDate).add(dd, "d"))
                .map(m => (
                  <div className="oasisledger-datepicker__weekday-label">
                    <small>{m.format("dd")}</small>
                  </div>
                ))}
            </div>
            {d3.range(6).map(dw => (
              <div>
                {d3.range(7)
                  .map(dd => moment(startDate).add(dw, "w").add(dd, "d"))
                  .map(m => this.renderPickButton(m))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control"
          id={this.props.id}
          placeholder="MM/DD/YYYY"
          size="10"
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.props.value}
          ref={this.inputRef}
        />
        {this.renderDropdownMenu()}
        <div className="input-group-append">
          <button
            className={"btn" +
              (this.today.isSame(this.state.selectedDate)
                ? " btn-outline-success"
                : " btn-outline-secondary")}
            disabled={this.today.isSame(this.state.selectedDate)}
            type="button"
            onClick={this.setSelectedDate.bind(this, this.today)}
           >Today</button>
        </div>
      </React.Fragment>
    );
  }
}

DatePicker.propTypes = {
  id: PropTypes.string,
  onChange: PropTypes.func,
};

export default DatePicker;
