const utils = require('../../utils');
const path = require('path');

module.exports = function(res, path, params, method) {
	if(method !== 'POST'){
		res.end('error method')
	}else{
		checkUser(params).then( isUser => {
			let msg;

			if(isUser){
				msg = {
					errorcode: '1000'
				}

				res.write(JSON.stringify(msg));
			}else{
				msg = {
					errorcode: '1500',
					msg: '账号/密码错误'
				}

				res.write(JSON.stringify(msg));
			}

			res.end();
		});
	}
}

const userInfoPath = path.resolve(__dirname, '../../data/user.json');

async function checkUser(user) {
	let data = await utils.read(userInfoPath),
		result;

	JSON.parse(data).forEach( item => {

		if(item && item.username === user.username && item.password === user.password){
			result = true;
		}else{
			result = false;
		}
	} )

	return result;
}