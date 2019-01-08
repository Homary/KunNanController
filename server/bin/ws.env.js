const WebSocket = require('ws').Server();
const server = require('./env');

let wss = new WebSocket({
	server: server
})



module.exports = wss;