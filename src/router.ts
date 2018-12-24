import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@components/login/login.vue';

Vue.use(VueRouter);

import Main from '@components/main/main.vue';
import DataAnalysis from '@components/dataAnalysis/dataAnalysis.vue';

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Login
		},
		{
			path: '/main',
			component: Main
		},
		{
			path: '/data-analysis',
			component: DataAnalysis
		}
	]
})