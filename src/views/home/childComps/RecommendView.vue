<template>
	<div class="recommend-view">
    <a class="recommend-view-item"  v-for="(item,index) in recommendList" :key="index" :href="item.link">
      <img :src="item.image" alt="" @load="recommendImgLoad">
      <p class="text">{{item.title}}</p>
    </a>
	</div>
</template>

<script>
  export default {
    name:'recommendView',
    props: {
      recommendList: Array
    },
		data() {
			return {
				isLoad: false
			}
		},
		methods: {
			recommendImgLoad() {
				if (!this.isLoad) {
					// console.log("recommendImgLoad");
					this.$emit("recommendImgLoad")
					this.isLoad=true
				}
			}
		},
  }
</script>

<style scoped lang="less">
	.recommend-view{
    padding: 10px;
    border-bottom: solid #eee 10px;
    display: flex;
    align-content: center;
    justify-content: center;
		font-size: 14px;
    .recommend-view-item{
      margin: 3px;
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 100%;
      }
      .text{
        margin-top: 14px;
      }
    }

  }
</style>
