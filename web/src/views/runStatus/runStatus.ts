import { Vue, Component } from 'vue-property-decorator';
import Http from '@/utils/http';
import { State, Mutation } from 'vuex-class';

interface Instruction {
	instruction: {
		params ? : string
	};
	routingKey: string;
}

@Component
export default class DataAnalysis extends Vue {
	@State(state => state.runStatus.electricFence) electricFence;
	@State(state => state.runStatus.bayonet) bayonet;
	@State(state => state.runStatus.capture) capture;
	@Mutation('setState') setState;

	readonly propMap = ['electricFence', 'bayonet', 'capture'];

	get listDatas() {
		return [ /*{
			name: '电围采集分析',
			state: this.electricFence,
			instructions: {
				hour: {
					action: "hide_show",
					params: {
						"hide_show": "show"
					},
					target: [
						"3aa5d243-5d4a-4aa0-8d96-a2172c4f2d83",
						"f476d9d2-d300-433c-ba4a-9b8fdaca787b",
						"82ea10f2-e2df-4866-867c-b5aa2fbeee4c"
					]
				},
				day: {
					action: "hide_show",
					params: {
						"hide_show": "show"
					},
					target: [
						"5ff7c6a8-830d-457b-86e8-766556fcd677",
						"82495de3-24ac-4d5f-8b3c-2b5e60bef15d",
						"e3c6d7cb-c1bd-47bc-b0ea-334b7a48adbb"
					]
				}
			}
		}, */ {
			name: '卡口过车分析',
			state: this.bayonet,
			instructions: {
				hour: {
					action: "hide_show",
					params: {
						hide_show: "show"
					},
					target: [
						"eb8e29c6-d145-401f-8652-6c6194e93a3c",
						"cbf0d315-415c-4674-b8c9-86db03bc96b2",
						"bd15fda7-cb68-4772-8bb2-3077c709e2e3"
					]
				},
				day: {
					action: "hide_show",
					params: {
						hide_show: "show"
					},
					target: [
						"5ea74431-a12b-4f03-8d50-a8ff9c71cdc4",
						"d982393e-0774-4389-b477-c6d5d540634d",
						"cbbbd2a2-0cfe-4a75-846f-a8ba4ba10d96"
					]
				}
			}
		}, {
			name: '点位抓拍分析',
			state: this.capture,
			instructions: {
				hour: {
					action: "hide_show",
					params: {
						hide_show: "show"
					},
					target: [
						"726e1b69-1d0a-4d20-8562-968efde3a16c",
						"c26d7a26-5045-4dd8-965f-633fab38ffe0",
						"b008ecea-55f5-4f26-80bb-f6855866baaa"
					]
				},
				day: {
					action: "hide_show",
					params: {
						hide_show: "show"
					},
					target: [
						"080f3529-53a6-4e6a-bf39-de060654da75",
						"8b56ac2f-ad9e-4fd9-b561-6e788ce703c5",
						"6edeead8-19e2-47cf-a9d0-1c2f9c90f24a"
					]
				}
			}
		}]
	}

	readonly routingKey: string = 'GXX:VISION';

	toggleTimeRange(index, showItem, hideItem) {
		let self = this;

		this.setState({key: 'runStatus', subKey: this.propMap[index]});

		let curItem = this.listDatas[index],
			showIns = curItem.instructions[showItem],
			hideIns = curItem.instructions[hideItem];

		Object.defineProperty(hideIns.params, 'hide_show', {
			value: 'hide'
		})
		Object.defineProperty(showIns.params, 'hide_show', {
			value: 'show'
		})

		let showData = Object.create(null),
			hideData = Object.create(null);

		Object.defineProperties(showData, {
			'instruction': {
				value: showIns,
				enumerable: true
			},
			'routingKey': {
				value: this.routingKey,
				enumerable: true
			}
		})
		Object.defineProperties(hideData, {
			'instruction': {
				value: hideIns,
				enumerable: true
			},
			'routingKey': {
				value: this.routingKey,
				enumerable: true
			}
		})

		Http.sendInstruction(hideData)
			.then(res => {
				if (res.errorcode !== Http.OK) {
					alert(res.msg);
				} else {
					Http.sendInstruction(showData)
						.then(res => {
							if (res.errorcode !== Http.OK) {
								alert(res.msg);
							}
						})
				}
			})
	}
}