const fs = require("fs");
const p = require("path");
const publicDir = p.resolve(__dirname, "public");

module.exports.readFileAndReturn = (path, response) => {
  fs.readFile(p.resolve(publicDir, path), (err, data) => {
    if (err) throw err;
    response.end(data.toString());
  });
};

module.exports.setContentType = (type, response) => {
  response.setHeader("Content-Type", `${type}; charset=utf-8`);
};
