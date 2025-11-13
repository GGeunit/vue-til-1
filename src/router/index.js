import Vue from 'vue';
import VueRouter from 'vue-router';
// import LoginPage from '../views/LoginPage.vue';
// import SignUpPage from '../views/SignUpPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('../views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('../views/SignUpPage.vue'),
    },
  ],
});
