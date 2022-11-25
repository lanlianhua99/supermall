<template>
	<div class="scroll">
		<div class="content">
			<slot></slot>
		</div>
		
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	
	export default {
		name: 'scroll',
		components: {
			BScroll
		},
		props: {
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
				scroll: null,
			}
		},
		mounted() {
			this.initScroll()
			// setTimeout(()=>this.initScroll(), 20);
			// const timer = setInterval(()=>this.scroll.refresh(),22)
			// setTimeout(()=>clearInterval(timer), 3000);
		},
		methods: {
			initScroll() {
				this.scroll = new BScroll('.scroll', {
					bounce: true,
					click:true,
					probeType: this.probeType,
					pullUpLoad: this.pullUpLoad
				})
				
				// 监听滚动
				if (this.probeType==2 || this.probeType==3) {
					this.scroll.on('scroll',({y})=>{
						// console.log(`y:${y}`);
						this.$emit("scroll",y)
					})
				}
				
				if (this.pullUpLoad) {
					this.scroll.on('pullingUp', () => {
						console.log('上啦加载更多');
						this.$emit("pullingUp")
					})
				}
				
			},
			refresh() {
			  this.scroll && this.scroll.refresh()
				// console.log("refresh");
			},
			scrollTo(x, y, time=300) {
			  this.scroll.scrollTo(x, y, time)
			},
			finishPullUp() {
			  this.scroll.finishPullUp()
			}
		},
		updated() {
			this.scroll.refresh()
			
		}
	}
</script>

<style scoped lang="less">
	// .scroll {
	// 	.content{
	// 	}
	// }
</style>
