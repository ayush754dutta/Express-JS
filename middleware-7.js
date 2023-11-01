/** @format */

"use strict";

////////////////////////////////////////////////////////////////////

// Middleware Set-up:

const express = require("express");

const app = express();

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  // return res.send("<h1>Testing</h1>");
  next();
};

app.get("/", logger, (req, res) => {
  // const method = req.method;
  // const url = req.url;
  // const time = new Date().getFullYear();
  // console.log(method, url, time);
  res.send("Home");
});

app.get("/about", logger, (req, res) => {
  res.send("<h1>About</h1>");
});
app.listen(7000, () => {
  console.log("Listening to port 7000...");
});

///////////////////////////////////////////////////////////

// App.Use():

const express = require("express");

const app = express();

const logger = require("./app-use-logger");

app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  res.send("<h1>Data</h1>");
});

app.listen(7000, () => {
  console.log("Listening to port 7000...");
});


//////////////////////////////////////////////////////////

// Multiple middleware functions:

const express = require("express");

const app = express();

const logger = require("./app-use-logger");

const authorize = require("./app-use-authorize");

app.use([authorize, logger]);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>");
});

app.get("/api/products", (req, res) => {
  res.send("Products");
});

app.get("/api/items", (req, res) => {
  console.log(req.user);
  res.send("<h1>Data</h1>");
});

app.listen(7000, () => {
  console.log("Listening to port 7000...");
});

