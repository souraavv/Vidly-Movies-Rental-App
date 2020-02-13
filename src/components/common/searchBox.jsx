import React, { Component } from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      id="search"
      type="text"
      name="query"
      className="form-control my-3"
      placeholder="Search..."
      value={value}
      onChange={e => onChange(e.currentTarget.value)}
    ></input>
  );
};

export default SearchBox;
