<template>
<main>
	<header>
		<span @click="$router.go(-1)">返回上一级</span>
		<span>数据研判</span>
		<span @click="refresh">刷新页面</span>
	</header>
</main>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class DataAnalysis extends Vue{
	msg: string = 'hello';

	refresh(): void{
		window.location.reload();
	}
}
</script>

<style rel="stylesheet/less" lang="less" scoped>

</style>