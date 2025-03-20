import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CustomerView from '../views/CustomerView.vue'
import DepartmentView from '@/views/DepartmentView.vue'  

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView  
  },
  {
    path: '/Customer',
    name: 'Customer',
    component: CustomerView 
  },
  {
    path: '/Department',
    name: 'Department',
    component: DepartmentView 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
