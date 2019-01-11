<template>
<div class="main-box">
	<main class="main">
		<header class="header">
			<div class="header-left">
				<span></span>
				<span>{{title}}</span>
			</div>
			<div class="header-right">
				<span>admin</span>
				<span class="date">{{date}} {{time}}</span>
				<span><router-link to="/">退出</router-link></span>
				<i class="icon-quit"></i>
			</div>
		</header>
		<nav class="nav">
			<ul class="nav-box">
				<li class="nav-item" 
					@click="() => {active=init=false;toggleSystem('数据研判')}" 
					:class="{'is-active': !active&&!init}">
					<router-link to="data-analysis">
						<img src="./img/data_analysis.png" alt="" v-if="active || init">
						<img src="./img/data_analysis_active.png" alt="" v-else>
						<h6>数据研判</h6>
					</router-link>
				</li>
				<li class="nav-item" 
					:class="{'is-active': active}" 
					@click="() => {active=true; init=false; toggleSystem('运行态势')}">
					<img src="./img/run_status.png" alt="" v-if="!active">
					<img src="./img/run_status_active.png" alt="" v-else>
					<h6>运行态势</h6>
				</li>
			</ul>
		</nav>
	</main> 
<!-- 	<wave></wave> -->
</div>
</template>

<script src="./main.ts">

</script>

<style src="./main.less" lang="less">

</style>