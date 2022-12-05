import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome View',
      component: () => import('@/views/WelcomeView.vue'),
    },
    {
      path: '/sign-in',
      name: 'Sign In View',
      component: () => import('@/views/SignInView.vue'),
    },

    {
      path: '/home',
      component: () => import('@/layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'Home View',
          component: () => import('@/views/HomeView.vue'),
        },

        {
          path: 'message',
          name: 'Message View',
          component: () => import('@/views/MessageView.vue'),
        },

        {
          path: 'favorite',
          name: 'Favorite View',
          component: () => import('@/views/FavoriteView.vue'),
        },

        {
          path: 'profile',
          name: 'Profile View',
          component: () => import('@/views/ProfileView.vue'),
        },
      ],
    },
  ],
});

export default router;
