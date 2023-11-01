/** @format */

/////////////////////////////////////////////////////////////////////////

// JSON Basics:

const express = require("express");

const app = express();
const { products } = require("./data");

app.get("/about", (req, res) => {
  res.json(products);
});

app.get("/", (req, res) => {
  res.json([{ fullname: "John Doe" }, { fullname: "Sarah Williams" }]);
});

app.listen(5500, () => {
  console.log("Server is listening to port 5500...");
});
*/

///////////////////////////////////////////////////////////////////////////////

// Params, Query-String Setup:

const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href = '/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((el) => {
    const { id, name, image } = el;
    return { id, name, image };
  });
  res.json(newProducts);
});


app.listen(5500);



///////////////////////////////////////////////////////////////////////

// Params : Dynamic Coding

const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href = '/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
// app.get("/api/products/1", (req, res) => {
//   const newProducts = products.find((el) => el.id === 1);
//   res.json(newProducts);
// });

app.get("/api/products/:productId", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const newProducts = products.find((el) => el.id === +productId);

  if (!newProducts) {
    return res.status(404).send("Product not found");
  }
  console.log(newProducts);
  return res.json(newProducts);
});

app.listen(5500);


//////////////////////////////////////////////////////////////////

// Params: additional info

const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href = '/api/products'>Products</a>");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});
// app.get("/api/products/1", (req, res) => {
//   const newProducts = products.find((el) => el.id === 1);
//   res.json(newProducts);
// });

app.get("/api/products/:productId", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const newProducts = products.find((el) => el.id === +productId);

  if (!newProducts) {
    return res.status(404).send("Product not found");
  }
  console.log(newProducts);
  return res.json(newProducts);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello world!");
});

app.listen(5500, () => {
  console.log("Listening to port 5500....");
});

//////////////////////////////////////////////////////////////

// Query Strings:

const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((el) => el.name.startsWith(search));
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, +limit);
  }

  if (sortedProducts.length < 1) {
    return res.json({ success: true, data: [] });
  }

  return res.json(sortedProducts);
});

app.listen(7000, () => {
  console.log("Listening to port 7000...");
});
