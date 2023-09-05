import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
	history: createWebHistory(),
	routes,
})

export function getSiderBarRoutes() {
	return routes.filter((route) => route.meta?.isMenu)
}

// function useSiderBarRoutes() {
// 	const menus = ref([])
// 	return getSiderBarRoutes(routes)
// 	return {
// 		menus,
// 	}
// }

export default router
