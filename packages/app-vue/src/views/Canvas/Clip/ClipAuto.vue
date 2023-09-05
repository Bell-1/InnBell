<template>
	<div class="canvas-wrapper">
		<canvas ref="canvasRef"></canvas>
	</div>
</template>

<script lang="ts">
export default {
	name: 'ClipAuto',
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const canvasRef = ref<HTMLCanvasElement>();
const area = { x: 200, y: 150, r: 80, xSpeed: 2, ySpeed: 3 };

const init = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	moveClipArea();
};

const moveClipArea = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	const { xSpeed, ySpeed, r } = area;
	area.x += xSpeed;
	area.y += ySpeed;
	if (area.x <= r || area.x >= canvas.width - r) {
		area.xSpeed = -xSpeed;
	}
	if (area.y <= r || area.y >= canvas.height - r) {
		area.ySpeed = -ySpeed;
	}
	draw();
	requestAnimationFrame(moveClipArea);
};

const draw = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	let { width, height } = canvas;
	ctx.clearRect(0, 0, width, height);
	ctx.save();

	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.fillRect(0, 0, width, height);

	const { x, y, r } = area;
	ctx.beginPath();
	ctx.arc(x, y, r, 0, Math.PI * 2);
	ctx.fillStyle = '#FFF';
	ctx.fill();
	ctx.clip();

	ctx.font = '90px Georgia';
	ctx.fillStyle = 'red';
	ctx.fillText('Bell Wise', 10, 90);
	ctx.fillText('Bell Wise', 10, 210);
	ctx.fillText('Bell Wise', 10, 330);
	ctx.fillText('Bell Wise', 10, 450);
	ctx.restore();
};

onMounted(() => {
	init();
});

</script>

<style lang="scss"></style>
