<template>
<div class="wrapper">
	<main class="data-main">
		<header class="rs-header">
			<span class="rs-color">运行态势</span>
			<span @click="$router.push({ path: '/main' })" class="header-back">&times;</span>
		</header>
		<section class="rs-container">
			<div class="rs-list-item-wrapper" v-for="(item, index) of listDatas">			
				<span class="rs-color">{{ item.name }}</span>
				<button class="btn--close" 
					@click = "()=>{ item.state = false; toggleTimeRange(index, 'hour', 'day') }"
					:class="{'btn--select': !item.state}"
				>一小时</button>
				<button class="btn--open" 
					@click = "()=>{ item.state = true; toggleTimeRange(index, 'day', 'hour') }"
					:class="{'btn--select': item.state}"
				>全天</button>
			</div>
		</section>
	</main>
</div>
</template>

<script src="./runStatus.ts" lang="ts">

</script>

<style src="./runStatus.less" lang="less" scoped>

</style>