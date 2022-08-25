import React, { Component } from "react";
import axios from "axios";
import User from "./User";

export default class Main extends Component {
  // create state to store the data from the server
  constructor(props) {
    super(props);

    this.state = {
      UserData: [],
    };
  }
  // create a axios to get server api
  handleClick = async () => {
    const API = "http://localhost:3001/users";
    const res = await axios.get(API);
    // store data as new state
    this.setState({
      UserData: res.data,
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "steelblue" }}>
        {/* pass the function and state to a compontent */}
        <User handleClick={this.handleClick} UserData={this.state.UserData} />
      </div>
    );
  }
}
