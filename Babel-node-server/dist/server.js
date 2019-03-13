"use strict";

var _http = _interopRequireDefault(require("http"));

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = 4000;
var host = '127.0.0.1';

_http.default.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  res.end('Sample App');
}).listen(port, host);

console.log(_chalk.default.green('Server running on port ' + host + ':' + port));