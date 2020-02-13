import React, { Component } from "react";

const Input = ({ name, label, error, ...rest }) => {
  // We will pass a name : to props,
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        /* value={value} type={type} onChange={onChange} we only need label , name ,error ... any other we can extract them using rest operator*/
        {...rest}
        name={name} // remember the rest operator include all other than { name, label, error}.. so as name need in htmlFor so although we need to pass that and now {...rest} doesn't contain this so we have to use it like name={name}
        id={name}
        className="form-control"
      />
      {error && <div className="alert alert-danger">{error}</div>}{" "}
      {/* conditional rendering remember we have done it earlier  */}
    </div>
  );
};

export default Input;
