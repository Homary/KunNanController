import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		dataAnalysis: {
			cloudDefense: false
		},
		runStatus: {
			electricFence: false,
			bayonet: false,
			capture: false
		}
	},
	mutations: {
		setState(state, {key, subKey}){
			state[key][subKey] = !state[key][subKey];
		}	
	}
})