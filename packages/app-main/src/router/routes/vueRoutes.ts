import type { RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/index.vue')
const microApp = () => import('@/views/microApps/VueApp.vue')

export const routes: RouteRecordRaw[] = [
	{
		path: '/vue',
		component: Layout,
		name: 'SUB_VUE',
		children: [
			{
				path: 'binary-tree',
				name: 'BinaryTree',
				component: microApp,
				meta: {
					title: 'Binary Tree',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: 'innbell-ui',
				component: microApp,
				meta: {
					title: 'Innbell UI',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: 'load-ui',
				component: microApp,
				meta: {
					title: 'Load UI',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: 'canvas/star',
				component: microApp,
				meta: {
					title: 'Canvas star',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: 'canvas/clip',
				component: microApp,
				meta: {
					title: 'Canvas clip',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: 'flow-chart',
				component: microApp,
				meta: {
					title: 'Flow chart',
					isMenu: true,
					microName: 'SUB_VUE',
				},
			},
			{
				path: '/:pathMatch(.*)*', // https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
				component: microApp,
				meta: {
					title: 'micro-vue',
					microName: 'SUB_VUE',
				},
			},
		],
		meta: {
			title: 'micro-vue',
			icon: '',
			isMenu: true,
		},
	},
]

export default routes
