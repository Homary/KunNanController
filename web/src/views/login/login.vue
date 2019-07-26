<template>
	<div class="login-main">
		<section class="login-main-wrapper">
			<h3>{{ login_title }}</h3>
			<div class="form">
				<label for="user" class="input-wrap"
					><i class="icon-user"></i
					><input
						type="text"
						id="user"
						readonly="true"
						unselectable="on"
						onfocus="this.blur()"
						v-model="admin" 
                        oncopy="return false;"
				/></label>
				<label for="password" class="input-wrap"
					><i class="icon-pwd"></i
					><input
						type="password"
						id="password"
						v-model="pwd"
						required="required"
						@keyup.enter="setForm" 
                        oncopy="return false;"
				/></label>
				<button class="btn" @click="setForm">登陆</button>
			</div>
		</section>
	</div>
</template> 

<script src="./login.ts">
</script>

<style src="./login.less" lang="less">
</style>