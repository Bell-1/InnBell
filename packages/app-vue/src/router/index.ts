import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const notFound = () => import('@/views/NotFound/index.vue')

const routes: Readonly<RouteRecordRaw[]> = [
	{
		path: '',
		redirect: '/binary-tree',
	},
	{
		path: '/binary-tree',
		name: 'BinaryTree',
		component: () => import('@/views/BinaryTree/index.vue'),
	},
	{
		path: '/innbell-ui',
		name: 'InnUI',
		component: () => import('@/views/InnUI/index.vue'),
	},
	{
		path: '/load-ui',
		name: 'LoadUI',
		component: () => import('@/views/Load/index.vue'),
	},
	{
		path: '/canvas',
		name: 'Canvas',
		component: () => import('@/views/Canvas/index.vue'),
		children: [
			{
				path: 'star',
				name: 'CanvasStar',
				component: () => import('@/views/Canvas/Star/index.vue'),
			},
			{
				path: 'clip',
				name: 'CanvasClip',
				component: () => import('@/views/Canvas/Clip/index.vue'),
			},
		],
	},
	{
		path: '/WebGL',
		name: 'WebGL',
		component: () => import('@/views/WebGL/index.vue'),
	},
	{
		path: '/three',
		name: 'ThreeJS',
		component: () => import('@/views/ThreeJS/index.vue'),
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: notFound,
	},
]

declare global {
  interface Window {
    __MICRO_APP_BASE_ROUTE__: string;
  }
}

export function newRouter(){
	const basename = window.__MICRO_APP_BASE_ROUTE__ || '/';
	const history = createWebHistory(basename);
	const router = createRouter({
		history,
		routes,
	});

	return {
		router,
		history,
	}
}
