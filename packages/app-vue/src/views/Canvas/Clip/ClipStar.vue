<template>
	<div class="canvas-wrapper">
		<canvas ref="canvasRef"></canvas>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fivePointStar } from '../can';

const canvasRef = ref<HTMLCanvasElement>();
const area = { x: 250, y: 250, r: 50, speed: 5 };

const init = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
	changeR();
};

const changeR = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	area.speed *= area.r >= canvas.width || area.r <= 10 ? -1 : 1;
	area.r += area.speed;
	draw();
	requestAnimationFrame(changeR);
};

const draw = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	const { width, height } = canvas;
	ctx.clearRect(0, 0, width, height);
	ctx.save();

	ctx.fillStyle = 'black';
	ctx.beginPath();
	ctx.fillRect(0, 0, width, height);

	const { x, y, r } = area;
	ctx.beginPath();
	fivePointStar(ctx, x, y, r, r / 2);
	ctx.fillStyle = '#FFF';
	ctx.clip();

	ctx.fillRect(0, 0, width, height);
	ctx.fill();

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
