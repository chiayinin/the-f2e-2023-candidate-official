import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import NotFound404 from '@/views/NotFound404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound404',
    // component: NotFound404,s
  },
];

const base_url = import.meta.env.BASE_URL;
const router = createRouter({
  history: createWebHashHistory(base_url), // (/#)
  routes
});

// 全域性路由守衛
// router.beforeEach((to, from) => {
//   // to: Route: 即將要進入的目標 路由物件
//   // from: Route: 當前導航正要離開的路由
//   let isRemoveCookie = document.cookie.split(';').some(c => c.trim().startsWith('expires=Thu, 01 Jan 1970 00:00:00 UTC;')); // 是否登入，有到期日表示已登出。

//   // 當路由到 login 時，有登入要跳轉至home
//   if (to.name === 'Login') {
//    if (isRemoveCookie) router.push({ name: 'Files' });
//   }
//  });

export default router
