import Vue from 'vue';
import app from './app.vue';
import router from './router';
import store from './store/index'

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(app)
})