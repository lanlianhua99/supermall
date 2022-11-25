<<!-- template>
	<div class="main-tab-bar">
		<tab-bar :itemList="tabBarData"></tab-bar>
	</div>
</template>

<script>
	import TabBar from "../../components/common/tabbar/TabBar.vue"
	export default {
		components: {
			TabBar
		},
		data() {
			return {
				tabBarData: [{
						text: "首页",
						imgSrc: require("../../assets/img/tabbar/tab_home.png"),
						activeImgSrc: require("../../assets/img/tabbar/tab_home.png"),
						path: "/home"
					},
					{
						text: "category",
						imgSrc: require("../../assets/img/tabbar/tab_home.png"),
						activeImgSrc: require("../../assets/img/tabbar/tab_home.png"),
						path: "/category"
					},
					{
						text: "cart",
						imgSrc: require("../../assets/img/tabbar/tab_home.png"),
						activeImgSrc: require("../../assets/img/tabbar/tab_home.png"),
						path: "/cart"
					},
					{
						text: "profile",
						imgSrc: require("../../assets/img/tabbar/tab_home.png"),
						activeImgSrc: require("../../assets/img/tabbar/tab_home.png"),
						path: "/profile"
					},

				]
			}
		},
	}
</script>

<style scoped>

</style> -->

 
 
 <template>
 	<tab-bar>
 		<tab-bar-item path="/home">
 			<template #item-icon>
 				<img src="~assets/img/tabbar/icon01.png" alt="">
 			</template>
 			<template #item-icon-active>
 				<img src="~assets/img/tabbar/icon01_active.png" alt="">
 			</template>
 			<template #item-text>
 				<div>主页</div>
 			</template>
 		</tab-bar-item>
 		<tab-bar-item path="/category">
 			<template #item-icon>
 				<img src="~assets/img/tabbar/icon02.png" alt="">
 			</template>
 			<template #item-icon-active>
 				<img src="~assets/img/tabbar/icon02_active.png" alt="">
 			</template>
 			<template #item-text>
 				<div>分类</div>
 			</template>
 		</tab-bar-item>
 		<tab-bar-item path="cart">
 			<template #item-icon>
 				<img src="~assets/img/tabbar/icon03.png" alt="">
 			</template>
 			<template #item-icon-active>
 				<img src="~assets/img/tabbar/icon03_active.png" alt="">
 			</template>
 			<template #item-text>
 				<div>购物车</div>
 			</template>
 		</tab-bar-item>
 		<tab-bar-item path="/profile">
 			<template #item-icon>
 				<img src="~assets/img/tabbar/icon04.png" alt="">
 			</template>
 			<template #item-icon-active>
 				<img src="~assets/img/tabbar/icon04_active.png" alt="">
 			</template>
 			<template #item-text>
 				<div>我的</div>
 			</template>
 		</tab-bar-item>
 	</tab-bar>
 </template>
 
 <script>
 	import TabBar from "@/components/common/tabbar/TabBar.vue"
 	import TabBarItem from "@/components/common/tabbar/TabBarItem.vue"
 	export default {
 		name: 'MainTabBar',
 		components: {
 			TabBar,
 			TabBarItem
 		}
 	}
 </script>
 
 <style>
 </style>
 