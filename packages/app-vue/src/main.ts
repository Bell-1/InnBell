import type { Router, RouterHistory } from 'vue-router'
import type { App as AppInstance } from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import { newRouter } from '@/router'
import './public-path'
// stencil
import { applyPolyfills, defineCustomElements } from '@innbell/ui/loader'

const innbellComponents = {
	async install(app: any) {
		// 配置忽略的元素
		app.config.globalProperties.ignoredElements = [/inn-\w*/]
		applyPolyfills().then(() => {
			defineCustomElements()
		})
	},
}

declare global {
  interface Window {
    eventCenterForAppNameVite: any
    __MICRO_APP_NAME__: string
    __MICRO_APP_ENVIRONMENT__: string
    __MICRO_APP_BASE_APPLICATION__: string
		'micro-app-appname-vite': any
  }
}

// 与基座进行数据交互
function handleMicroData (router: Router) {
	// eventCenterForAppNameVite 是基座添加到window的数据通信对象
	if (window.eventCenterForAppNameVite) {
		// 主动获取基座下发的数据
		console.log('child-vite getData:', window.eventCenterForAppNameVite.getData())

		// 监听基座下发的数据变化
		window.eventCenterForAppNameVite.addDataListener((data: Record<string, unknown>) => {
			console.log('child-vite addDataListener:', data)

			if (data.path && typeof data.path === 'string') {
				data.path = data.path.replace(/^#/, '')
				// 当基座下发path时进行跳转
				if (data.path && data.path !== router.currentRoute.value.path) {
					router.push(data.path as string)
				}
			}
		})

		// 向基座发送数据
		setTimeout(() => {
			window.eventCenterForAppNameVite.dispatch({ myname: 'child-vite' })
		}, 3000)
	}
}

let app: AppInstance | null = null
let router: Router | null = null
let history: RouterHistory | null = null
// 将渲染操作放入 mount 函数
function mount () {
	const r = newRouter()
	router = r.router
	history = r.history
	app = createApp(App)
	app.use(router)
	app.use(innbellComponents)
	app.mount('#sub-vue-app')

	console.log('微应用child-vite渲染了')

	handleMicroData(router)

	// fixBugForVueRouter4(router)
}

// 将卸载操作放入 unmount 函数
function unmount () {
	app?.unmount()
	history?.destroy()
	// 卸载所有数据监听函数
	window.eventCenterForAppNameVite?.clearDataListener()
	app = null
	router = null
	history = null
	console.log('微应用child-vite卸载了')
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_BASE_APPLICATION__) {
	window['micro-app-appname-vite'] = { mount, unmount }
} else {
	// 非微前端环境直接渲染
	mount()
}

// 卸载应用
window.unmount = () => {
	app.unmount()
}