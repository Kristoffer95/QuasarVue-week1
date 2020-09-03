import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'frontend', path: '/frontend', component: () => import('pages/Frontend.vue') },
      { name: 'interface', path: '/interface', component: () => import('pages/Interface.vue') },
      { name: 'communication', path: '/communication', component: () => import('pages/Communication.vue') },
      { name: 'bug', path: '/bug', component: () => import('pages/Bug.vue') }
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
