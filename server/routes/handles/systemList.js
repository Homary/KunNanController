const path = require('path');
const utils = require('../../utils');

module.exports = function(res) {
	getSystemList().then( data => {
		let msg;

		if(data){
			msg = {
				errorcode: '1000',
				msg: '',
				data: JSON.parse(data)
			};

			res.write(JSON.stringify(msg));
		}else{
			msg = {
				errorcode: '1500',
				msg: '获取系统列表失败',
				data: ''
			};

			res.write(JSON.stringify(msg));
		}

		res.end();
	})
}

const systemPath = path.resolve(__dirname, '../../data/system.json');

async function getSystemList() {
	let data = await utils.read(systemPath);

	return data;
}