<template>
	<router-view class="router-view"></router-view>
</template>

<script lang="ts">
import Vue from 'vue';

export default class App extends Vue{
	name: string = 'app'
}
</script>

<style lang="less">
@import '~@/style/reset';

html, body{
	width: 100%;
	height: 100%;
	font-size: 16px;
	font-family: "Microsoft YaHei";
	.router-view{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
</style>