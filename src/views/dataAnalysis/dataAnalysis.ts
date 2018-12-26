import {Vue, Component} from 'vue-property-decorator';
import popup from '@views/popupWindow/popupWindow.vue';
import Http from '../../static/js/http';

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

	mounted(){
		this._getPersonWarnInfos();
	}
	_getPersonWarnInfos(): void{
		Http.getPersonWarnInfos()
			.then(data => {
				this.dataArr = data;
			})
	}
	refresh(): void{
		window.location.reload();
	}
	selectPerson(item): void{
		this.personId = item.id;
		this.showPopup = true;
		console.log(item);
	}
}