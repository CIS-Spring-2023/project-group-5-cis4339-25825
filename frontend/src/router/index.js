import { createRouter, createWebHistory } from 'vue-router'

// make all paths and names lowercase for consistency
const routes = [
  {
    path: '/',
    props: true,
    component: () => import('../components/homePage.vue')
  },
  {
    path: '/intakeform',
    name: 'intakeform',
    props: true,
    component: () => import('../components/intakeForm.vue')
  },
  {
    path: '/findclient',
    name: 'findclient',
    component: () => import('../components/findClient.vue')
  },
  {
    path: '/updateclient/:id',
    name: 'updateclient',
    props: true,
    component: () => import('../components/updateClient.vue')
  },
  {
    path: '/serviceform',
    name: 'serviceform',
    props: true,
    component: () => import('../components/serviceForm.vue')
  },
  /*{
    path: '/findservice',
    name: 'findservice',
    component: () => import('../components/findService.vue')
  },
  {
    path: '/updateservice/:id',
    name: 'updateservice',
    props: true,
    component: () => import('../components/updateService.vue')
  },*/
  {
    path: '/eventform',
    name: 'eventform',
    component: () => import('../components/eventForm.vue')
  },
  {
    path: '/findevents',
    name: 'findevents',
    component: () => import('../components/findEvents.vue')
  },
  {
    path: '/eventdetails/:id',
    name: 'eventdetails',
    props: true,
    component: () => import('../components/eventDetails.vue')
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('../views/login.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
