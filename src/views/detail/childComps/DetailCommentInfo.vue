<template>
	<!-- 使用Object.keys获取的对象的属性组成的数组的长度来判断对象是否为空 -->
	<!-- <div class="comment-info-wrap" v-if="Object.keys(commentInfo).length !== 0"> -->
	<div class="comment-info-wrap">
		<div class="comment-title flex">
			<div>用户评价</div>
			<div>更多></div>
		</div>
		<div v-for="item in commentInfo">
			<div class="comment-user-info">
				<span><img :src="item.user.avatar" alt="" class="avatar" @load="commentLoad"></span>
				<span>{{item.user.uname}}</span>
			</div>
			<div class="comment-text">{{item.content}}</div>
			<div class="comment-goods-info">
				<span class="comment-time">{{item.created | showDate}}</span>
				<span>{{item.style}}</span>
			</div>
			<div class="flex">
				<div class="comment-info-images" v-for="item in item.images">
					<img :src="item" alt="">
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import {formatDate} from '../../../common/utils.js'
	
	export default {
		name: 'DetailCommentInfo',
		props: {
			commentInfo: {
				type: Array,
				default() {
					return [{
						user:{
							avatar:"http://sns.m.taobao.com/avatar/sns/user/RAzN84GK7wS8eNK9rb18Z88vMQTbNW2nJEENV5FRZvk4w7q3vugPbELDw72PqBAcmS6q5bnTVbW4XxqyD7YJG8gFGxvfaxAi6CQkef45esF1r4HbUjsLvdAKWhz8sHtC8BtNHxz4q6YaALsWBkuSuefVD7nK6Rm2oftFQcH/sns_logo?type=taobao&kn=wwc_tb_11&bizCode=taobao_avatar",
							uname:"筱**8"
						},
						content:"视听效果：不错 尺寸大小：刚好 安装感受：开心",
						created:"1636421017",
						images:["https://gw.alicdn.com/imgextra/i1/O1CN01VMkdq41Qoa1xHxJ9W_!!0-tbbala.jpg_110x10000q90.jpg_.webp","https://gw.alicdn.com/imgextra/i3/O1CN01wmw40R1Qoa24ZZD36_!!0-tbbala.jpg_110x10000q90.jpg_.webp"]
					}]
				}
			}
		},
		// 过滤器是一个js函数,会将前面表达式的值传入函数中
		filters:{
			showDate(value){
				const date = new Date(value*1000)
				return formatDate(date,"yyyy-mm-dd")
			}
		},
		// filters: {
		// 	showDate(value) {
		// 		//将时间戳转换成date对象
		// 		const date = new Date(value * 1000);
		// 		//将date进行格式化
		// 		return formatDate(date, 'yyyy-MM-dd');
		// 	}
		// }
		methods: {
			commentLoad() {
				// console.log("commentLoad");
				this.$emit("commentLoad")
			}
		},
	}
</script>

<style lang="less" scoped>
	.comment-info-wrap {
		padding: 5px 8px;
		font-size: 14px;
		border-bottom: 6px solid #ececec;
		margin-bottom: 5px;
		.comment-title {
			justify-content: space-between;
			border-bottom: 1px solid #ececec;
			padding: 15px 4px;
		}
		.comment-user-info {
			padding: 10px 0;
			.avatar {
				width: 40px;
				height: 40px;
				border-radius: 100%;
				margin-right: 10px;
				vertical-align: middle;
			}
		}
		.comment-text {
			line-height: 20px;
		}
		.comment-goods-info {
			color: #999;
			margin: 4px 0;
			.comment-time {
				margin-right: 10px;
			}
		}
		.comment-info-images {
			img{
				width: 60px;
				height: 60px;
				margin-right: 6px;
			}
		}
	}
	.flex{
		display: flex;
		
	}
</style>
