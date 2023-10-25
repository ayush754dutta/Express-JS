/**
 * // HTTP HTML File:
 *
 * const { readFileSync } = require("fs");
 *
 * const html = readFileSync("./index.html");
 *
 * const http = require("http");
 *
 * http
 *   .createServer((req, res) => {
 *     res.writeHead(200, { "contect-type": "text/html" });
 *     res.write(html);
 *     res.end();
 *   })
 *   .listen(7000);
 *
 * @format
 */

/////////////////////////////////////////////////////////////////
/*
// HTTP-App Example:

const { readFileSync, readSync } = require("fs");

const homePage = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/index.html"
);

const browserApp = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/browser-app.js"
);

const styles = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/styles.css"
);

const logo = readFileSync(
  "./node-express-course/02-express-tutorial/navbar-app/logo.svg"
);

const http = require("http");

const server = http.createServer((req, res) => {
  // homepage
  if (req.url === "/" || req.url === "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // about
  else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("This is our short history");
    res.end();
  }
  // styles
  else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(styles);
    res.end();
  }
  // image/logo
  else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(logo);
    res.end();
  }
  // logic
  else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(browserApp);
    res.end();
  }
  // error
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("page not found");
    res.end();
  }
});

server.listen(5500);
*/
