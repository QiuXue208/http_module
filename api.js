import * as fs from "fs";
import * as path from "path";
const publicDir = path.resolve(__dirname, "public");

module.exports.readFileAndReturn = (path, response) => {
  fs.readFile(path.resolve(publicDir, path), (err, data) => {
    if (err) throw err;
    response.end(data.toString());
  });
};

module.exports.setContentType = (type, response) => {
  response.setHeader("Content-Type", `${type}; charset=utf-8`);
};
