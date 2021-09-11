import React from 'react';
import PropTypes from 'prop-types';

class DocumentTitle extends React.Component {
  componentDidMount() {
    document.title = "Oasis Ledger - " + this.props.title;
  }
  componentWillUnmount() {
    document.title = "Oasis Ledger";
  }
  render() {
    return React.Children.only(this.props.children);
  }
}

DocumentTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default DocumentTitle;
