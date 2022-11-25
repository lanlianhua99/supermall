<template>
	<div class="bottom-bar">
		<div class="left">
			<div class="check-box">
				<input type="checkbox" :checked="isAllCheck" @click="allClick">
				<span>全选</span>
			</div>
			<span>合计:￥{{totalPrice}}</span>
		</div>
		<div class="cala" @click="goCala">
			<span>去购买({{totalCount}})</span>
		</div>
		<toast ref="toast"></toast>
	</div>
</template>

<script>
	import Toast from "@/components/common/Toast/Toast.vue"
	
	import {
		mapGetters
	} from 'vuex'

	export default {
		name: 'BottomBar',
		components: {
			Toast
		},
		props: {
			// totalPrice: {
			// 	type: Number,
			// 	default: 0
			// },
			// totalCount:{
			// 	type: Number,
			// 	default: 0
			// },
			cartListCount: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {
				// isAllCheck: false,
				value:"value",
				toastMess:""
			}
		},
		methods: {
			allClick() {
				// console.log("allClick");
				// this.allCheck=!this.allCheck
				// this.$emit("allClick",this.allCheck)
				// console.log("isAllCheck",this.isAllCheck);
				if (this.isAllCheck) {
					this.$store.commit("allUnchecked")
				} else{
					this.$store.commit("allChecked")
				}
			},
			goCala(){
				// console.log("goCala");
				if (this.totalCount===0) {
					this.$refs.toast.show("还没有选择商品")
				}
			}
		},
		computed: {
			...mapGetters(['cartListLength', 'cartList', 'checkdcartList']),
			totalPrice() {
				return this.checkdcartList.reduce((preValue, currentValue) => {
					return preValue + currentValue.count * currentValue.price
				}, 0).toFixed(2)
			},
			totalCount() {
				// console.log("totalCount",this.checkdcartList.length);
				return this.checkdcartList.length
			},
			isAllCheck(){
				return (this.cartListLength?(this.cartListLength==this.totalCount):false)
			},
			// isAllCheck: {
			// 	// return this.cartListLength?(this.cartListLength==this.totalCount):false
			// 	// set(newValue){
			// 	// 		console.log("isAllCheck newValue",newValue);
			// 	// },
			// 	// get(){
			// 	// 		// return false
			// 	// 		return this.cartListLength?(this.cartListLength==this.totalCount):false
			// 	// }

			// 	get(){
			// 		// return false
			// 		// return this.cartListLength==this.totalCount
			// 		return (this.cartListLength?(this.cartListLength==this.totalCount):false)
			// 	},
			// 	set(newValue){
			// 		// console.log("isAllCheck newValue",newValue);
			// 		// if (newValue) {
			// 		// 	this.$store.commit("allChecked")
			// 		// } else{
			// 		// 	this.$store.commit("allUnhecked")
			// 		// }
			// 	}
			// },
		},
	}
</script>

<style scoped lang="less">
	.bottom-bar {
		padding-left: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 30px;
		line-height: 30px;
		background-color: #c9c9c9;

		.left {
			display: flex;

			.check-box {
				display: flex;
				margin-right: 20px;

				input {
					margin-right: 5px;
				}
			}
		}

		.cala {
			width: 100px;
			background-color: #ff0033;
			text-align: center;
			line-height: 30px;
			color: #fff5ed;
		}
	}
</style>
