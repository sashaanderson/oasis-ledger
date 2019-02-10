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
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static getDerivedStateFromProps(newProps, prevState) {
    const m = moment(newProps.value, "M/D/YYYY", true).startOf("day");
    if (m.isValid() && !m.isSame(prevState.selectedDate)) {
      return {
        firstDate: moment(m).startOf("month"),
        selectedDate: m,
      };
    } else if (!m.isValid() && prevState.selectedDate !== null) {
      return {
        selectedDate: null,
      };
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
        this.setState({
          show: false,
          firstDate: moment(this.state.selectedDate || this.today).startOf("month"),
        });
      }
    }, 0);
  }

  handleKeyDown(e) {
    if (e.keyCode == 38 || e.keyCode == 40) { // up or down
      const dd = e.keyCode == 38 ? 1 : -1;
      if (this.state.selectedDate) {
        this.setSelectedDate(moment(this.state.selectedDate).add(dd, "d"), e);
      } else {
        this.setSelectedDate(this.today, e);
      }
    }
    if (e.keyCode == 27) { // escape
      e.preventDefault();
      if (this.state.show) {
        this.setState({ show: false });
      }
    }
  }

  handleHover(m) {
    this.setState({ hoverDate: m });
  }

  renderPickButton(m) {
    let btnClass, textClass;
    if (m.isSame(this.state.hoverDate)) {
      btnClass = "btn-outline-warning";
    } else if (m.isSame(this.state.selectedDate) && m.isSame(this.today)) {
      btnClass = "btn-primary";
    } else if (m.isSame(this.state.selectedDate)) {
      btnClass = "btn-warning";
    } else if (m.isSame(this.today)) {
      btnClass = "btn-outline-primary";
      textClass = "text-primary ";
    } else if (m.month() != this.state.firstDate.month()) {
      textClass = "text-secondary";
    }
    return (
      <a
        className={"btn" + (btnClass ? " " + btnClass : "") + " oasisledger-datepicker__pick-button"}
        href="#" role="button"
        onMouseEnter={this.handleHover.bind(this, m)}
        onMouseLeave={this.handleHover.bind(this, null)}
        onClick={this.setSelectedDate.bind(this, m)}
        tabIndex="-1"
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
      <div className={"dropdown-menu oasisledger-datepicker__dropdown-menu" +
          (this.state.show ? " show" : "")}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        tabIndex="-1"
       ><div className="px-2 py-0">
          <div className="d-inline-block">
            <div className="d-flex">
              <a className="btn align-self-center"
                href="#" role="button"
                onClick={this.setFirstDate.bind(this, moment(this.state.firstDate).subtract(1, "M"))}
                tabIndex="-1"
               ><i className="fa fa-chevron-left" aria-hidden="true"></i>
              </a>
              <a className="btn align-self-center"
                href="#" role="button"
                onClick={this.setSelectedDate.bind(this, this.today)}
                tabIndex="-1"
               ><i className="fa fa-circle-o" aria-hidden="true"></i>
              </a>
              <a className="btn align-self-center"
                href="#" role="button"
                onClick={this.setFirstDate.bind(this, moment(this.state.firstDate).add(1, "M"))}
                tabIndex="-1"
               ><i className="fa fa-chevron-right" aria-hidden="true"></i>
              </a>
              <div className="align-self-center flex-grow-1 pr-2 text-muted text-right">
                {this.state.firstDate.format("MMMM YYYY")}
              </div>
            </div>
            <div className="d-flex">
              {d3.range(7)
                .map(dd => moment(startDate).add(dd, "d"))
                .map(m => (
                  <div className="oasisledger-datepicker__weekday-label">
                    <small>{m.format("dd")}</small>
                  </div>
                ))}
            </div>
            {d3.range(6).map(dw => (
              <div className="d-flex">
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
    const inputElement = React.Children.only(this.props.children);
    return (
      <React.Fragment>
        {React.cloneElement(inputElement, {
          value: this.props.value,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur,
          onKeyDown: this.handleKeyDown,
        })}
        {this.renderDropdownMenu()}
      </React.Fragment>
    );
  }
}

DatePicker.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default DatePicker;
