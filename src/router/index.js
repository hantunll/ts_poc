import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../components/Home.vue'),
    // children: [
    //   {
    //     path: "/houseLoan",
    //     name: "HouseLoan",
    //     component: () => import('../components/HouseLoan.vue'),
    //   },
    //   {
    //     path: "/creditLoan",
    //     name: "CreditLoan",
    //     component: () => import('../components/CreditLoan.vue'),
    //   },
    // ]
  },
  {
    path: "/home/houseLoan",
    name: "HouseLoan",
    component: () => import('../components/HouseLoan.vue'),
  },
  {
    path: "/home/creditLoan",
    name: "CreditLoan",
    component: () => import('../components/CreditLoan.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
