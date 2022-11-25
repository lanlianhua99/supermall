import { request } from "./request.js"

export function getGoodDetail (detailId) {
  // console.log(`https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${detailId}`);
  return request(`https://api-hmugo-web.itheima.net/api/public/v1/goods/detail?goods_id=${detailId}`)
}

export class Good {
	constructor(item) {
		this.title=item.goods_name
		this.newPrice=item.goods_price
		this.introduce=item.goods_introduce
		this.id=item.goods_id
		this.img=item.goods_small_logo
		
	}
}


export async function getRecommend(){
	return request({
		url: `https://api-hmugo-web.itheima.net/api/public/v1/goods/search?cid=31&pagenum=1`
	})
}