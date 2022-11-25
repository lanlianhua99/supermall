<template>
	<div class="toast" v-show="isShow">
		{{mess}}
	</div>
</template>

<script>
	export default {
		name:'Toast',
		props: {
			// mess: {
			// 	type: String,
			// 	default: ""
			// },
		},
		data() {
			return {
				mess:"",
				// isHidden: true,
				isShow:false
			}
		},
		methods: {
			show(mess) {
				// console.log("show");
				// debugger
				this.mess=mess
				this.isShow=true
				setTimeout(()=> {
					this.isShow=false
				}, 700);
			}
		},
		watch:{
			mess:function(val){
				// console.log("监听到mess数据变化");
				this.isShow=true
				setTimeout(()=> {
					this.isShow=false
				}, 900);
			}
		}
	}
</script>

<style scoped>
	.toast{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		padding: 10px;
		border-radius: 10px;
		background-color: rgba(0, 0, 0, 0.77);
		color: aliceblue;
		
	}
	/* .hidden{
		display: none;
	} */
</style>