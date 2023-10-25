/**
 * // HTTP Request:
 * const http = require("http");
 *
 * const server = http.createServer((request, response) => {
 *   response.writeHead(200, { "content-type": "text/html" });
 *   //   response.write(`<h1>Home Page</h1>`);
 *   console.log(request.method);
 *   console.log(request.url);
 *
 *   const url = request.url;
 *   if (url === "/") {
 *     response.writeHead(200, { "content-type": "text/html" });
 *     response.write(`<h1>Home Page</h1>`);
 *     response.end();
 *   } else if (url === "/about") {
 *     response.writeHead(200, { "content-type": "text/html" });
 *     response.write("<h2>This is our short history</h2>");
 *     response.end();
 *   } else if (url === "/contact") {
 *     response.writeHead(200, { "content-type": "text/html" });
 *     response.write("<h2>Hello, you can contact us!</h2>");
 *     response.end();
 *   } else {
 *     response.writeHead(404, { "content-type": "text/html" });
 *     response.write("Error page not found");
 *     response.end();
 *   }
 * });
 *
 * server.listen(5500);
 *
 * @format
 */
