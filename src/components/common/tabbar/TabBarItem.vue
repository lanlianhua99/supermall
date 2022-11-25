<!-- <template>
	<div class="tab-bar-item" @click="itemClick">
		<span :class="{'actived':isActive}" class="text">{{item.text}}</span>
		<img :src="item.activeImgSrc" alt="" v-if="isActived">
		<img :src="item.imgSrc" alt="" v-else>
		
	</div>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: {
					text: "首页",
					imgSrc: "",
					activeImgSrc: "",
					path: "/"
				}
			},
		},
		data() {
			return {
				actived: true

			}
		},
		methods: {
			itemClick() {
				this.$router.push(this.item.path)
				// console.log("itemClick");
				// console.log(this.$route.path===this.item.path);
			}
		},
		computed: {
			isActive() {
				return this.$route.path === this.item.path
			}
		},
	}
</script>

<style scoped>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}

	.tab-bar-item img {
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align: middle;
		margin-bottom: 2px;
	}

	.actived {
		color: orange;
	}
</style>
 -->
 
 <template>
 	<div class="tab-bar-item" @click="itemLink">
 		<div v-if="!isActive"><slot name="item-icon"></slot></div>
 		<div v-else><slot name="item-icon-active"></slot></div>
 		<!-- <div :class="{active: isActive}"><slot name="item-text"></slot></div> -->
 		<div :style="activeColor"><slot name="item-text"></slot></div>
 	</div>
 </template>
 
 <script>
 	export default {
 		name: 'TabBarItem',
 		props: {
 			path: String,
 			activeStyle: {
 				type: String,
 				default: 'red'
 			}
 		},
 		data(){
 			return {}
 		},
 		computed: {
 			isActive(){
 				return this.$route.path.indexOf(this.path) !== -1;
 			},
 			activeColor(){
 				return this.isActive ? {color: this.activeStyle} : {}
 			}
 		},
 		methods: {
 			itemLink() {
 				this.$router.push(this.path)
 			}
 		}
 	}
 </script>
 
 <style lang="less" scoped>
 	.tab-bar-item {
 		flex: 1;
 		text-align: center;
		height: 49px;
 		img {
 			width: 22px;
 			height: 22px;
 			margin: 4px 0;
 			vertical-align: middle;
 		}
 	}
 </style>
 