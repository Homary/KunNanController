import {Vue, Component, Emit, Prop, Watch} from 'vue-property-decorator';
import Http from '../../static/js/http';

@Component
export default class PopupWindow extends Vue{
	person_data: object = {};
	@Prop(Number) id!: number;

	@Emit('close-popup')
	closePupup():void {
		
	}
	
	@Watch('id')
	_getPersonWarnInfoById(id: number): void{
		if(id === -1) return;

		Http.getPersonWarnInfoById(id)
			.then( data => {
				this.person_data = data;
			})
	}
}