<template>
	<div class="Star flex center around">
		<star-up></star-up>
		<star-down></star-down>
	</div>
</template>

<script lang="ts" setup>
import StarDown from './StarDown.vue'
import StarUp from './StarUp.vue'
</script>

<style lang="scss">
.Star {
	height: 100%;
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: space-around;

	.canvas-wrapper {
		margin: 10px 0;
		box-shadow: 0 0 20px rgb(228, 227, 227);
		border-radius: 4px;
		width: 500px;
		height: 500px;

		canvas {
			width: 100%;
			height: 100%;
		}
	}
}
</style>