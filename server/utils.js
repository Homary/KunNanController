const fs = require('fs');
const EventEmitter = require('events');

function read(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf-8', (err, data) => {
			if(err) reject(err);
			resolve(data)
		})
	})
}

class EventBus extends EventEmitter{};

let eventBus = new EventBus();

module.exports = {
	read,
	eventBus
}

