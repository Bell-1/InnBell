import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { useStorage } from '@innbell/utils'

export type Theme = 'inn-dark' | 'inn-light'
export type LayoutMode = 'top' | 'left' 

const { getStorage, setStorage } = useStorage()

export const useGlobalStore = defineStore('global', function () {
	// theme
	const theme = ref<Theme>(getStorage<Theme>('innbell:theme', 'inn-light'))
	const isDark = computed(() => theme.value === 'inn-dark')
	const themeClass = computed(() => isDark.value ? 'dark-theme' : 'light-theme')
	const changeTheme = (_theme: Theme) => {
		theme.value = _theme
		setStorage('innbell:theme', _theme)
	}

	const toggleDarkOrLight = () => {
		theme.value = isDark.value ? 'inn-light' : 'inn-dark'
		setStorage('innbell:theme', theme.value)
	}

	// app layout mode
	const appLayoutMode = ref<LayoutMode>(getStorage<LayoutMode>('innbell:layout', 'top'))
	const changeAppLayout = (mode: LayoutMode) => {
		setStorage('innbell:layout', mode)
		appLayoutMode.value = mode
	}


	return {
		theme,
		isDark,
		themeClass,
		toggleDarkOrLight,
		changeTheme,
		appLayoutMode,
		changeAppLayout,
	}
})
