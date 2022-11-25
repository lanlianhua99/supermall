<template>
	<div id="category_left">
		<div class="left_tab_item" v-for="(item, index) in list" :key="index" @click="itemClick(index)"
			:class="{ active: currIndex == index }">
			<p>{{ item.name }}</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			list: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {
				currIndex: 0,
				currMaitKey: 0,
			};
		},
		mounted() {},
		methods: {
			itemClick(index) {
				// console.log("index: ",index);
				this.currIndex = index;
				this.$emit("leftClick", index)
			}
		}
	};
</script>
<style scoped>
	#category_left {
		width: 25%;
		background-color: #f6f6f6;
	}

	.left_tab_item {
		padding: 12px 6px;
		text-align: center;
	}

	.left_tab_item p {
		width: 100%;
		text-align: center;
		color: rgb(100, 100, 100);

		display: inline-block;
		line-height: 0.8rem;
		/* line-height是用来控制border的,其父亲的line-height用来控制整体的行高，自己的用来控制元素的行高 */
		border-left: 0.2rem solid #f6f6f6;
	}

	.left_tab_item.active {
		background-color: white;
	}

	.left_tab_item.active p {
		color: var(--color-high-text);
		font-weight: 600;
		border-left: 0.2rem solid var(--color-high-text);
	}
</style>
