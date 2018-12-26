import { Vue, Component } from 'vue-property-decorator';
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

	get date(){
        let date = new Date(),
            year,
            month,
            day;

        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();

        return `${year}-${month}-${day}`;
	}

	mounted(){
		this.setTime();
	}

	setTime(): void{
		let date = new Date(),
			hours,
			minutes,
			seconds;

		hours = date.getHours();
		minutes = date.getMinutes();
		seconds = date.getSeconds();

		if(seconds < 10){
			seconds = '0' + seconds;
		}
		this.time = `${hours}:${minutes}:${seconds}`;

		setTimeout(this.setTime, 1000);
	}
}