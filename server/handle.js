const url = require('url');
const querystring = require('querystring');
const routes = require('./routes/routes');

function handle(req, cb) {
	let data = '';

	req.on('err', err => {
		return console.error(err);
	}).on('data', chunk => {
		data += chunk;
	}).on('end', () => {
		requestHandle(req, data, cb);
	})
}

function requestHandle(req, data, cb) {
	switch(req.method){
		case 'GET':
			let query = url.parse(req.url, true).query;

			cb(query);

			break;

		case 'POST':
			if(data.length > 1e6){
                return req.connection.destory();
            }

            let params = querystring.parse(data);

            cb(params);

			break;

		default:
			break;
	}
}

function routeHandle(req, res, params) {
	let pathname = url.parse(req.url, true).pathname,
		routerItem = routes.isRouter(pathname);

	if (routerItem) {
        return routes.list[routerItem](res, pathname, params, req.method);
    }
}

module.exports = {
	handle,
	routeHandle
}