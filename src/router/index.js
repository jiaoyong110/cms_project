import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/home.vue'
import Cart from '@/components/Cart/cart.vue'
import Search from '@/components/Search/search.vue'
import Vip from '@/components/Vip/vip.vue'
import NewsList from '@/components/News/newslist.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/vip',
      name: 'vip',
      component: Vip
    },
    {
      path: '/news/list',
      name: 'news.list',
      component: NewsList
    }
  ]
})
