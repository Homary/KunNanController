import axios from 'axios';

let _server = server;

let ipInterface = {
	login:'/user/checkLogin', // 登录接口
	quit:'/user/loginOut', //退出登录
	systemList: '/system/getSysList',
	sendSysInstruction: '/instruction/sendSysInstruction'
}

interface Instruction {
	instruction: {
		params?: string
	};
	routingKey: string;
}

class Http {
	OK: string;
	constructor(status: string = '1000'){
		this.OK = status;
	}


	/**登陆
	 * @param {psw: string}
	 */
	sendLogin(psw){
		let user = {
			username: 'admin',
			password: psw
		}

		return axios.post(ipInterface.login, user)
			.then(res => {
				return Promise.resolve(res.data)
			})
	}

	/**
	 * 获取系统列表
	 */
	getSystemList(){
		return axios.get(ipInterface.systemList)
			.then(res => {
				return Promise.resolve(res.data);
			})
	}

	sendInstruction(data: Instruction){
		console.log('发送指令: ')
		console.log(data)
		return axios.post(ipInterface.sendSysInstruction, data)
				.then(res => {
					return Promise.resolve(res.data)
				})
	}
}

export default new Http;