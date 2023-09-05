<template>
	<div :class="ns.b()">
		<div :class="ns.e('switch')">
			<div :class="[ns.e('switch-item'), ns.is('active', active === 'canvas')]" @click="active = 'canvas'">canvas 实现</div>
			<span class="m-l-12 m-r-12">|</span>
			<div :class="[ns.e('switch-item'), ns.is('active', active === 'svg')]" @click="active = 'svg'">svg 实现</div>
		</div>
		<canvas-load v-if="active === 'canvas'" />
		<icon-svg v-if="active === 'svg'" />
	</div>
</template>

<script lang="ts">
export default {
	name: 'LoadPage',
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'; 
import CanvasLoad from './canvas.vue'
import IconSvg from './IconSvg.vue'
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('LoadUI')
const active = ref<'canvas' | 'svg'>('canvas')
</script>

<style lang="scss">
@import "./style/index.scss";
</style>
