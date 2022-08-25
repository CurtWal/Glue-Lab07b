"use strict";

require("dotenv").config();
const express = require("express");
const port = process.env.PORT || 3002;
const app = express();
const userData = require("./users.json");
const cors = require("cors");

app.use(cors());

app.get("/home", (req, res) => {
  res.send("Welcome to the home page.");
});

app.get("/users", (req, res) => {
  try {
    const UsersArray = userData.map((user) => new Users(user));
    res.send(UsersArray);
  } catch (error) {
    console.log(error);
  }
});

class Users {
  constructor(user) {
    this.username = user.username;
    this.email = user.email;
    this.bio = user.bio;
    this.region = user.region;
  }
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
