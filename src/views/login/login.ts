import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface FormData{
	user: string;
	password: string;
}

@Component
export default class App extends Vue{
	login_title: string = '昆明火车南站综合管控操控台';
	admin: string = '管理员Admin';
	pwd: string = '';

	setForm(){
		let _form: FormData = {
			user: this.admin,
			password: this.pwd
		};

		this.$router.push({path: '/main'})
	}
}