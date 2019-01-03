import { Vue, Component } from 'vue-property-decorator';
import Http from '@/utils/http';
import Storage from '@/utils/storage';
//import wave from '@views/wave/wave.vue';

@Component({
	components: {
		//wave
	},
	beforeRouteEnter(to, from, next){
		next( vm => {
			if("/data-analysis" === from.path){
				vm.$data.init = false;
			}
		})
	}
})
export default class Main extends Vue{
	title: string = '昆明火车南站综合管控操控台';
	time: string = '';
	active: boolean = false;
	init: boolean = true; // 初始选择
	data: any = [];

	get date(){
        let date = new Date(),
            year,
            month,
            day;

        year = date.getFullYear();
        month = this.setDoubleNumber(date.getMonth() + 1);
        day = this.setDoubleNumber(date.getDate());

        return `${year}-${month}-${day}`;
	}

	mounted(){
		this.setTime();
		this.initData();
	}

	setTime(): void{
		let date = new Date(),
			hours,
			minutes,
			seconds;

		hours = this.setDoubleNumber(date.getHours());
		minutes = this.setDoubleNumber(date.getMinutes());
		seconds = this.setDoubleNumber(date.getSeconds());

		if(seconds < 10){
			seconds = '0' + seconds;
		}
		this.time = `${hours}:${minutes}:${seconds}`;

		setTimeout(this.setTime, 1000);
	}

	initData(){
		Http.getSystemList()
			.then(data => {
				if(data.errorcode === Http.OK){
					this.data = data.data;

					Storage.setStorage(Storage.key, this.data);
				}else{
					alert(data.msg);
				}
			})
	}

	toggleSystem(name){
		let _cur,
			_data = {
				instruction: {},
				routingkey: ''
			};

		this.data.map(item => {
			if(item.name === name){
				_cur = item;
			}
		})

		_data.instruction = _cur.instruction;
        _data.routingkey = _cur.routingkey;

        Http.sendInstruction(_data)
        	.then( data => {
        		if( data.errorcode !== Http.OK){
        			alert(data.msg);
        		}
        	})
	}

	/**
	 * 设置时间格式
	 * @param  {number}
	 * @return {string}
	 */
	setDoubleNumber(num: number): string{
		return num >= 10 ? String(num) : '0' + num;
	} 
}