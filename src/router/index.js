import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

// 路径和组件的映射关系
const routes = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: () => import("@/views/home/home.vue")
  },
  {
    path: "/category",
    component: () => import("@/views/category/category.vue")
  },
  {
    path: "/cart",
    component: () => import("@/views/cart/cart.vue")
  },
  {
    path: "/profile",
    component: () => import("@/views/profile/profile.vue")
  },
  {
    path: "/detail/:detailId",
    component: () => import("@/views/detail/detail.vue"),
    meta:{
      hiddenTabBar: true
    }
  },
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

export default router
