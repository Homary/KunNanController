<template>
<section>
	<h3>{{login_title}}</h3>
	<div class="form">
		<label for="user">账号<input type="text" id="user" /></label>
		<label for="password" >密码<input type="password" id="password" /></label>
		<button><router-link to="main">登陆</router-link></button>
	</div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue{
	login_title: string = '昆明火车南站综合管控操控台';
}
</script>

<style lang="less" scoped>

</style>