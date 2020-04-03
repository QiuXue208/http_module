import { IncomingMessage, ServerResponse } from "http";
import * as http from "http";
import * as url from "url";
import * as fs from "fs";
import * as p from "path";
const server = http.createServer();
const publicDir = p.resolve(__dirname, "public");

server.on("request", (request: IncomingMessage, response: ServerResponse) => {
  const { url: path } = request;
  const pathObject = url.parse(path);
  const { pathname } = pathObject;
  const filename = pathname.substr(1);
  fs.readFile(p.resolve(publicDir, filename), (err, data) => {
    // 如果请求的文件路径存在，就返回，不存在就返回404
    if (err) {
      response.statusCode = 404;
      response.end();
    } else {
      response.end(data.toString());
    }
  });
});

server.listen(8888);
