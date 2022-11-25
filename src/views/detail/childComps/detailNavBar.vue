<template>
	<div class="detail-nav-bar" >
		<nav-bar>
			<div slot="left" @click="back" class="left" >
				<img src="~@/assets/img/common/back.svg" alt="">
			</div>
			<div slot="center" class="center">
				<span class="title-item" :class="{active:currentIndex==index}" v-for="(item,index) in titles" @click="itemClick(index)">{{item}}</span>
			</div>
			
		</nav-bar>
	</div>
</template>

<script>
	import navBar from "@/components/common/navBar/navBar.vue"

	export default {
		name: 'detailNavBar',
		components: {
			navBar
		},
		data() {
			return {
				titles: ['商品','评论', '详情', '推荐'],
				currentIndex:0
			}
		},
		methods: {
			back() {
				// console.log("back");
				this.$router.back()
			},
			itemClick(index){
				// console.log("itemClick");
				this.currentIndex=index
				this.$emit("titleClick",index)
			}
		},
	}
</script>

<style scoped>
	.left {
		color: #000;
		height: 100%;
	}
	.center{
		display: flex;
		
	}
	.title-item{
		flex:1;
	}
	.active {
	  color: var(--color-high-text)
	}
</style>