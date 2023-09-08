import type { RouteRecordRaw } from 'vue-router'
import vueRoutes from './vueRoutes'
import reactRoutes from './reactRoutes'
const Layout = () => import('@/layout/index.vue')
const notFound = () => import('@/views/NotFound/index.vue')

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Dashboard',
		component: Layout,
		children: [
			{
				path: '',
				component: () => import('@/views/Dashboard/index.vue'),
			},
		],
		meta: {
			title: '首页',
			icon: '',
			isMenu: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login/index.vue'),
		meta: {
			title: '登录',
			icon: '',
			isMenu: true,
		},
	},
	{
		path: '/chat',
		name: 'ChatGPT',
		component: Layout,
		children: [
			{
				path: '',
				component: () => import('@/views/Chat/index.vue'),
			},
		],
		meta: {
			title: 'ChatGPT',
			icon: '',
			isMenu: true,
		},
	},
	
	...vueRoutes,
	...reactRoutes,
	{
		path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
		component: notFound,
	},
]
