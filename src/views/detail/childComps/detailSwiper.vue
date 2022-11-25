<template>
  <swiper>
    <swiper-item v-for="(item, id) in imgList" :key="id" class="swiper-item">
      <a href="#" style="width: 100%;display: flex;justify-content: center;align-items: center;">
        <img :src="item" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from '@/components/common/swiper/swiper.vue'
  import swiperItem from '@/components/common/swiper/swiperItem.vue'

  export default {
    name: "detailSwiper",
    props: {
      imgList: {
        type: Array,
      }
    },
    components: {
      swiper,
      swiperItem
    },
		data() {
			return {
				isLoad: false
			}
		},
    created() {
      // console.log(this.imgList);
    },
    updated() {
      // updated没有调用
      // console.log("updated",this.imgList);
    },
		methods: {
			swiperImgLoad() {
				if (!this.isLoad) {
					// console.log("swiperImgLoad");
					this.$emit('swiperImgLoad')
					this.isLoad=true
				}
			}
		},
  }
</script>

<style scoped>

  img{
    height: 200px;
  }
  .swiper-item img{
    /* width: 100%; */
    text-align: center;
  }
</style>
