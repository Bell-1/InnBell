import { computed } from 'vue'
import { useGlobalStore } from '@/store/global'

export function useTheme() {
	const golbalStore = useGlobalStore()
	const isDark = computed(() => golbalStore.theme === 'dark')
  
	return {
		isDark,
	}
}