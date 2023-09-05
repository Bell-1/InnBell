<template>
	<div class="ClipTxt flex wrap around">
		<clip-auto></clip-auto>
		<clip-hover></clip-hover>
		<clip-star></clip-star>
	</div>
</template>

<script lang="ts">
export default {
	name: 'CanvasClip',
}
</script>

<script setup lang="ts">
import ClipAuto from './ClipAuto.vue'
import ClipHover from './ClipHover.vue'
import ClipStar from './ClipStar.vue'
</script>

<style lang="scss">
.ClipTxt {
	height: 100%;

	.canvas-wrapper {
		display: inline-block;
		box-shadow: 0 0 10px rgb(228, 227, 227);
		border-radius: 6px;
		width: 500px;
		height: 500px;
		margin: 10px;

		canvas {
			width: 100%;
			height: 100%;
		}
	}
}
</style>