const path = require('path');
const fs = require('fs');

module.exports = function(res) {
	fs.readFile(path.resolve(__dirname, '../../data/getPersonWarnInfos.json'), 'utf-8', 
		(err, data) => {
		if(err){
			console.error(err);
		}else{
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(data)
		}
	});
}