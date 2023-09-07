<template>
	<div :class="[ns.b()]">
		<widget-panel
			class=""
			:widgets="widgets"
			:active="activeWidget"
			@select-widget="setActiveWidget">

		</widget-panel>
		<div ref="containerRef" :class="[ns.e('container')]">
			<div ref="canvasRef"></div>
		</div>
		<setting-panel></setting-panel>
	</div>
</template>
<script lang="ts">
export default {
	name: 'FlowChart',
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useNamespace } from '@innbell/utils'
import { Graph, EventArgs } from '@antv/x6'
import WidgetPanel from './components/WidgetPanel/index.vue'
import SettingPanel from './components/SettingPanel/index.vue'
import { useWidget } from './hooks/use-widget'
import { useNode } from './hooks/use-node'

const ns = useNamespace('FlowChart')
const { widgets, activeWidget, setActiveWidget } = useWidget()

const containerRef = ref<HTMLDivElement>()
const canvasRef = ref<HTMLDivElement>()
const graph = ref<Graph>()

function initGraph(){
	const el = containerRef.value!

	graph.value = new Graph({
		container: canvasRef.value!,
		width: el.offsetWidth,
		height: el.offsetHeight,
		panning: {
			enabled: true,
			modifiers: 'ctrl',
			eventTypes: ['leftMouseDown'],
		},
		// snapline: true,
		snapline: {
			enabled: true,
			className: 'my-snapline',
		},
		background: {
			color: '#fffbe6', // 设置画布背景颜色
		},
		grid: {
			size: 10,      // 网格大小 10px
			visible: true, // 渲染网格背景
		},
	});

	graph.value.on('blank:click', handleGraphClick)

}

const { createRect, createRectWithPoints, createTriangle, createCircle, createEllipse, createPolygon } = useNode()
const addHandleMap: Record<string, any> = {
	rect: createRect,
	rectPoints: createRectWithPoints,
	circle: createCircle,
	ellipse: createEllipse,
	polygon: createPolygon,
	triangle: createTriangle,
}
const handleGraphClick = ({ e, x, y }: EventArgs['blank:click']) => {
	const nodeInfo = addHandleMap[activeWidget.value]?.({ x,y })
	if(!nodeInfo) return
	graph.value?.addNode(nodeInfo)
}

onMounted(() => {
	initGraph()
})

</script>

<style lang="scss">
@include b('FlowChart'){
	width: 100%;
	height: 100%;
	background: line-gradident(to bottom，white, red);
	display: flex;
	align-items: center;
	gap: $padding-s;

	@include e('container'){
		flex: 1;
		height: 100%;
		background: white;

	}
}
</style>