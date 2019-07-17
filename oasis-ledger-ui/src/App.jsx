import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import Postings from './Postings';
import Settings from './Settings';
import Sidebar from './Sidebar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileSidebar: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleFocus() {
    clearTimeout(this.showMobileSidebarTimeoutId);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ showMobileSidebar: !prevState.showMobileSidebar }));
  }

  handleBlur() {
    this.showMobileSidebarTimeoutId = setTimeout(() => {
      if (this.state.showMobileSidebar) {
        this.setState({ showMobileSidebar: false });
      }
    });
  }

  render() {
    return (
      <div className="oasisledger-root">
        <header>
          <div className="oasisledger-logo">
            <div className="oasisledger-logo__content">
              Oasis Ledger
            </div>
          </div>
          <div className="oasisledger-navbar">
            <a href="#"
              className="oasisledger-navbar__sidebar-toggle"
              onClick={this.handleClick}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
             ><i className="fa fa-bars" aria-hidden="true"></i>
            </a>
            <div className="oasisledger-logo-mobile">
              Oasis Ledger
            </div>
          </div>
        </header>
        <HashRouter>
          <div
            className={"oasisledger-content" + (this.state.showMobileSidebar
              ? " oasisledger-content--show-mobile-sidebar"
              : "")}>
            <Route path="/"
              render={(routeProps) => (
                <Sidebar {...routeProps}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                />
              )}
            />
            <main className="oasisledger-main">
              <ErrorBoundary>
                <Switch>
                  <Redirect exact from="/" to="/postings"/>
                  <Route path="/postings" component={Postings}/>
                  <Route path="/settings" component={Settings}/>
                </Switch>
              </ErrorBoundary>
            </main>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
