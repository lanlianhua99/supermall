import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'

import  FastClick  from  'fastclick'
import VueLazyload from "vue-lazyload"

Vue.use(VueLazyload,{
	loading: require('@/assets/img/defaultImgUrl.jpg')
})

FastClick.attach(document.body);
// Vue.directive('preventReClick', {
//   inserted (el, binding) {
//     el.addEventListener('click', () => {
//       if (!el.disabled) {
//         el.disabled = true
//         setTimeout(() => {
//           el.disabled = false
//         }, binding.value || 500)
//       }
//     })
//   }
// })


Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: function (h) { return h(App) },
}).$mount('#app')
