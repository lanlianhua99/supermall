<template>
	<div class="category">
		<nav-bar class="category_nav"><template #center>分类</template></nav-bar>
		<div class="main">
			<category-left ref="left" :list="leftList" @leftClick="leftClick"></category-left>
			<category-right ref="right" :list_item="rightList"></category-right>
		</div>
	</div>
</template>

<script>
	import scroll from "@/components/common/scroll/scroll.vue"

	import CategoryLeft from "./childComps/CategoryLeft.vue";
	import CategoryRight from "./childComps/CategoryRight.vue";

	import NavBar from "components/common/navBar/navBar.vue";
	import { getCategoryList } from "network/category.js";

	export default {
		name: "category",
		components: {
			scroll,
			NavBar,
			CategoryLeft,
			CategoryRight
		},
		data() {
			return {
				scroll: null,
				// rightList: null,
				categories:[],
				leftList:null,
				currentIndex:0
			}
		},
		created() {
			getCategoryList()
			  .then(res=>{
					// console.log(res);
					this.categories=res.message
					this.leftList=res.message.map(item=>item.floor_title)
			  })
			  .catch(err=>{
			    console.log(err)
			  })
		},
		mounted() {
		},
		methods: {
			leftClick(index){
				this.currentIndex=index
			}
		},
		computed:{
			rightList(){
				if (this.categories.length!==0) {
					return this.categories[this.currentIndex].product_list
				} else{
					
				}
			}
		}
	}
</script>

<style scoped>
	.category_nav {
	  background-color: var(--color-tint);
	  color: white;
	}
	.main {
	  display: flex;
		font-size: 17px;
	  height: calc(100vh - 44px - 49px);
	}
</style>
