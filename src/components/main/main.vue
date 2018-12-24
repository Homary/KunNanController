<template>
<main>
	<header>
		<div class="header-left">
			<span>logo</span>
			<span>{{title}}</span>
		</div>
		<div class="header-right">
			<span class="date">{{date}}</span>
			<span>admin</span>
			<span>退出</span>
		</div>
	</header>
	<nav>
		<ul>
			<li><router-link to="data-analysis">数据研判</router-link></li>
			<li>运行态势</li>
		</ul>
	</nav>
</main> 
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Main extends Vue{
	title: string = '昆明火车南站操控台';

	get date(){
        let date = new Date(),
            _year,
            _month,
            _day;

        _year = date.getFullYear();
        _month = date.getMonth() + 1;
        _day = date.getDate();

        return `${_year}-${_month}-${_day}`;
	}
}
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>