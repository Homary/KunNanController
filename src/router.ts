import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@views/login/login.vue';

Vue.use(VueRouter);

const Main = () => import(/* webpackChunkName: "main" */ './views/main/main.vue');
const DataAnalysis = () => import(/* webpackChunkName: "dataAnalysis" */ './views/dataAnalysis/dataAnalysis.vue');

export default new VueRouter({
	mode: 'history',
	// base: '/build/',
	routes: [
		{
			path: '/',
			name: 'login',
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