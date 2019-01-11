<template>
<div class="wrapper">
	<main class="data-main">
		<header class="header">
			<span @click="$router.go(-1)" class="header-back"></span>
			<span class="header-title">运行态势</span>
			<span  class="header-refresh"></span>
		</header>
		<div class="img-wrap">
			<img src="./img/run_status.png" alt="">
			<h3>运行态势</h3>
		</div>
	</main>
</div>
</template>

<script src="./runStatus.ts" lang="ts">

</script>

<style src="./runStatus.less" lang="less" scoped>

</style>