<template>
  <swiper>
    <swiper-item v-for="(item, id) in banners" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperImgLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import swiper from '@/components/common/swiper/swiper.vue'
  import swiperItem from '@/components/common/swiper/swiperItem.vue'

  export default {
    name: "HomeSwiper",
		components: {
		  swiper,
		  swiperItem
		},
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
		data() {
			return {
				isLoad: false
			}
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
</style>
