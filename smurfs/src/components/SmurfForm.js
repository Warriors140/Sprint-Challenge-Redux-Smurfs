import React, { Component } from "react";
import { connect } from "react-redux";

import { addSmurf } from "../actions/index.js";

// built smurfForm component to add action to post new smurf to server

class SmurfForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.inputHandler}
          placeholder="Smurf name"
        />
        <input
          type="text"
          name="age"
          value={this.state.age}
          onChange={this.inputHandler}
          placeholder="Smurf age"
        />
        <input
          type="text"
          name="height"
          value={this.state.height}
          onChange={this.inputHandler}
          placeholder="Smurf height"
        />
        <button type="submit">Add Smurf!</button>
      </form>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { addSmurf }
)(SmurfForm);