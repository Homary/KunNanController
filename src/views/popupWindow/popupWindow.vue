<template>
<div class="popup-box">
	<div class="popup-main-wrapper" id="popup-main-wrapper">
		<div class="top">
			<span class="top-title">重点人员</span>
			<span style="font-size: 200%" @click="closePupup">&times;</span>
		</div>
		<div class="popup-main">
			<div class="people-info">
				<h5 class="popup-sub-title">人员信息</h5>
				<section class="section-grid">
					<div class="section-item-box">
						<span class="grid-item-tag">姓名</span>
						<span>: {{person_data.personName}}</span>
					</div>
					<div class="section-item-box">
						<span class="grid-item-tag">性别</span>
						<span>: {{person_data.personSex}}</span>
					</div>
					<div class="section-item-box">
						<span class="grid-item-tag">证件类型</span>
						<span>: {{person_data.personCert}}</span>
					</div>
					<div class="section-item-box">
						<span class="grid-item-tag">证件号码</span>
						<span>: {{Number(person_data.personCertNumber)}}</span>
					</div>
					<div class="section-item-box">
						<span class="grid-item-tag">籍贯</span>
						<span>: {{person_data.personNativePlace}}</span>
					</div>
					<div class="section-item-box">
						<span class="grid-item-tag">年龄</span>
						<span>: {{person_data.personAge}}</span>
					</div>
				</section>
			</div>
			<div class="other-info">
				<h5 class="popup-sub-title">其他信息</h5>
				<div class="other-info-content">
					<div>
						<img :src="person_data.snapImageUrl" alt="">
						<h6 class="img-title">抓拍图像</h6>
					</div>
					<div>
						<img :src="person_data.recogImageUrl" alt="">
						<h6 class="img-title">识别图像</h6>
					</div>
					<ul class="other-info-right">
						<li>
							<span class="other-info-right-item">报警编号</span>
							<span>: {{person_data.warnCode}}</span>
						</li>
						<li>
							<span class="other-info-right-item">报警设备</span>
							<span>: {{person_data.warnDevice}}</span>
						</li>
						<li>
							<span class="other-info-right-item">报警时间</span>
							<span>: {{person_data.warnTime}}</span>
						</li>
						<li>
							<span class="other-info-right-item">相似度</span>
							<span>: {{person_data.similarityDegree}}%</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script src="./popupWindow.ts">

</script>

<style src="./popupWindow.less" lang="less">

</style>