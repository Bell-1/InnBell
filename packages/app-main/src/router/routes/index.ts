import type { RouteRecordRaw } from 'vue-router'
import vueRoutes from './vueRoutes'
import reactRoutes from './reactRoutes'
const Layout = () => import('@/layout/index.vue')
const notFound = () => import('@/views/NotFound/index.vue')

export const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: Layout,
		children: [
			{
				path: '',
				component: () => import('@/views/Dashboard/index.vue'),
			},
		],
		meta: {
			title: 'Dashboard',
			icon: '',
			isMenu: true,
		},
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('@/views/Login/index.vue'),
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
			title: 'ChatChatGPT',
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
