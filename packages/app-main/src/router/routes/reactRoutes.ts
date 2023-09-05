import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')
const microApp = () => import('@/views/microApps/ReactApp.vue')

export const routes: RouteRecordRaw[] = [
	{
		path: '/react',
		component: Layout,
		name: 'React',
		children: [
			{
				path: 'innbell-ui',
				component: microApp,
				meta: {
					title: 'Binary Tree',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
				component: microApp,
			},
		],
		meta: {
			title: 'micro-react',
			icon: '',
			isMenu: true,
		},
	},
]

export default routes
