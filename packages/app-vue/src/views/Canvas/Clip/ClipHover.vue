<template>
	<div class="canvas-wrapper">
		<canvas ref="canvasRef" @mousemove="mousemove"></canvas>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement>()
const area = { x: 250, y: 250, r: 100 }

const init = () => {
	const canvas = canvasRef.value
	if(!canvas) return
	const ctx = canvas.getContext('2d')
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
	draw(ctx!)
}

const mousemove = (e: MouseEvent) => {
	area.x = e.offsetX
	area.y = e.offsetY
	draw(canvasRef.value!.getContext('2d')!)
}

const draw = (ctx: CanvasRenderingContext2D) => {
	const { width, height } = canvasRef.value!
	ctx.clearRect(0, 0, width, height)
	ctx.save()

	ctx.fillStyle = 'black'
	ctx.beginPath()
	ctx.fillRect(0, 0, width, height)

	const { x, y, r } = area
	ctx.beginPath()
	ctx.arc(x, y, r, 0, Math.PI * 2)
	ctx.fillStyle = '#FFF'
	ctx.fill()
	ctx.clip()

	ctx.font = '90px Georgia'
	ctx.fillStyle = 'red'
	ctx.fillText('Bell Wise', 10, 90)
	ctx.fillText('Bell Wise', 10, 210)
	ctx.fillText('Bell Wise', 10, 330)
	ctx.fillText('Bell Wise', 10, 450)
	ctx.restore()
}

onMounted(() => {
	init()
})

</script>

<style lang="scss"></style>
