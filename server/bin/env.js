const http = require('http');
const WebSocket = require('ws').Server;
const eventBus = require('../utils').eventBus;
const app = require('../app');

// 端口为命令行输入,默认为9090
let port = normalizePort(process.argv[process.argv.length - 1]);
let server = http.createServer(app);

server.listen(port);

console.log(`Server is running at localhost:${port}`);


// 创建WebSocket服务
let wss = new WebSocket({ server });
let total = 0;

wss.on('connection', ws => {
	total++;

	console.log(`new ws connection, total is ${total}`);

	ws.on('close', () => {
		total--;
	})
})

eventBus.on('get-instruction', (msg) => {
	boradcast(msg)
})

function boradcast(msg) {
	wss.clients.forEach( client => {
		client.send(JSON.stringify(msg));
	})
}

function normalizePort(port = 9090) {
	let _port = parseInt(port, 10);

	if(isNaN(_port)){
		throw new Error('error port');
	}

	if(port > 0){
		return _port
	}

	return false;
}

module.exports = wss; 