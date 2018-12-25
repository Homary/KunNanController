import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@components/login/login.vue';

Vue.use(VueRouter);

const Main = (r: any) => 
	(require as any).ensure([], r(require('@components/main/main.vue')), 'Main');
const DataAnalysis = (r: any) => 
	(require as any).ensure([], r(require('@components/dataAnalysis/dataAnalysis.vue')), 'Main');

export default new VueRouter({
	mode: 'history',
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