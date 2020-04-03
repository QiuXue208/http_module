import { IncomingMessage, ServerResponse } from "http";
import * as http from "http";
const api = require("./api.js");
const server = http.createServer();

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  const { url } = request;
  switch (url) {
    case "/index.html":
      // __dirname： 当前文件所在目录
      api.setContentType("text/html");
      api.readFileAndReturn("index.html");
      break;
    case "/style.css":
      api.setContentType("text/css");
      api.readFileAndReturn("style.css");
      break;
    case "/main.js":
      api.setContentType("text/javascript");
      api.readFileAndReturn("main.js");
      break;
  }
});

server.listen(8888);
