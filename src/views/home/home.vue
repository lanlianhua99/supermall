<template>
	<div class="home">
		<!-- 也可以给nav-bar设置一个class来设置背景颜色 -->
		<nav-bar class="home-nav">
			<!-- 插槽可以预留位置,来放置任意的html -->
			<div slot="center">蘑菇街</div>
		</nav-bar>
		<tab-control :tabList="['流行','精选','新款']" @tabClick="tabClick" class="home-tab-control2" v-show="isTabFixed"
			ref="tabControl2"></tab-control>
		<scroll ref="scroll" class="home-scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true"
			@pullingUp="loadMore">
			<home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
			<recommend-view :recommendList="recommends" @recommendImgLoad="recommendImgLoad"></recommend-view>
			<feature-view :class="{'m-bottom40':false}"></feature-view>
			<tab-control :tabList="['流行','精选','新款']" @tabClick="tabClick" class="home-tab-control" ref="tabControl">
			</tab-control>
			<good-list :goodList="showGood"></good-list>
		</scroll>
		<back-top v-show="isShowBack" @click.native="backTop"></back-top>

	</div>
</template>

<script>
	import homeSwiper from "./childComps/homeSwiper.vue"
	import FeatureView from "./childComps/FeatureView.vue"
	import RecommendView from "./childComps/RecommendView.vue"

	import navBar from "@/components/common/navBar/navBar.vue"
	import scroll from "@/components/common/scroll/scroll.vue"
	import BackTop from "@/components/common/BackTop/BackTop.vue"
	import TabControl from "@/components/content/TabControl.vue"
	import GoodList from "@/components/content/GoodList.vue"

	import {
		getHomeMultidata,
		getHomeGoods
	} from "../../network/home.js"

	import {
		debounce
	} from "@/common/utils.js"
	import {
		itemImgListener,backTopCpn
	} from "common/mixin"

	export default {
		name: "home",
		components: {
			navBar,
			homeSwiper,
			RecommendView,
			FeatureView,
			TabControl,
			GoodList,
			scroll,
			// BackTop
		},
		mixins:[itemImgListener,backTopCpn],
		data() {
			return {
				banners: [{
					link: "#",
					image: "	https://s10.mogucdn.com/mlcdn/c45406/180926_45fkj8ifdj4l824l42dgf9hd0h495_750x390.jpg"
				}, ],
				recommends: [],
				goods: {
					'pop': {
						list: [],
						page: 0
					},
					'sell': {
						list: [],
						page: 0
					},
					'new': {
						list: [],
						page: 0
					}
				},
				currentGoodType: 'pop',
				// isShowBack: false,
				isTabFixed: false,
				// isShowTab1: true,
				tabControlOffSetTop: 0,
				isSwiperImgLoad: false,
				isRecommendImgLoad: false,
				scrollY:0,
			}
		},
		created() {
			// 获取轮播图和推荐的数据
			this.getMultidata()
			// 获取首页商品的数据
			this.getGoodsData('pop')
			this.getGoodsData('new')
			this.getGoodsData('sell')
		},
		mounted() {
			// // 监听图片的加载
			// const refresh = debounce(this.$refs.scroll.refresh, 50, this.$refs.scroll)
			// // const refresh=this.$refs.scroll.scroll.refresh
			// this.$bus.$on("imgLoad", () => {
			// 	// this.$refs.scroll.scroll.refresh()
			// 	// 使用防抖函数
			// 	refresh()
			// })
		
		},
		activated() {
			this.$refs.scroll.scrollTo(0,this.scrollY,0)
			this.$refs.scroll.refresh()
		},
		deactivated() {
			this.scrollY = this.$refs.scroll.scroll.scrollY
		},
		methods: {
			// debounce(fun,delay){
			// 	let timeoutId =null
			// 	return function (...args) {
			// 		// 如果在delay时间之内再次调用函数,就重置定时器,重新计时.如果定时器存在,就清空定时器,然后重新设置.直到一段时间没有操纵就执行函数
			// 		if (timeoutId) {
			// 			clearTimeout(timeoutId)
			// 		}
			// 		timeoutId=setTimeout(()=>{
			// 			fun.apply(this,args)
			// 		}, delay);
			// 	}
			// },
			// debounce(func, delay,thisArg) {
			//   let timer = null
			//   return function (...args) {
			//     if (timer) clearTimeout(timer)
			//     timer = setTimeout(() => {
			// 			console.log(thisArg);
			//       func.apply(thisArg, args)
			//     }, delay)
			//   }
			// },
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentGoodType = 'pop'
						break
					case 1:
						this.currentGoodType = 'new'
						break
					case 2:
						this.currentGoodType = 'sell'
						break
				}
				this.$refs.tabControl.currentIndex=index
				this.$refs.tabControl2.currentIndex=index
			},
			getMultidata() {
				getHomeMultidata()
					.then(res => {
						this.banners = res.data.banner.list
						this.recommends = res.data.recommend.list
					})
					.catch(err => {
						console.log(err)
					})
			},
			getGoodsData(typeDec) {
				// 将type的数字转换成对应的属性名
				let typeNum
				switch (typeDec) {
					case 'pop':
						typeNum = 10
						break;
					case 'new':
						typeNum = 12
						break;
					case 'sell':
						typeNum = 13
						break;
					default:
						break;
				}

				const page = this.goods[typeDec].page + 1
				getHomeGoods(typeNum, page)
					.then(res => {
						this.goods[typeDec].list.push(...res.message.goods)
						this.goods[typeDec].page += 1
						this.$refs.scroll.scroll.finishPullUp()
					})
					.catch(err => {
						console.log(err)
					})
			},
			backTop() {
				this.$refs.scroll.scroll.scrollTo(0, 0, 1000)
				// console.log("backTop",this.$refs.scroll.scroll);
			},
			contentScroll(y) {
				const positiveY = -y
				this.listenShowBack(positiveY)
				// console.log(positiveY);
				// console.log(y);
				// if (y<-200) {
				// 	this.isShowBack=true
				// } else{
				// 	this.isShowBack=false
				// }
				// TabControl的吸顶效果
				this.isTabFixed = positiveY > this.tabControlOffSetTop
			},
			
			loadMore() {
				// console.log("loadMore");
				this.getGoodsData(this.currentGoodType)
				// console.log('上啦加载更多关闭');
			},
			swiperImgLoad() {
				// swiper中的图片加载完可以进行获取offsetTop了.
				this.isSwiperImgLoad = true
				if (this.isRecommendImgLoad) {
					// console.log(this.$refs.tabControl);
					this.tabControlOffSetTop = this.$refs.tabControl.$el.offsetTop
				}
			},
			recommendImgLoad() {
				this.isRecommendImgLoad = true
				if (this.isSwiperImgLoad) {
					this.tabControlOffSetTop = this.$refs.tabControl.$el.offsetTop
				}
			}
		},
		computed: {
			showGood() {
				return this.goods[this.currentGoodType].list
			},
		},
	}
</script>

<style scoped lang="less">
	.home {
		height: 100vh;

		// position: relative;
		.home-nav {
			// position: fixed;
			// top: 0;
			// left: 0;
			// right: 0;
			// z-index: 9;

			background-color: var(--color-tint);
			color: #fff;
		}

		.home-tab-control {}
	}

	.home-scroll {
		position: absolute;
		top: 44px;
		left: 0;
		right: 0;
		bottom: 49px;
		overflow: hidden;

		// margin-top: 44px !important;
		// height: calc(100% - 93px);
		// overflow: hidden;
	}

	// .tab-fixed {
	// 	position: fixed;
	// 	top: 44px;
	// 	left: 0;
	// 	right: 0;
	// 	z-index: 10;
	// 	background-color: #fff;
	// }

	// .m-bottom40 {
	// 	margin-bottom: 53px;
	// }
	.home-tab-control2 {
		position: relative;
		z-index: 9;
		background-color: #fff;
		bottom: 1px;
	}
</style>
