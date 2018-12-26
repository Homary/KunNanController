import axios from 'axios';

let _server = server;
let ipInterface = {
	personWarnInfos: '/datajudge/getPersonWarnInfos',
	getPersonWarnInfoById: '/datajudge/getPersonWarnInfoById'
}
let OK = 200;

class Http {
	getPersonWarnInfos(): Promise<object[]>{

		return axios.get(_server.data_ip + ':' + _server.data_port + ipInterface.personWarnInfos)
			.then(res => {
				return Promise.resolve(res.data);
			})
	}
	getPersonWarnInfoById(id: number): Promise<object[]>{
		return axios.get(_server.data_ip + ':' + _server.data_port + ipInterface.getPersonWarnInfoById, {
			params: {
				id
			}
		}).then(res => {
			return Promise.resolve(res.data);
		})
	}
}

export default new Http;