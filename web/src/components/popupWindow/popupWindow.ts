import {Vue, Component, Emit, Prop, Watch} from 'vue-property-decorator';
import Http from '@/utils/http';

interface DataObject {
	personCertNumber ?: string;
}

@Component
export default class PopupWindow extends Vue{
	person_data: DataObject = {};
	@Prop(Number) id!: number;

	@Emit('close-popup')
	closePupup():void {
		
	}
	
	@Watch('id')
	_getPersonWarnInfoById(id: number): void{
		if(id === -1) return;

	}

	hidepersonCertNumber(str: string) : string{
		let _str = str.split('');

		_str.splice(10, 4, '****');

		return _str.join('');
	}
}