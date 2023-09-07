import { ref } from 'vue'
const baseShape = ['rect', 'rectPoints', 'circle', 'ellipse', 'triangle', 'polygon']

export interface WidgetGroupItem {
	name: string,
	children: string[]
}

function getShapeIcon(shape: string){
	return ''
}

export function useWidget(){
	const activeWidget = ref('')
	const setActiveWidget = (item: string) => {
		console.log(11, item)
		activeWidget.value = item
	}
	const widgets = ref([
		{
			name: 'Base',
			children: baseShape,
		},
	])

	return {
		baseShape,
		widgets,
		activeWidget,
		setActiveWidget,
	}
}