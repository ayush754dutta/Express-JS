/** @format */

"use strict";

const express = require("express");

const app = express();

// 1. .listen():
app.listen(5500, () => {
  console.log("Server is listening to the port 5500");
});

// 2. .get():

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Home Page!</h1>");
});

app.get("/about", (req, res) => {
  res.status(200).send("<h1>About Page</h1>");
});

app.all("*", (req, res) => {
  res.status(404);
  res.send("<h1>Page not found</h1>");
});

////////////////////////////////////////////////////////////////////////

// Express-App Example:

const express = require("express");

const navbar = express();

const path = require("path");

navbar.use(express.static("./public"));

navbar.get("/", (req, res) => {
  res.sendFile(
    path.resolve(
      __dirname,
      "./node-express-course/02-express-tutorial/navbar-app/index.html"
    )
  );
});

navbar.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

navbar.listen(5500, () => {
  console.log("Server is listening to port 5500...");
});


//////////////////////////////////////////////////////////////////

// Express-All Static

const express = require("express");

const navbar = express();

navbar.use(express.static("./public"));

// navbar.get("/", (req, res) => {
//   res.sendFile(
//     path.resolve(
//       __dirname,
//       "./node-express-course/02-express-tutorial/navbar-app/index.html"
//     )
//   );
// });

navbar.all("*", (req, res) => {
  res.status(404).send("resource not found");
});

navbar.listen(5500, () => {
  console.log("Server is listening to port 5500...");
});
