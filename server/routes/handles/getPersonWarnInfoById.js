const path = require('path');
const fs = require('fs');

module.exports = function(res, params) {
	let id = params.id;

	fs.readFile(path.resolve(__dirname, '../../data/getPersonWarnInfos.json'), 'utf-8', 
		(err, data) => {
			if(err){
				console.error(err);
			}else{
				let _data = JSON.parse(data);

				_data.map( item => {
					if(item.id == id){
						res.writeHead(200, {'Content-Type': 'application/json'});
						res.write(JSON.stringify(item));
						res.end();
						return;
					}
				})
			}
		})
}