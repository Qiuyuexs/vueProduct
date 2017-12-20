import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Order from '@/page/order/order'
import Detail from '@/page/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/order',
    name: 'order',
    component: Order
  }, {
    path: '/detail/',
    name: 'detail',
    component: Detail,
    children: [{
      path: 'sight',
      component: {
        template: '<div>sight</div>'
      }
    }, {
      path: 'ticket',
      component: {
        template: '<div>ticket</div>'
      }
    }]
  }]
})
