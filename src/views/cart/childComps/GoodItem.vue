<template>
	<div class="good-item">
		<!-- 按钮 -->
		<div class="check-box">
			<input type="checkbox" name="" id="" v-model="goodItem.checked">
			 <!-- :checked="goodItem.checked" -->
			 <!-- {{checked}} -->
		</div>
		<!-- 图片 -->
		<img :src="goodItem.img" alt="">
		<!-- 文字 标题 价格 -->
		<div class="text">
			<p class="title">{{goodItem.title}}</p>
			<div class="money">
				<p class="price">￥{{goodItem.price}}</p>
				<p class="count">x{{goodItem.count}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'GoodItem',
		props: {
			goodItem: {
				type: Object,
				default () {
					return {}
				}
			},
		},
		data() {
			return {
			}
		},
		methods: {
			
		},
		updated() {
		}
	}
</script>

<style scoped lang="less">
	.good-item {
		display: flex;
		justify-content: space-around;
		// align-items: center;
		padding: 10px;
		border-bottom: 1px solid #e8e8e8;
		.check-box {
			width: 25px;
			display: flex;
			justify-content: center;
			align-items: center;
		}

		img {
			width: 75px;
			margin: 5px;
		}

		.text {
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 12px 0;
			.title {
				font-weight: bolder;
				width: 100%;
				font-size: 15px;
				margin-bottom: 5px;
				// overflow: hidden;
				// white-space: nowrap;
				// text-overflow: ellipsis;

				overflow: hidden;
				text-overflow: clip;
				display: -webkit-box;
				line-height: 25px;
				max-height: 25px;
				-webkit-line-clamp: 1;
				-webkit-box-orient: vertical;
			}
			.money{
				width: 100%;	
				display: flex;
				justify-content: space-between;
				align-items: center;
				.price {
					color: var(--color-high-text);
					font-size: 17px;
				
				}
			}

			
		}
	}
</style>
