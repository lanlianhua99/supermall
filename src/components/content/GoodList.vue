<template>
	<div class="good-list">
		<good-list-item v-for="(item,index) in goodList" :goodItem="item"></good-list-item>
	</div>
</template>

<script>
	import GoodListItem from "./GoodListItem.vue"

	export default {
		name: "GoodList",
		components: {
			GoodListItem
		},
		props: {
			goodList: {
				type: Array,
				default: () => []
			},
		},
		methods: {

		}

	}
</script>

<style scoped>
	.good-list {
		display: flex;
		flex-wrap: wrap;
		margin: 5px;
		justify-content: space-around;
	}
</style>
