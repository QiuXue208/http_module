import { IncomingMessage, ServerResponse } from "http";
import * as http from "http";
import * as url from "url";
import * as fs from "fs";
import * as p from "path";
const server = http.createServer();
const publicDir = p.resolve(__dirname, "public");

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  const { url: path, method } = request;
  if (method === "POST") {
    // method not allowed
    response.statusCode = 405;
    response.end();
    return;
  }
  const pathObject = url.parse(path);
  const { pathname } = pathObject;
  let filename = pathname.substr(1);
  // localhost:8888
  if (filename === "") filename = "index.html";
  fs.readFile(p.resolve(publicDir, filename), (err, data) => {
    // 如果请求的文件路径存在，就返回，不存在就返回404
    if (err) {
      if (err.errno === -2) {
        response.statusCode = 404;
        fs.readFile(p.resolve(publicDir, "./404.html"), (err, data) => {
          if (err) console.log(err);
          response.end(data);
        });
      } else {
        response.statusCode = 500;
        response.end("Service busy, please try again");
      }
    } else {
      response.end(data);
    }
  });
});

server.listen(8888);
