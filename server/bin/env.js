const http = require('http');
const app = require('../app');

let serve = http.createServer(app);

server.listen(9090);

module.exports = server; 