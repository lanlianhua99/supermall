<template>
	<div class="back-top">
		<img src="~@/assets/img/common/top.png" alt="">
	</div>
</template>

<script>
	export default {
		name: 'BackTop'
	}
</script>

<style scoped lang="less">
	.back-top {
		position: fixed;
		right: 15px;
		bottom: 130px;
		z-index: 9;
		/* border-radius: 50%; */
		/* color: var(--color-high-text); */
		img {
		  width: 43px;
		  height: 43px;
		}
	}
	
</style>

