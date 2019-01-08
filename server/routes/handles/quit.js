module.exports = function(res, method) {
	if(method !== 'GET'){
		res.end('error method');
	}else{
		let msg = {
			errorcode: '1000'
		};

		res.end(JSON.stringify(msg));
	}
}