<template>
	<div class="tab-control">
		<div class="tab-control-item" :class="{'actived':currentIndex===index}" v-for="(item,index) in tabList" :key="index" @click="changeTab(index)">
      <span>{{item}}</span>
    </div>
	</div>
</template>

<script>
  export default {
    name:"TabControl",
    props: {
      tabList: {
        type: Array,
        default(){
					return []
				}
      },
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    methods: {
      changeTab(index) {
        this.currentIndex=index
        this.$emit("tabClick",index)
      }
    },
  }
</script>

<style scoped lang="less">
  .tab-control{
		height: 40px;
    padding:14px 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
		// opacity: 0.9;
    .tab-control-item{
      // flex:1;
      width: 47px;
      // margin:0 20px;
      // padding-bottom: 10px;
    }
  }
  .actived{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
