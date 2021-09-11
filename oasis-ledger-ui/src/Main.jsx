import React from 'react';
import { Link, } from 'react-router-dom';

function Main() {
  return (
    <div className="row row-cols-auto">
      <div className="col">
        <Link to="/post" className="btn btn-outline-success" role="button">
          <i className="bi bi-plus-lg pe-1"></i> Post
        </Link>
      </div>
      <div className="col">
        <button type="button" className="btn btn-outline-success">
          <i className="bi bi-upload pe-1"></i> Bulk Import
        </button>
      </div>
    </div>
  );
}

export default Main;
