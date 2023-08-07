import { ref } from 'vue'
import store from '@/store'
import { defineStore } from 'pinia'
import { useStorage } from '@innbell/utils'
import { usePermissionStore } from './permission'
import { useTagsViewStore } from './tags-view'
import { useSettingsStore } from './settings'
import router, { resetRouter } from '@/router'
import { loginApi, getUserInfoApi, LoginRequestData } from '@innbell/api'
import { type RouteRecordRaw } from 'vue-router'
import asyncRouteSettings from '@/config/async-route'

export const useUserStore = defineStore('user', () => {
	const { getStorage, setStorage, removeStorage } = useStorage()

	const token = ref<string>(getStorage('user-token') || '')
	const roles = ref<string[]>([])
	const username = ref<string>('')

	const permissionStore = usePermissionStore()
	const tagsViewStore = useTagsViewStore()
	const settingsStore = useSettingsStore()

	/** 设置角色数组 */
	const setRoles = (value: string[]) => {
		roles.value = value
	}
	/** 登录 */
	const login = async ({ username, password, code }: LoginRequestData) => {
		const { data } = await loginApi({ username, password, confirmPassword: password, code })
		console.log('login success', data)
		data.user.roles = ['admin'] // TODO: remove this line
		token.value = data.token
		setRoles(data.user.roles)
    setToken()
	}
	/** 获取用户详情 */
	const getInfo = async () => {
		const { data } = await getUserInfoApi()
		username.value = data.username
		data.roles = ['admin'] // TODO: remove this line
		// 验证返回的 roles 是否为一个非空数组，否则塞入一个没有任何作用的默认角色，防止路由守卫逻辑进入无限循环
		roles.value = data.roles?.length > 0 ? data.roles : asyncRouteSettings.defaultRoles
	}
	/** 切换角色 */
	const changeRoles = async (role: string) => {
		const newToken = 'token-' + role
		token.value = newToken
		setToken()
		await getInfo()
		permissionStore.setRoutes(roles.value)
		resetRouter()
		permissionStore.dynamicRoutes.forEach((item: RouteRecordRaw) => {
			router.addRoute(item)
		})
		_resetTagsView()
	}

  const setToken = () => {
    setStorage('user-token', token.value)
  }

  const removeToken = () => {
    removeStorage('user-token')
  }

	/** 登出 */
	const logout = () => {
		removeToken()
		token.value = ''
		roles.value = []
		resetRouter()
		_resetTagsView()
	}
	/** 重置 Token */
	const resetToken = () => {
		removeToken()
		token.value = ''
		roles.value = []
	}
	/** 重置 Visited Views 和 Cached Views */
	const _resetTagsView = () => {
		if (!settingsStore.cacheTagsView) {
			tagsViewStore.delAllVisitedViews()
			tagsViewStore.delAllCachedViews()
		}
	}

	return { token, roles, username, setRoles, login, getInfo, changeRoles, logout, resetToken }
})

/** 在 setup 外使用 */
export function useUserStoreHook() {
	return useUserStore(store)
}
