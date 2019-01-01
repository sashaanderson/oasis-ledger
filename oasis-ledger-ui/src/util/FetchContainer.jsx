import React from 'react';
import PropTypes from 'prop-types';

class FetchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err: null,
      fetchResults: null,
    };
  }

  componentDidMount() {
    this.load();
  }

  load() {
    const fetchKeys = Object.keys(this.props.fetch);
    Promise.all(fetchKeys.map(key => Promise.resolve(this.props.fetch[key])))
      .then(values => {
        const fetchResults = {};
        fetchKeys.forEach((key, i) => fetchResults[key] = values[i]);
        this.setState({ fetchResults: fetchResults });
      })
      .catch(err => {
        this.setState({ err: err });
      });
  }

  renderLoading() {
    return null;
  }

  renderError(err) {
    console.log("Oh sorrow! Error: %o", err);
    return (
      <div className="alert alert-danger">
        <strong>Oh sorrow!</strong> {err.toString()}
      </div>
    );
  }

  render() {
    if (this.state.err) {
      return this.renderError(this.state.err);
    }
    if (this.props.wait && !this.state.fetchResults) {
      return this.renderLoading();
    }
    const onlyChild = React.Children.only(this.props.children);
    return React.cloneElement(onlyChild, this.state.fetchResults);
  }
}

FetchContainer.propTypes = {
  children: PropTypes.element.isRequired,
  fetch: PropTypes.object.isRequired,
  wait: PropTypes.bool,
};

FetchContainer.defaultProps = {
  wait: true,
};

export function fetchCheck(res) {
  if (res.ok) {
    return res;
  } else {
    return res.text()
      .then(text => {
        throw new Error(text ? text : res.statusText);
      }, err => {
        throw new Error(res.statusText);
      })
      .catch(err => {
        console.error("Error in fetchCheck: %o", err);
        throw err;
      });
  }
}

function fetchWithCheck(url, init) {
  return fetch(url, Object.assign({ method: 'get' }, init))
    .then(fetchCheck);
}

export function fetchJSON(url, init) {
  return fetchWithCheck(url, init).then(res => res.json());
}

export function fetchText(url, init) {
  return fetchWithCheck(url, init).then(res => res.text());
}

export default FetchContainer;
