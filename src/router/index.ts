import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/galleries',
      name: 'galleries',
      children: [
        {
          path: '/galleries/:id',
          component: () => import('../views/galleries/_id.vue'),
          props: true,
        }
      ],
    },
  ]
})

export default router
