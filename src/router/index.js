import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/index'
import Museum from '@/page/museum/museum'
import Snow from '@/page/snow/snow'
import Reserve from '@/page/reserve/reserve'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/museum',
    name: 'museum',
    component: Museum
  }, {
    path: '/snow',
    name: 'snow',
    component: Snow
  } ]
})
