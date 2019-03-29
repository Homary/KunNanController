<template>
<div class="wrapper">
	<main class="data-main">
		<header class="da-header">
			<span class="da-color">数据研判</span>
			<span @click="()=>{$router.push({ path: '/main' }); }" class="header-back">&times;</span>
		</header>
		<section class="da-container">
			<span class="da-color">云防系统</span>
			<button class="btn--close" 
				@click = "()=>{ toggleCloudDefense('close') }"
				:class="{'btn--select': !btnState}"
			>关闭</button>
			<button class="btn--open" 
				@click = "()=>{ toggleCloudDefense('open') }"
				:class="{'btn--select': btnState}"
			>开启</button>
		</section>
	</main>
</div>
</template>

<script src="./dataAnalysis.ts" lang="ts">

</script>

<style src="./dataAnalysis.less" lang="less" scoped>

</style>