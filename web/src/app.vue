<template>

<transition name="slide-fade">
	<router-view class="router-view"></router-view>
</transition>
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
	font-size: 9.765vw;
	font-family: "微软雅黑" !important;
	overflow: hidden;
	body{
		font-size: 10px;
	}
	.router-view{
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
}
.slide-fade-enter-active {
  transition: all 1s ease;
}
.slide-fade-leave-active {
  transition: all 1s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  //transform: translateX(100%);
  transform: scale3d(150);
  opacity: 0;
}
</style>