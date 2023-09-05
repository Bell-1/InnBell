<template>
	<div class="load-wrap">
		<div class="config">
			<div class="row">
				<label>输入百分比</label>
				<a-input
					v-model:value="percent"
					placeholder="输入百分比"
					type="number"
					size="small"
					@change="changePercent"></a-input>
			</div>
		</div>
		<div class="container">
			<div class="content">
				<svg>
					<circle
						id="donut-graph"
						r="100"
						cy="150"
						cx="150"
						stroke-width="4px"
						stroke="rgb(226, 235, 235)"
						stroke-linejoin="round"
						stroke-linecap="round"
						fill="none"
						stroke-dasharray="630" />

					<circle
						id="donut-graph"
						class="t1"
						r="100"
						cy="150"
						cx="150"
						stroke-width="6px"
						stroke="rgb(108, 255, 89)"
						stroke-linejoin="round"
						stroke-linecap="round"
						fill="none"
						:stroke-dasharray="`${630}px`"
						:stroke-dashoffset="dashoffset" />
				</svg>
				<span>{{ percent }}%</span>
			</div>

			<div class="content">
				<svg>
					<circle
						id="donut-graph"
						r="100"
						cy="150"
						cx="150"
						stroke-width="4px"
						stroke="rgb(226, 235, 235)"
						stroke-linejoin="round"
						stroke-linecap="round"
						fill="none"
						stroke-dasharray="630" />

					<circle
						id="donut-graph"
						class="loading"
						r="100"
						cy="150"
						cx="150"
						stroke-width="6px"
						stroke="rgb(108, 255, 89)"
						stroke-linejoin="round"
						stroke-linecap="round"
						fill="none"
						:stroke-dasharray="`${630}px`"
						:stroke-dashoffset="dashoffset" />
				</svg>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'CanvasLoad',
}
</script>

<script lang="ts" setup>
import { Input as AInput } from 'ant-design-vue'
import { ref, computed } from 'vue'

const percent = ref(10)
const loading = ref(false)

const dashoffset = computed(() => `${630 * (100 - percent.value) / 100}px`)

function changePercent() {
	stop()
}

function stop() {
	loading.value = false
}

function start() {
	loading.value = true
}
</script>