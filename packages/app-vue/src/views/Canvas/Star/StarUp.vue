<template>
	<div class="canvas-wrapper flex">
		<canvas ref="canvasRef"></canvas>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { fivePointStar } from '../can';

type Star = {
	x: number;
	y: number;
	angle: number;
	size: number;
	color: string;
	speed: number;
};

const getColor = () => Math.floor(Math.random() * 255);

const canvasRef = ref<HTMLCanvasElement>();
const stars = ref<Star[]>([]);

const init = () => {
	const canvas = canvasRef.value;
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	if (!ctx) return;
	canvas.width = 500;
	canvas.height = 500;
	ctx.lineWidth = 1;
	ctx.lineJoin = "round";
	for (let i = 0; i < 60; i++) {
		createStar(true);
	}
	draw(ctx);
	move(ctx);
};

const createStar = (isInit = false) => {
	const x = Math.random() * 500;
	const y = isInit ? Math.random() * 500 : Math.random() * 100 + 500;
	const angle = Math.random() * 90;
	const size = Math.random() * 6 + 5;
	const color = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
	const speed = Math.random() * 2 + 0.5;
	const star = { x, y, angle, size, color, speed };
	stars.value.push(star);
};

const move = (ctx: CanvasRenderingContext2D) => {
	stars.value.forEach((star, index) => {
		const { x, y, size, speed } = star;
		star.y -= speed;
		if (x < -size || y < -size) {
			stars.value.splice(index, 1);
		}
	});
	while (stars.value.length < 60) {
		createStar();
	}
	draw(ctx);
	requestAnimationFrame(() => move(ctx));
};

const draw = (ctx: CanvasRenderingContext2D) => {
	ctx.clearRect(0, 0, 500, 500);
	for (let star of stars.value) {
		const { x, y, angle, size, color } = star;
		ctx.fillStyle = color;
		fivePointStar(ctx, x, y, size, size / 2, angle);
		ctx.fill();
	}
};

onMounted(() => {
	init();
});

</script>

<style lang="scss"></style>