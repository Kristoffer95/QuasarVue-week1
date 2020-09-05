import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    redirect: 'detail'
    // children: [
      // { name: 'frontend', path: '/project-detail/frontend', component: () => import('pages/Frontend.vue') },
      // { name: 'communication', path: '/project-detail/communication', component: () => import('pages/Communication.vue') },
      // { name: 'bug', path: '/bug', component: () => import('pages/Bug.vue') }
    // ]
  },
  {
    path: '/detail',
    name: 'detaill',
    component: () => import('layouts/ProjectDetailLayout.vue'),
    children: [
      // { name: 'interface', path: '/interface', component: () => import('pages/Interface.vue') },

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
