import React, { useEffect, useState, useRef } from 'react';

const FIRST_DAY_OF_WEEK = 0; // 0=Sunday, 6=Saturday

function DatePicker({ id, initialDate, onPick, valid }) {
  const today = moment().startOf("day");

  let initialText = "";
  if (initialDate) {
    if (initialDate === true)
      initialDate = today;
    initialText = initialDate.format("M/D/YYYY");
  }
  useEffect(() => {
    if (initialDate)
      onPick(initialDate.format("YYYY-MM-DD"));
  }, [initialText]);

  //const renderCount = useRef(1);
  //console.log("DatePicker render " + renderCount.current);
  //renderCount.current++;

  const [text, setText] = useState(initialText);
  const inputRef = useRef(null);

  const [firstDate, setFirstDate] = useState(moment(initialDate || today).startOf("month"));
  const [hoverDate, setHoverDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(initialDate);

  function setDate(m, setTextFlag = false) {
    setFirstDate(moment(m).startOf("month"))
    setSelectedDate(m);
    if (setTextFlag) {
      setText(m.format("M/D/YYYY"));
    }
    if (!selectedDate || !m.isSame(selectedDate)) {
      onPick(m.format("YYYY-MM-DD"));
    }
  }

  function handleChange(e) {
    const text = e.target.value;
    setText(text);

    const m = moment(text.trimEnd(), "M/D/YYYY", true).startOf("day"); // strict parsing
    if (m.isValid() && !m.isSame(selectedDate)) {
      setDate(m, false);
    } else if (!m.isValid() && selectedDate !== null) {
      setSelectedDate(null);
      if (selectedDate)
        onPick(undefined);
    }

    setTimeout(function() {
      const dropdown = bootstrap.Dropdown.getOrCreateInstance(inputRef.current);
      dropdown.show();
    }, 0);
  }

  function handleClick(e, arg) {
    e.preventDefault();
    if (arg === -1 || arg === 1) {
      setFirstDate(moment(firstDate).add(arg, "M"));
      return;
    }

    let m = arg;
    if (arg === 0) {
      m = today;
    }
    setHoverDate(null);
    setDate(m, true);

    const dropdown = bootstrap.Dropdown.getInstance(inputRef.current);
    dropdown.hide();
    inputRef.current.focus();
  }

  function handleDropdownToggle() {
    const m = moment(selectedDate || today).startOf("month");
    if (m.month() != firstDate.month())
      setFirstDate(m);
  }

  function handleKeyDown(e) {
    if (e.code === "ArrowLeft" || e.code === "ArrowRight") {
      if (selectedDate) {
        let d;
        if (e.code === "ArrowLeft") d = -1;
        if (e.code === "ArrowRight") d = 1;
        setDate(moment(selectedDate).add(d, "d"), true);
        e.preventDefault();
      } else if (text === "") {
        setDate(today, true);
      }
    }
  }

  function renderPickButton(m) {
    let btnClass, textClass;
    if (hoverDate && m.isSame(hoverDate)) {
      btnClass = "btn-outline-warning";
    } else if (selectedDate && m.isSame(selectedDate) && m.isSame(today)) {
      btnClass = "btn-primary";
    } else if (selectedDate && m.isSame(selectedDate)) {
      btnClass = "btn-warning";
    } else if (m.isSame(today)) {
      btnClass = "btn-outline-primary";
      textClass = "text-primary ";
    } else if (m.month() != firstDate.month()) {
      textClass = "text-secondary";
    }
    return (
      <a className={"btn" + (btnClass ? " " + btnClass : "") + " oasisledger-datepicker-cell"}
        href="#" role="button"
        key={m.valueOf()}
        onMouseEnter={() => setHoverDate(m)}
        onMouseLeave={() => setHoverDate(null)}
        onClick={(e) => handleClick(e, m)}
        tabIndex="-1"
       ><span className={textClass}>
          {m.date()}
        </span>
      </a>
    );
  }

  function renderDropdownMenu() {
    let startDate = moment(firstDate);
    while (startDate.day() != FIRST_DAY_OF_WEEK) {
      startDate.subtract(1, "d");
    }
    return (
      <div className="dropdown-menu">
        <div className="px-2 py-0">
          <div className="d-flex">
            <a className="btn align-self-center oasisledger-datepicker-cell" href="#" role="button" tabIndex="-1"
              onClick={(e) => handleClick(e, -1)}
             ><i className="bi bi-chevron-left"></i>
            </a>
            <a className="btn align-self-center oasisledger-datepicker-cell" href="#" role="button" tabIndex="-1"
              onClick={(e) => handleClick(e, 0)}
             ><i className="bi bi-circle"></i>
            </a>
            <a className="btn align-self-center oasisledger-datepicker-cell" href="#" role="button" tabIndex="-1"
              onClick={(e) => handleClick(e, 1)}
             ><i className="bi bi-chevron-right"></i>
            </a>
            <div className="align-self-center flex-grow-1 px-1 text-muted text-end">
              {firstDate.format("MMMM YYYY")}
            </div>
          </div>
          <div className="d-flex">
            {d3.range(7).map(j => (
              <div key={j} className="oasisledger-datepicker-head">
                <small>{moment(startDate).add(j, "d").format("dd")}</small>
              </div>
            ))}
          </div>
          {d3.range(6).map(i => (
            <div key={i} className="d-flex">
              {d3.range(7).map(j => renderPickButton(moment(startDate).add(i, "w").add(j, "d")))}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="dropdown">
      <input
        type="text"
        className={"form-control" + (valid === undefined || valid ? "" : " is-invalid")}
        id={id}
        placeholder="MM/DD/YYYY"
        style={{maxWidth: "9.5em"}}
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        value={text}
        onChange={handleChange}
        onClick={handleDropdownToggle}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      {renderDropdownMenu()}
    </div>
  );
}

export default DatePicker;
