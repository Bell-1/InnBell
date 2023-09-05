import type { Plugin } from 'vue'
import { applyPolyfills, defineCustomElements } from '@innbell/ui/loader'

export const innbellPlugin: Plugin = {
	async install(app: any) {
		// 配置忽略的元素
		app.config.globalProperties.ignoredElements = [/inn-\w*/]
		applyPolyfills().then(() => {
			defineCustomElements()
		})
	},
}