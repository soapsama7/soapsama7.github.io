import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'cover',
    component: () => import('../views/CoverView.vue'),
    meta: { chapter: '表紙' }
  },
  {
    path: '/contents',
    name: 'contents',
    component: () => import('../views/ContentsView.vue'),
    meta: { chapter: '目次' }
  },
  {
    path: '/articles',
    name: 'articles',
    component: () => import('../views/ArticlesView.vue'),
    meta: { chapter: '第一帖・記事' }
  },
  {
    path: '/colophon',
    name: 'colophon',
    component: () => import('../views/ColophonView.vue'),
    meta: { chapter: '奥付' }
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior () {
    // 每页是独立的内部滚动容器，路由切换时不接管滚动
    return false
  }
})

export default router
