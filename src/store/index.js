// import { createApp } from 'vue'
// import { createStore } from 'vuex'

// export default createStore({
//   state(){
//     return {

//     }
//   },
//   mutations:{
//     addCart({cartList},payload){
//       console.log("payload",payload);
//       cartList.push(...payload)
//     }
//   }
// })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cartList: []
	},
	getters: {
		cartListLength(state) {
			return state.cartList.length
		},
		cartList(state) {
			return state.cartList
		},
		checkdcartList(state) {
			// console.log("checkdcartList",state.cartList.filter(item=>item.checked));
			return state.cartList.filter(item => item.checked)
		}
	},
	mutations: {
		addToCart({
			cartList
		}, payload) {
			cartList.push(payload)
		},
		addCount({
			cartList
		}, payload) {
			payload.count++
		},
		allChecked({
			cartList
		}) {
			for (let cart of cartList) {
				if (!cart.checked) {
					cart.checked = true
				}
			}
		},
		allUnchecked({
			cartList
		}) {
			for (let cart of cartList) {
				if (cart.checked) {
					cart.checked = false
				}
			}
		}
		// 进行重构,因为addCart代码复杂,有两个功能.mutations应该是功能单一,这样才好追踪
		// addCart({cartList}, payload) {
		// 	console.log("payload", payload);
		// 	// 判断是否已经在购物车
		// 	// const cartIndex = cartList.findIndex(cart=>cart.id==payload.id)
		// 	const cartRes = cartList.find(cart=>cart.id==payload.id)
		// 	// indexOf不行
		// 	// const cartIndex = cartList.indexOf(payload)
		// 	// console.log(cartIndex);
		// 	// if (cartIndex!=-1) {
		// 	// 	console.log("cartIndex",cartIndex);
		// 	// 	cartList[cartIndex].count++
		// 	// } else{
		// 	// 	payload.count=1
		// 	// 	cartList.push(payload)
		// 	// }
		// 	if (cartRes) {
		// 		console.log("cartRes",cartRes);
		// 		cartRes.count++
		// 	} else{
		// 		payload.count=1
		// 		cartList.push(payload)
		// 	}
		// }
	},
	actions: {
		addCart(context, payload) {
			return new Promise((resolve, reject) => {
				const cartRes = context.state.cartList.find(cart => cart.id == payload.id)
				if (cartRes) {
					context.commit("addCount", cartRes)
					resolve("商品数量+1")
				} else {
					payload.count = 1
					payload.checked = false
					context.commit("addToCart", payload)
					resolve("添加了新商品")
				}
			})
		}
	},
	modules: {}
})
