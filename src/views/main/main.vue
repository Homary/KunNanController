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
				<li class="nav-item" @click="active=init=false" :class="{'is-active': !active&&!init}">
					<router-link to="data-analysis">
						<img src="./img/数据研判图标.png" alt="" v-if="active || init">
						<img src="./img/数据研判.png" alt="" v-else>
						<h6>数据研判</h6>
					</router-link>
				</li>
				<li class="nav-item" :class="{'is-active': active}" @click="() => {active=true; init=false}">
					<img src="./img/运行态势.png" alt="" v-if="!active">
					<img src="./img/运行态势图标.png" alt="" v-else>
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