import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@src/views/Home/index.vue'),
  },
  {
    path: '/page1',
    name: 'Home',
    component: () => { render:() => '<div>page1</div>'},
  },
  {
    path: '/page2',
    name: 'Home',
    component: () => { render:() => '<div>page2</div>'},
  },
  {
    path: '/page3',
    name: 'Home',
    component: () => { render:() => '<div>page3</div>'},
  }
]

export function newRouter(basename = '') {
  console.log('basename', basename)
  const router = createRouter({
    history: createWebHistory(basename),
    // base: basename,
    routes,
  });
  return router;
}