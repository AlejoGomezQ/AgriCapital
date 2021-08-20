import Vue from 'vue'
import VueRouter from 'vue-router'
import MainSection from '@/views/MainSection.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainSection
  }
 
]

const router = new VueRouter({
  routes
})

export default router
