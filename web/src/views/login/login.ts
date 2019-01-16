import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Http from '@/utils/http';

@Component
export default class App extends Vue{
	login_title: string = '昆明火车南站综合管控操控台';
	admin: string = '管理员Admin';
	pwd: string = '';

	setForm(){
		Http.sendLogin(this.pwd)
			.then(data => {
				if(data.errorcode === Http.OK){
					this.$router.push({path: '/main'});
					return;
				}else{
					alert('账号/密码错误');
				}
			})
	}
}