<template>
	<div class="cart">
		<nav-bar backColor="#ff5777" class="nav-bar">
			<span slot="center">购物车({{cartListLength}})</span>
		</nav-bar>
		<scroll class="scroll" ref="scroll">
			<!-- 可以封装一个list组件.在list组件中可以直接使用vuex的数据 -->
			<good-item :goodItem="item" v-for="(item,index) in cartList" :key="index">
			</good-item>
		</scroll>
		<bottom-bar class="bottom-bar" 	@allClick="allClick"></bottom-bar>
	</div>
</template>

<script>
	import scroll from "@/components/common/scroll/scroll.vue"
	import navBar from "@/components/common/navBar/navBar.vue"

	import GoodItem from "./childComps/GoodItem.vue"
	import BottomBar from "./childComps/BottomBar.vue"

	import {
		mapGetters
	} from 'vuex'

	export default {
		name: "cart",
		components: {
			navBar,
			GoodItem,
			BottomBar,
			scroll,
		},
		data() {
			return {
				// cartList: []
				// checkItemList: []
			}
		},
		created() {},
		activated() {
			this.$refs.scroll.refresh()
			// console.log(this.$store.state.cartList);
		},
		methods: {
			itemCheck(item) {
				// if (item.checked) {
				// 	console.log("选中");
				// 	this.checkItemList.push(item)
				// } else {
				// 	console.log("未选中");
				// 	const itemIndex = this.checkItemList.findIndex(ele => ele.id == item.id)
				// 	this.checkItemList.splice(itemIndex, 1)
				// }
				// console.log("itemCheck",item);
			},
			allClick(state) {
				// if (state) {
				// 	this.checkItemList = this.cartList
				// } else {
				// 	this.checkItemList = []
				// }
			}
		},
		computed: {
			...mapGetters(['cartListLength','cartList','checkdcartList']),
			// goodCount() {
			// 	return this.$store.state.cartList.length
			// },
			// cartList() {
			// 	// console.log(this.$store.state.cartList);
			// 	return this.$store.state.cartList
			// },
			// totalCount() {
			// 	return this.checkItemList.length
			// },
			// totalPrice() {
			// 	let sum = 0
			// 	for (let item of this.checkItemList) {
			// 		sum += item.count * item.price
			// 	}
			// 	return sum
			// }
		},

	}
</script>

<style scoped lang="less">
	.cart {
		height: 100vh;
	}

	.nav-bar {
		background-color: var(--color-high-text);
		color: #fff;
	}

	.bottom-bar {
		background-color: #eee;
		// position: fixed;
		// bottom: 50px;
		// right: 0;
		// left: 0;
	}

	.scroll {
		height: calc(100% - 44px - 49px - 30px);
		overflow: hidden;
	}
</style>
