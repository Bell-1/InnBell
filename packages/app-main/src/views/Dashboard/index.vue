<template>
	<div :class="ns.b()">
		<!-- <div :class="ns.e('indicators')">
			<indicator-card title="111" color="#ff00ff">
				content
			</indicator-card>
			<indicator-card title="111" color="#f3454f"></indicator-card>
			<indicator-card title="111" color="#24ff50"></indicator-card>
			<indicator-card title="111" color="#f0e03f"></indicator-card>
		</div>
		<div class="">
			<bar-chart></bar-chart>
		</div> -->
	</div>
</template>
<script lang="ts">
export default defineComponent({
	name: 'TheDashboard',
})
</script>
<script lang="ts" setup>
import { defineComponent } from 'vue'
import { useNamespace } from '@innbell/utils'
import IndicatorCard from './components/IndicatorCard.vue'
import BarChart from './components/BarChart.vue'
	
const ns = useNamespace('Dashboard')
</script>
<style lang="scss" scoped>
@include b('Dashboard') {
	@include e('indicators'){
		display: flex;
		align-items: center;
		justify-content: center;
		gap: $padding-s;

		&>div {

		}
	}
}
</style>