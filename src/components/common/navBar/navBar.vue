<template>
	<div class="navBar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
	</div>
</template>

<script>
	export default {
    name:"navBar",
		methods: {
			// back() {
			// 	console.log("back");
			// }
		},
  }
</script>

<style scoped lang="less">
  .navBar{
    padding: 5px 0;
    height: 44px;
    // color: #fff;
    // background-color: #ff5777;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
		box-shadow: 0 1px 1px rgba(100,100,100,.1);
    .left,.right{
      width: 60px;
    }
    .center{
      flex:1;
    }
  }
</style>
