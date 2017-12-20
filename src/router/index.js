import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Onedaytour from '@/page/onedaytour/onedaytour'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/onedaytour/:id',
      name: 'onedaytour',
      component: Onedaytour
    }
  ]
})
