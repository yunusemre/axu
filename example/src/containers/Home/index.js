import React from "react";
import { LoginForm } from "axu";
import messages from "./messages";

export default class HomePage extends React.Component {
  state = {
    email: null,
    password: null
  };
  changeField = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  submitForm = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="formBox">
        <LoginForm
          isLabel={false}
          onSubmit={this.submitForm}
          onChange={this.changeField}
          translate={messages}
        />
      </div>
    );
  }
}
