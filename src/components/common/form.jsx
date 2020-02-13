import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class Form extends Component {
  state = {
    data: {},
    errors: {}
  };

  // this we call on total submit of form
  validate = () => {
    const options = {
      abortEarly: false
    };
    const result = Joi.validate(this.state.data, this.schema, options);
    // If you log this result object : you will find it has 'error' property  which has 'detail'array and this array of object and each object has [0]=mesasge: and a path=['username'] ( which is target property )
    // See we have errors object in state.and we will use it to store.( key: value) where key is the name of target field and value is error message;
    //console.log(result);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} }); // if the error return null we will use empty object , if we don't do so then there will be error
    if (errors) return;
    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value }; // this is in ES6 dynamically here according to the field
    const schema = { [name]: this.schema[name] };

    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].message : null;
  };

  // Object desturcting of e of the method .currentTarget :
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name]; // See as we are passing the errors in the setState , so if there is no error then we have to delete what ever error was there;
    // whatever type now we modifiy that

    // handling data changes:
    const data = { ...this.state.data };
    data[input.name] = input.value; // Current target return input field
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        value={data[name]} //data.username or data.password
        label={label}
        onChange={this.handleChange}
        error={errors[name]} //errors.username
      ></Input>
    );
  }

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      ></Select>
    );
  }
}

export default Form;
