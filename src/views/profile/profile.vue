<template>
	<div class="profile">
		profile
		<scroll class="profile-scroll">
			
		</scroll>
	</div>
</template>

<script>
	import scroll from "@/components/common/scroll/scroll.vue"
	
	export default {
		name:'profile',
		components: {
			scroll
		},
		data() {
			return {
				obj: {}
			}
		},
	}
</script>

<style scoped>
	.profile-scroll{
		height: 500px;
		overflow: hidden;
	}
</style>