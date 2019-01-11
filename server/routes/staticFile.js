const fs = require('fs');
const path = require('path');
const read = require('../utils').read;

module.exports = async function (res, pathname) {
	let _pathname = pathname === '/' ? '/index.html' : pathname;
	let suffix = path.extname(pathname);
	let data;

	try{
		data = await read(path.resolve(__dirname, `../build${_pathname}`));
	}catch(e){
		res.end('404');
	}

	if(data){
		switch(suffix){
			case '.html':
				res.writeHead(200, {'Content-Type': 'text/html;'});
				break;

			case '.js':
				res.writeHead(200, {'Content-Type': 'text/javascript;'});
				break;

			case '.css':
				res.writeHead(200, {'Content-Type': 'text/css;'});
				break;

			case '.png':
				res.writeHead(200, {'Content-Type': 'image/png;'});
				res.write(data, 'binary');
				res.end();

				return;
				break;

			default:
				break;
		}

		res.write(data.toString());
		res.end();
	}
}
