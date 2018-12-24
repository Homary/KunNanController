import Vue from 'vue';
import app from '@components/app/app.vue';
import VueRouter from 'vue-router';

new Vue({
	el: '#app',
	render: h => h(app)
})