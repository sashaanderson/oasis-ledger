import React, { useEffect } from 'react';

export default function Upload() {
  useEffect(() => {
    bsCustomFileInput.init();
  });
  function handleSubmit(e) {
    e.preventDefault();
    alert("You clicked!");
  }
  return (
    <div className="m-3">
      <form onSubmit={handleSubmit}>
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="customFile"/>
          <label className="custom-file-label" htmlFor="customFile">Choose file</label>
        </div> 
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
