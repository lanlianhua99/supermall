<template>
	<div class="good-list-item" @click="goDetail(goodItem.goods_id)">
		<img  v-lazy="goodItem.goods_big_logo" alt="" @load="imgLoad">
		<p class="title">{{goodItem.goods_name}}</p>
		<p class="price">{{goodItem.goods_price}}</p>
	</div>
</template>

<script>
	export default {
		name: "GoodListItem",
		props: {
			goodItem: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		methods: {
			goDetail(goodId) {
				this.$router.push(`/detail/${goodId}`)
			},
			imgLoad() {
				this.$bus.$emit("imgLoad")
			},
			setDefaultImage(e) {
				e.target.src = require('@/assets/img/defaultImgUrl.jpg')
			}
		},
		beforeDestroy() {
			// console.log("beforeDestroy");
			this.$bus.$off("imgLoad")
		}

	}
</script>

<style scoped lang="less">
	.good-list-item {
		width: 49%;
		display: flex;
		flex-direction: column;
		align-content: center;

		img {
			border-radius: 5px;
			width: 100%;
		}

		.title {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			margin: 10px 0;
			font-size: 14px;
		}

		.price {
			color: var(--color-high-text);
			text-align: center;
			margin-bottom: 4px;
		}
	}
</style>
