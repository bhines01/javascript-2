const http = require("http");

function onRequest(request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write("Server has started. Hello World!");
  response.end();
}

http.createServer(onRequest).listen(8000);
