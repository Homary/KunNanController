import {Vue, Component, Emit, Prop, Watch} from 'vue-property-decorator';
import Http from '@/utils/http';

interface DataObject {
	personCert ?: string;
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

		Http.getPersonWarnInfoById(id)
			.then( data => {
				this.person_data = data as DataObject;
				this.person_data.personCert = this.hidePersonCert(this.person_data.personCert)
			})
	}

	hidePersonCert(str: string) : string{
		let _str = str.split('');

		_str.splice(8, 4, '****');

		return _str.join('');
	}
}