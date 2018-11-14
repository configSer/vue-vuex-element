import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index'
import Login from '@/login/login'
import ForgotPwd from '@/login/forgetpwd'

import Home from '@/components/home'
import First from '@/components/homes/first'
import Second from '@/components/homes/second'
import Third from '@/components/homes/third'



import Cart from '@/components/cart'
import Order from '@/components/order'
import Mine from '@/components/mine'

Vue.use(Router);

const info = localStorage.getItem("userInfo");


export default new Router({
  routes: [
    {
      path:'/',
      redirect:info === null || undefined ?  "/login" : "/index"
    },
    {
      path:'/login',
      name:"login",
      component:Login
    },
    {
      path:'/forgetpwd',
      name:"forgetpwd",
      component:ForgotPwd
    },
    {
      path:'/index',
      name:'index',
      component:Index,
      children:[
        {
          path: '/index/home',
          name: 'home',
          component: Home,
          children:[
            {
              path:'/index/home/first',
              component:First
            },
            {
              path:'/index/home/second',
              component:Second
            },
            {
              path:'/index/home/third',
              component:Third
            },
            {
              path:'/index/home',
              redirect:'/index/home/first'
            }
          ]
        },
        {
          path: '/index/cart',
          name: 'cart',
          component: Cart
        },
        {
          path: '/index/order',
          name: 'order',
          component: Order
        },
        {
          path: '/index/mine',
          name: 'mine',
          component: Mine
        },
        {
          path:'/index',
          redirect:'/index/home'
        }
      ]
    }
  ]
})
