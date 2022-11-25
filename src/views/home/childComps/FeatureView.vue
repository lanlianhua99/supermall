<template>
	<div class="feature-view">
    <div class="feature-view-item">
      <img src="../../../assets/img/home/recommend_bg.jpg" alt="" @load="featureImgLoad">
      <span class="text"></span>
    </div>

	</div>
</template>

<script>

  export default {
    name:'FeatureView',
    data() {
      return {

      }
    },
		methods: {
			featureImgLoad() {
				// console.log("featureImgLoad");
			}
		},
  }
</script>

<style scoped lang="less">
	.feature-view{
    margin: 8px 0;
    img{
      width: 100%;
    }
  }
</style>
