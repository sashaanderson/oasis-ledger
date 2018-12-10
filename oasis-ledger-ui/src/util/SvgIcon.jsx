import React from 'react';

const SvgIcon = ({href}) => (
  <svg className="i">
    <use href={
      href.replace("bytesize:", "lib/bytesize-icons-1.3/bytesize-symbols.min.svg#")
    }></use>
  </svg>
);

export default SvgIcon;
