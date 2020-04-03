import { IncomingMessage, ServerResponse } from "http";
import * as http from "http";
const api = require("./api.js");
const server = http.createServer();

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  const { url } = request;
  switch (url) {
    case "/index.html":
      // __dirname： 当前文件所在目录
      api.setContentType("text/html", response);
      api.readFileAndReturn("index.html", response);
      break;
    case "/style.css":
      api.setContentType("text/css", response);
      api.readFileAndReturn("style.css", response);
      break;
    case "/main.js":
      api.setContentType("text/javascript", response);
      api.readFileAndReturn("main.js", response);
      break;
  }
});

server.listen(8888);
