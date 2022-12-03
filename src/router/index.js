import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboardView from '../views/AdminDashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      name: 'dashboard',
      component: AdminDashboardView,
      meta: {
        title: "Dashboard",
        requiresAuth: false,
      }
    },
    {
      path: '/layouts',
      name: 'about',
      component: () => import('../views/AdminLayoutsView.vue'),
      meta: {
        title: "Layouts",
        requiresAuth: false,
      }
    },
  ],
  linkExactActiveClass: 'LinkActiveClass'
})

router.beforeEach((to, from, next) => {
  document.title = `N.R.K.F Digital School :: ${to.meta.title}`;
  next();
});

export default router
