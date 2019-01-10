const eventBus = require('../../utils').eventBus;

module.exports = function(res, params, method) {
	if(method !== 'POST'){
		res.end('error method');
	}else{
		eventBus.emit('get-instruction', params);

		let msg = {
			errorcode: '1000'
		}

		res.end(JSON.stringify(msg))
	}
}