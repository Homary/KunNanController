import {Vue, Component} from 'vue-property-decorator';
import Http from '@/utils/http';
import { State, Mutation } from 'vuex-class'

@Component
export default class DataAnalysis extends Vue{
	@State( state => state.dataAnalysis.cloudDefense ) stateCloudDefense;
	@Mutation('setState') setState;

	get btnState() {
		return this.stateCloudDefense
	}

	readonly Instructions = {
		open: {
			action: 'invoke_HPM',
    		params: {}
		},
		close: {
			action: 'close_HPM',
    		params: {}
		}
	};
	readonly routingKey: string = 'GXX:VISION';

	toggleCloudDefense(key: string) {
		this.setState({key: 'dataAnalysis', subKey: 'cloudDefense'});
		
		let data = Object.create(null);

		Object.defineProperties(data, {
			'instruction': {
				value: this.Instructions[key],
				writable: false,
				enumerable: true
			},
			'routingKey': {
				value: this.routingKey,
				writable: false,
				enumerable: true
			}
		})

		Http.sendInstruction(data)
			.then( res => {
				if( res.errorcode !== Http.OK ) {
					alert(res.msg);
				}
			})
	}
}