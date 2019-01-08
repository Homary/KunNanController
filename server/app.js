const handle = require('./handle').handle;
const routeHandle = require('./handle').routeHandle;

let app = function(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', '*');

	handle(req, params => {
		routeHandle(req, res, params);
	})
}

module.exports = app;