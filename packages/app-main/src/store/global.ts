import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useStorage } from '@innbell/utils'

export type Theme = 'dark' | 'light'
export type LayoutMode = 'top' | 'left' 

const { getStorage, setStorage } = useStorage()

export const useGlobalStore = defineStore('global', function () {
	// theme
	const theme = ref<Theme>(getStorage<Theme>('innbell:theme', 'light'))
	const changeTheme = (_theme: Theme) => {
		console.log(11, theme)
		theme.value = _theme
		setStorage('innbell:theme', _theme)
	}

	// app layout mode
	const appLayoutMode = ref<LayoutMode>(getStorage<LayoutMode>('innbell:layout', 'top'))
	const changeAppLayout = (mode: LayoutMode) => {
		setStorage('innbell:layout', mode)
		appLayoutMode.value = mode
	}

	return {
		theme,
		changeTheme,
		appLayoutMode,
		changeAppLayout,
	}
})
