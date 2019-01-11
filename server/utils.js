const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');

function read(filepath) {
	let charset = 'utf-8';

	if(path.extname(filepath) === '.png'){
		charset = 'binary'
	}

	return new Promise((resolve, reject) => {
		fs.readFile(filepath, charset, (err, data) => {
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

