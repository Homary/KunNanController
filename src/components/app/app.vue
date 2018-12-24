<template>
<h3>{{msg}}</h3>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue{
	msg: string = 'HelloWorld'
}
</script>

<style lang="less" scoped>

</style>