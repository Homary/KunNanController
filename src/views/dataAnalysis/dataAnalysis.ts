import {Vue, Component} from 'vue-property-decorator';
import popup from '@/views/popupWindow/popupWindow.vue';
import Http from '@/utils/http';
import Storage from '@/utils/storage';

@Component({
	components: {
		popup
	}
})
export default class DataAnalysis extends Vue{
	msg: string = 'hello';
	dataArr: Array<object> = [];
	showPopup: boolean = false;
	personId: number = -1;
	data: any = [];
	TAG: string = "数据研判";

	mounted(){
		this._getPersonWarnInfos();
		this.initData();
	}
	_getPersonWarnInfos(): void{
		Http.getPersonWarnInfos()
			.then(data => {
				this.dataArr = data;
			})
	}
	refresh(): void{
		let _data = {
			instruction: {},
			routingkey: ''
		};

		_data.instruction = this.data[0].subSystem[0].instruction;
		_data.routingkey = this.data[0].subSystem[0].routingkey;

		Http.sendInstruction(_data)
			.then( res => {
				if(res.errorcode === Http.OK){
					window.location.reload();
				}else{
					alert(res.msg)
				}
			})
	}
	selectPerson(item): void{
		this.personId = item.id;
		this.showPopup = true;
		
		let _data = {
			instruction: {
				params: ''
			},
			routingkey: ''
		};

		_data.instruction = this.data[1].subSystem[0].instruction;
		_data.instruction.params = item.id;
		_data.routingkey = this.data[1].subSystem[0].routingkey;

		Http.sendInstruction(_data)
			.then( res => {
				if(res.errorcode !== Http.OK){
					alert(res.msg)
				}
			})
	}
	initData(){
		let list = Storage.getStorage(Storage.key);

		if(list){
			list.forEach( item => {
				if(item.name === this.TAG){
					this.data = item.subSystem;
				}
			})
		}else{
			Http.getSystemList()
			.then(data => {
				if(data.errorcode === Http.OK){
					data.data.forEach(item => {
						if(item.name === this.TAG){
							this.data = item.subSystem;
						}
					})
				}else{
					alert(data.msg);
				}
			})
		}
	}

	closePopup(){
		this.showPopup = false;

		let _data = {
			instruction: {
				params: -1
			},
			routingkey: ''
		};

		_data.instruction = this.data[1].subSystem[0].instruction;
		_data.instruction.params = this.personId;
		_data.routingkey = this.data[1].subSystem[0].routingkey;

		Http.sendInstruction(_data)
			.then( res => {
				if(res.errorcode !== Http.OK){
					alert(res.msg)
				}
			})
	}
}