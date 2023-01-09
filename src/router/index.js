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
  },
  {
    path: "/home/houseLoan",
    name: "HouseLoan",
    component: () => import('../components/HouseLoan_v2.vue'),
  },
  {
    path: "/home/creditLoan",
    name: "CreditLoan",
    component: () => import('../components/CreditLoan_v2.vue'),
  },
  {
    path: "/home/creditLoan/militaryCredit",
    name: "militaryCredit",
    component: () => import('../components/militaryLoan.vue'),
  },
  {
    path: "/home/creditLoan/primeCredit",
    name: "primeCredit",
    component: () => import('../components/primeCredit.vue'),
  },
  {
    path: "/home/creditLoan/medicalCredit",
    name: "medicalCredit",
    component: () => import('../components/medicalLoan.vue'),
  },
  {
    path: "/home/creditLoan/smallCredit",
    name: "smallCredit",
    component: () => import('../components/smallCredit.vue'),
  },
  {
    path: "/home/houseLoan/fitstLoan",
    name: "firstLoan",
    component: () => import('../components/firstLoan.vue'),
  },
  {
    path: "/home/houseLoan/generalLoan",
    name: "generalLoan",
    component: () => import('../components/generalLoan.vue'),
  },
  {
    path: "/home/houseLoan/happyLoan",
    name: "happyLoan",
    component: () => import('../components/happyLoan.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
