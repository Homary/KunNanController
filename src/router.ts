import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@components/login/login.vue';

Vue.use(VueRouter);

const Main = () => import(/* webpackChunkName: "main" */ './components/main/main.vue');
const DataAnalysis = () => import(/* webpackChunkName: "dataAnalysis" */ './components/dataAnalysis/dataAnalysis.vue');

export default new VueRouter({
	mode: 'history',
	// base: '/build/',
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