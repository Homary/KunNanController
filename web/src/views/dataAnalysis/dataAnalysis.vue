<template>
<div class="wrapper">
	<main class="data-main">
		<header class="header">
			<span @click="$router.go(-1)" class="header-back"></span>
			<span class="header-title">数据研判</span>
			<span @click="refresh" class="header-refresh"></span>
		</header>
		<section class="section" id="section">
			<header class="sub-header">
				<h6>
					<i class="icon-sub-header"></i>
					人员预警
				</h6>
			</header>
			<div class="section-content" id="section-content">
				<div class="section-content-item" v-for="item of dataArr"
					@click="selectPerson(item)"
					>
					<img :src="item.snapImageUrl" alt="">
					<ul class="item-left">
						<li>姓名</li>
						<li>{{item.personName}}</li>
						<li>性别</li>
						<li>{{item.personSex}}</li>
						<li v-show="false">告警等级</li>
						<li v-show="false">{{item.warnLevel}}</li>
					</ul>
					<h5 class="item-center-title">{{item.repoName}}</h5>
				</div>
			</div>
		</section>
	</main>
	<popup v-show="showPopup" :id="personId" v-on:close-popup="closePopup"></popup>
</div>
</template>

<script src="./dataAnalysis.ts" lang="ts">

</script>

<style src="./dataAnalysis.less" lang="less" scoped>

</style>