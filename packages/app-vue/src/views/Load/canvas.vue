<template>
	<div class="load-wrap">
		<div class="config m-b-12">
			<div class="row">
				<label>输入百分比</label>
				<a-input
					placeholder="输入百分比"
					type="number"
					size="small"
					:value="inputPercent"
					@change="changePercent"></a-input>
			</div>
			<div class="row">
				<label>
					<div class="loading"></div>
					<span class="m-l-4">动画</span>
				</label>
				<div>
					<inn-button
						class="m-r-12"
						type="success"
						size="small"
						@click="start">循环</inn-button>
					<inn-button type="danger" size="small" @click="stop">停止</inn-button>
				</div>
			</div>
		</div>
		<canvas
			ref="circleProgress"
			class="canvas"
			width="300"
			height="500"></canvas>
	</div>
</template>

<script lang="ts">
export default {
	name: 'CanvasLoad',
}
</script>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { InnButton } from '@/components/innbell-ui'
import { Input as AInput } from 'ant-design-vue'
import load from './circle'

const circleProgress = ref<HTMLCanvasElement>()

const loading = ref(false)
const percent = ref(10)

const inputPercent = ref(0)

const changePercent = (e: InputEvent) => {
	loading.value = false
	const target = e.target as HTMLInputElement | null
	if (target) {
		inputPercent.value = +target.value % 100
		load.changePercent(Number(target.value))
	}
}

let timerId: number | null = null
const loop = () => {
	if (!loading.value) return
	percent.value = percent.value % 100 + 1
	load.changePercent(percent.value)
	// requestAnimationFrame(loop)
	timerId = setTimeout(loop, 50);
}
onUnmounted(() => {
	timerId && clearTimeout(timerId)
})

const start = () => {
	if (loading.value) return
	loading.value = true
	loop()
}

const stop = () => {
	loading.value = false
}

onMounted(() => {
	circleProgress.value && load.create(circleProgress.value)
	// load.changePercent(percent.value)
	start()
})

</script>
