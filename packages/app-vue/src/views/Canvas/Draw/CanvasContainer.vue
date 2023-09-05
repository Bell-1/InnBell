<template>
	<div class="CanvasContainer" @click="handleAddText">
		<Tooltip @changeType="changeType" @changeSize="handleChangeSize" @changeColor="handleChangeColor" />
		<canvas class="draw-container" ref="canvas" :style="cursorStyle"></canvas>
		<TextArea v-for="(node, index) of textList" :key="node.id" :node="node" @close="handleClose(index)" />
	</div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import Tooltip from './Tooltip.vue'
import TextArea from './TextArea.vue'
import { init, mouseTypeCb, changeType, updateOptions, destory } from './draw'

const MousePencil = 'http://qacosrl83.bkt.clouddn.com/pencil.ico'

export default {
	components: {
		Tooltip,
		TextArea,
	},
	setup() {
		const cursor = ref('text')
		const drawType = ref('text')
		const textList = ref([])

		const canvasRef = ref(null)

		const cursorStyle = computed(() => {
			return {
				cursor: cursor.value === 'crosshair' ? `url("${MousePencil}") , crosshair` : cursor.value,
			}
		})

		const handleClose = (index) => {
			textList.value.splice(index, 1)
		}

		const handleAddText = (e) => {
			if (drawType.value === 'text' && e.target.tagName === 'CANVAS') {
				const point = [e.offsetX, e.offsetY]
				textList.value.push({ id: +new Date(), content: '', point })
			}
		}

		const changeMouseType = (type) => {
			if (cursor.value !== type) {
				cursor.value = type
			}
		}

		const changeType = (type) => {
			drawType.value = type
			cursor.value = type === 'text' ? 'text' : 'crosshair'
			changeType(type)
		}

		const handleChangeSize = (size) => {
			updateOptions({ size })
		}

		const handleChangeColor = (color) => {
			updateOptions({ color })
		}

		onMounted(() => {
			init(canvasRef.value)
			mouseTypeCb(changeMouseType)
		})

		onUnmounted(() => {
			destory()
		})

		return {
			cursor,
			drawType,
			textList,
			canvasRef,
			cursorStyle,
			handleClose,
			handleAddText,
			changeType,
			handleChangeSize,
			handleChangeColor,
		}
	},
}
</script>

<style scoped>
.CanvasContainer {
	position: relative;
	width: 100%;
	height: 100%;

	.draw-container {
		width: 100%;
		height: 100%;
		cursor: url('http://qacosrl83.bkt.clouddn.com/pencil.ico'), auto;
	}
}
</style>