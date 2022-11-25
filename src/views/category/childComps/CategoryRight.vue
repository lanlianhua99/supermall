<template>
  <div id="category_right">
    <scroll class="wrapper" ref="scroll">
      <div class="main">
				<div class="tab_item" v-for="(item, index) in list_item" :key="index">
				  <a :href="item.link">
				    <img :src="item.image_src" @load="imgLoad" />
				    <p class="item_text">{{ item.name }}</p>
				  </a>
				</div>
			</div>
    </scroll>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/scroll.vue";
export default {
  props: {
    list_item: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {},
  methods: {
    imgLoad() {
      this.count++;
      if (this.count >= this.list_item.length) {
        this.$refs.scroll.refresh();
        this.count = 0;
      }
    }
  },
  components: {
    Scroll
  }
};
</script>
<style scoped>
#category_right {
  flex: 1;
}
.wrapper {
  height: 100%;
  overflow: hidden;
}
.main{
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
}
.tab_item {
  width: 40%;
	margin: 10px 0;
}
.tab_item a {
  display: block;
}
.tab_item img {
  width: 100%;
	height: 105px;
	object-fit: cover;
	border-radius: 5px;
}
.item_text {
  margin-top: 0.3rem;
  text-align: center;
}
</style>
