import { debounce } from "./utils.js"
import backTop from "@/components/common/BackTop/BackTop.vue"

export const itemImgListener = {
	data(){
		return {
			itemImgListener:null
		}
	},
	mounted(){
		// console.log("mixin 中的mounted");
		// 监听图片加载
		const refresh = debounce(this.$refs.scroll.refresh, 50)
		this.itemImgListener=() => {
		  refresh()
		}
		this.$bus.$on('imgLoad', this.itemImgListener)
	}
}

// console.log("backTop",backTop);

export const backTopCpn = {
	data(){
		return {
			isShowBack: false
		}
	},
	components:{
		backTop
	},
	methods:{
		listenShowBack(positiveY){
			// 显示还是隐藏BacTop
			// positiveY要求是正的
			this.isShowBack = positiveY > 1000
		},
	}
	
}