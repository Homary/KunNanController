import { Vue, Component } from 'vue-property-decorator';
import Http from '@/utils/http';
import Storage from '@/utils/storage';
//import wave from '@views/wave/wave.vue';

@Component({
    components: {
        //wave
    },
    beforeRouteEnter(to, from, next) {
        next(vm => {
            if ('/data-analysis' === from.path) {
                vm.$data.init = false;
            }

            if ('/run-status' === from.path) {
                vm.$data.active = true;
            }
        });
    }
})
export default class Main extends Vue {
    title: string = '昆明火车南站综合管控操控台';
    time: string = '';
    active: number = -1;
    init: boolean = true; // 初始选择
    data: any = [];
    dataAnalysis: boolean = false;
    showCloudBtn: boolean = false;
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

    get date() {
        let date = new Date(),
            year: number,
            month: string,
            day: string;

        year = date.getFullYear();
        month = this.setDoubleNumber(date.getMonth() + 1);
        day = this.setDoubleNumber(date.getDate());

        return `${year}-${month}-${day}`;
    }

    mounted() {
        this.setTime();
        this.initData();
        this.addListener();
    }

    /**
     * 设置时间
     */
    setTime(): void {
        let date = new Date(),
            hours: string,
            minutes: string,
            seconds: string | number;

        hours = this.setDoubleNumber(date.getHours());
        minutes = this.setDoubleNumber(date.getMinutes());
        seconds = this.setDoubleNumber(date.getSeconds());

        this.time = `${hours}:${minutes}:${seconds}`;

        setTimeout(this.setTime, 1000);
    }

    /**
     * 初始化数据
     */
    initData() {
        Http.getSystemList().then(data => {
            if (data.errorcode === Http.OK) {
                this.data = data.data;

                Storage.setStorage(Storage.key, this.data);
            } else {
                alert(data.msg);
            }
        });
    }

    /**
     * 切换系统
     * @param name 系统名称
     */
    toggleSystem(name: string) {
        let _cur: { name?: string; instruction?: any; routingkey?: any; },
            _data = Object.create(null);

        this.data.map((item: { name: string; }) => {
            if (item.name === name) {
                _cur = item;
            }
        });

        _data.instruction = _cur.instruction;
        _data.routingKey = _cur.routingkey;

        Http.sendInstruction(_data).then(data => {
            if (data.errorcode !== Http.OK) {
                alert(data.msg);
            }
        });
    }

    /**
     * 设置时间格式
     * @param  {number}
     * @return {string}
     */
    setDoubleNumber(num: number): string {
        return num >= 10 ? String(num) : '0' + num;
    }

    /**
     * 添加事件监听
     */
    addListener() {
        document.addEventListener('click', () => {
            this.showCloudBtn = false;
        }, false)
    }

    /**
     * 切换云防系统开关
     * @param key 动作
     */
    toggleCloudDefense(key: string) {
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
            .then(res => {
                if (res.errorcode !== Http.OK) {
                    alert(res.msg);
                }
            })
    }
}