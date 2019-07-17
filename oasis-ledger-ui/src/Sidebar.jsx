import React from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    let tabIndex = 1;
    if (props.location.pathname.startsWith("/settings")) {
      tabIndex = 2;
    }

    this.state = {
      tabIndex: tabIndex,
    };
  }

  onClickTab(tabIndex, e) {
    e.preventDefault();
    this.setState({ tabIndex: tabIndex });
  }

  renderMenuItem(tabIndex, tabName, iconName) {
    const active = tabIndex == this.state.tabIndex;
    return (
      <li className="nav-item">
        <a className={"nav-link" + (active ? " active" : "")}
           href="#"
           onClick={this.onClickTab.bind(this, tabIndex)}>
          <i className={"fa " + iconName}></i>
        </a>
      </li>
    );
  }

  renderNavItem(url, text) {
    return (
      <li className="nav-item">
        <NavLink to={url} className="nav-link" onClick={this.props.onBlur}>{text}</NavLink>
      </li>
    );
  }

  render() {
    const tabOffset = -200 * (this.state.tabIndex - 1);
    return (
      <aside className="oasisledger-sidebar"
        tabIndex="-1"
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
       ><nav className="oasisledger-sidebar__menu">
          <ul className="nav nav-tabs">
            {this.renderMenuItem(1, "pages", "fa-book")}
            {this.renderMenuItem(2, "settings", "fa-cog")}
          </ul>
        </nav>
        <div className="oasisledger-sidebar__content">
          <div className="oasisledger-sidebar__tab" style={{marginLeft: tabOffset + "px"}}>
            <div className="oasisledger-sidebar__heading">Pages</div>
            <nav className="oasisledger-sidebar__nav">
              <ul className="nav flex-column">
                {this.renderNavItem("/postings", "Postings")}
              </ul>
            </nav>
          </div>
          <div className="oasisledger-sidebar__tab">
            <div className="oasisledger-sidebar__heading">Settings</div>
            <nav className="oasisledger-sidebar__nav">
              <ul className="nav flex-column">
                {this.renderNavItem("/settings/accounts", "Accounts")}
                {this.renderNavItem("/settings/users", "Users")}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
