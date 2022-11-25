import {
	request
} from "./request.js"
// 首页的网络请求接口

// 获取轮播图的数据
export function getHomeMultidata() {
	return request({
		url: "/home/multidata"
	})
}
// 接口文档
// https://www.showdoc.com.cn/128719739414963/2526159696464209
export function getHomeGoods(cid, pagenum) {
	// console.log(`https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${cid}&pagenum=${pagenum}`);
	return request({
		url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${cid}&pagenum=${pagenum}`
	})
}

// export function getHomeGoods (cid,pagenum) {
//   return request({
//     url:`https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=${cid}&pagenum=${pagenum}`
//   })
// }
