<template>
	<div class="detail">
		<detail-nav-bar class="nav-bar" @titleClick="titleClick" ref="nav"></detail-nav-bar>
		<scroll class="wrapper" :probe-type="3" @scroll="contentScroll" ref="scroll">
			<detail-swiper :imgList="swiperList" @swiperImgLoad="swiperImgLoad" ref="swiper"></detail-swiper>
			<!-- 商品标题等基本信息 -->
			<detail-base-info :goods="goodItem"></detail-base-info>
			<detail-shop-info ref="shopInfo"></detail-shop-info>
			<!-- 参数还没有 -->
			<detail-comment-info ref="comment" @commentLoad="commentLoad"></detail-comment-info>
			<p v-html="goodItem.introduce" style="width: 100%;" ref="introduce"></p>
			<good-list :goodList="recommend" class="recommend" ref="recommend"></good-list>
		</scroll>
		<detail-bottom-bar class="bottom-bar" @addCart="addCart"></detail-bottom-bar>
		<back-top v-show="isShowBack" @click.native="backClick"></back-top>
		<toast :mess="toastMess" ref="toast"></toast>

	</div>

</template>

<script>
	import Toast from "@/components/common/Toast/Toast.vue"
	// import BackTop from "@/components/common/BackTop/BackTop.vue"
	import scroll from "@/components/common/scroll/scroll.vue"

	import detailSwiper from "./childComps/detailSwiper.vue"
	import DetailBottomBar from "./childComps/DetailBottomBar.vue"
	import detailNavBar from "./childComps/detailNavBar.vue"
	import DetailBaseInfo from "./childComps/DetailBaseInfo.vue"
	import DetailShopInfo from "./childComps/DetailShopInfo.vue"
	// import DetailParamInfo from "./childComps/DetailParamInfo.vue"
	import DetailCommentInfo from "./childComps/DetailCommentInfo.vue"

	import GoodList from '@/components/content/GoodList.vue';

	import {
		getGoodDetail,
		Good,
		getRecommend
	} from "@/network/detail.js"

	import {
		debounce
	} from "common/utils";
	import {
		itemImgListener,
		backTopCpn
	} from "common/mixin"

	import {
		mapActions
	} from "vuex"

	export default {
		name: "detail",
		components: {
			detailSwiper,
			// BackTop,
			DetailBottomBar,
			detailNavBar,
			scroll,
			DetailBaseInfo,
			DetailShopInfo,
			// DetailParamInfo,
			DetailCommentInfo,
			GoodList,
			Toast
		},
		mixins: [itemImgListener, backTopCpn],
		data() {
			return {
				detailId: 0,
				goodItem: {},
				swiperList: [],
				// isShowBack: false,
				recommend: [],
				themeTops: [0], //navbar里面点击标题要跳转的距离
				toastMess: "",
				currentIndex: 0,
				obj: {}
			}
		},
		created() {
			const {
				detailId
			} = this.$route.params
			this.detailId = detailId
			// 获取商品详情
			this.getGoodData()

			// 获取推荐
			this.getRecommendData()
		},
		mounted() {
		},
		updated() {
			const waitImgLoaded = async (root) => {
				const imgNodes = root.querySelectorAll('img');
				let imgArr = Array.prototype.slice.call(imgNodes); // NodeList转Array，Array才有map方法
				return await Promise.all(
					imgArr.map(img => {
						new Promise(resolve => {
							img.addEventListener('load', () => {
								resolve(img)
								// console.log("img load");
							})
						})
					})
				)
			} // 等待this.$refs.outputContent元素节点中的所有图片
			waitImgLoaded(this.$refs.introduce)
				.then((datas) => {
					// console.log(this.$refs);
					// console.log(this.$refs.introduce.offsetHeight);
					this.themeTops[3] = -this.$refs.introduce.offsetHeight + this.themeTops[2]
				})
		},
		destroyed() {
			this.$bus.$off("itemImageLoad", this.itemImgListener)
		},
		methods: {
			...mapActions({
				addGood: "addCart"
			}),
			getGoodData() {
				getGoodDetail(this.detailId)
					.then(res => {
						this.goodItem = new Good(res.message)
						// console.log(res.message)
						this.swiperList.push(res.message.goods_small_logo)
						for (let item of res.message.pics) {
							this.swiperList.push(item.pics_mid_url)
						}
						// console.log(this.swiperList);
						// this.swiperList=res.message.pics[0]
					})
					.catch(err => {
						console.log(err)
					})
			},
			addCart() {
				// console.log("addCart",this.goodItem);
				const {
					id,
					img,
					newPrice: price,
					title
				} = this.goodItem
				const product = {
					id,
					img,
					price,
					title
				}
				// this.$store.commit("addCart", product)
				// this.$store.dispatch("addCart",product)
				this.addGood(product)
					.then(res => {
						// console.log(res)
						this.$refs.toast.show(res)
						// this.toastMess=res
						// setTimeout(()=> {
						// 	this.toastMess=""
						// }, 900);
					})
					.catch(err => {
						console.log(err)
					})

			},
			// htmlLoad() {
			// 	console.log("htmlLoad");
			// },
			backClick() {
				this.$refs.scroll.scrollTo(0, 0, 1000)
			},
			contentScroll(y) {
				// console.log("contentScroll",y);
				// 1.判断BackTop是否显示
				this.listenShowBack(-y)
				// 2
				const positionY = -y;
				console.log("positionY: ",positionY,"this.themeTops",this.themeTops);
				console.log("positionY<-this.themeTops[i+1]: ",positionY,-this.themeTops[i+1]);
				let length = this.themeTops.length;
				for (var i = 0; i < length; i++) {
					if (
						(positionY>=-this.themeTops[i]&&positionY<-this.themeTops[i+1])
						||
						(i===length-1&&positionY>=-this.themeTops[i])
						) {
						this.$refs.nav.currentIndex=i
					} 
				}

			},
			async getRecommendData() {
				try {
					const res = await getRecommend()
					this.recommend = res.message.goods
					// console.log(this.recommend);
				} catch (e) {
					//TODO handle the exception
					console.log(e);
				}
			},
			titleClick(index) {
				this.$refs.scroll.scrollTo(0, this.themeTops[index], 800)
			},
			swiperImgLoad() {
				// console.log("swiperImgLoad",this.$refs.comment.$el.offsetTop);
				this.themeTops[1] = (-this.$refs.comment.$el.offsetTop)
				this.themeTops[2] = -this.$refs.comment.$el.offsetHeight + this.themeTops[1]

				// console.log(this.$refs.introduce.offsetHeight);
				// this.themeTops[3]=-11921+this.themeTops[2]
			},
			commentLoad() {
				// console.log("commentLoad",this.$refs.comment.$el.offsetHeight,this.themeTops[1]);

				// this.themeTops[2]=-this.$refs.comment.$el.offsetHeight+this.themeTops[1]
				// console.log("commentLoad",this.themeTops[2]);
			}
		},
		computed: {
			// isShowBackTop() {
			// 	return true
			// }
		},
	}
</script>

<style scoped lang="less">
	.detail {
		height: 100vh;
		position: relative;

		.wrapper {
			position: relative;

			height: calc(100% - 44px - 50px);
			overflow: hidden;
		}

		.nav-bar {
			// position: fixed;
			background-color: #fff;
			position: relative;
			z-index: 9;
		}

		.title {
			text-indent: 1em;
			margin: 5px;
			font-weight: bolder;
			font-size: 18px;
			color: #000;
		}

		.price {
			color: var(--color-high-text);
			font-size: 22px;
			margin: 5px 8px;
		}

		.recommend {
			margin: 20px 0;
		}

		.bottom-bar {
			position: relative;
			// top: -50px;
		}
	}

	.LRmargin {
		margin: 0 3px;
	}
</style>
