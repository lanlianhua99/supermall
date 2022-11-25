<template>
	<div id="app">
    <keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
    <main-tab-bar v-if="!$route.meta.hiddenTabBar"></main-tab-bar>
	</div>
</template>
<script>
  import MainTabBar from "../src/components/content/MainTabBar.vue"
	export default {
		name:'app',
		components:{
			MainTabBar
		}
	}
</script>
<style lang="less" scoped>
	@import url('assets/css/base.css');
	
</style>
