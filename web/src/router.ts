import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/login/login.vue';
import Main from '@/views/main/main.vue';
import DataAnalysis from '@/views/dataAnalysis/dataAnalysis.vue';
import RunStatus from '@/views/runStatus/runStatus.vue';

Vue.use(VueRouter);

// const Main = () => import( /* webpackChunkName: "main" */ './views/main/main.vue');
// const DataAnalysis = () => import( /* webpackChunkName: "dataAnalysis" */ './views/dataAnalysis/dataAnalysis.vue');

export default new VueRouter({
	//mode: 'history',
	// base: '/build/',
	routes: [{
			path: '/',
			name: 'login',
			component: Login
		},
		{
			path: '/main',
			component: Main,
			children: [
				{
                    path: 'data-analysis',
                    component: DataAnalysis
				},
				{
					path: 'run-status',
					component: RunStatus
				}
			]
		}
	]
})