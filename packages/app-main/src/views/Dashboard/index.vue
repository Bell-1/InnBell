<template>
	<div :class="ns.b()">
		<a-row :gutter="[12, 12]">
			<welcome-row></welcome-row>
			<statistic-row></statistic-row>
			<chart-row></chart-row>
			<line-chart-row></line-chart-row>
		</a-row>
		
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
import WelcomeRow from './components/WelcomeRow.vue'
import StatisticRow from './components/StatisticRow.vue'
import ChartRow from './components/ChartRow.vue'
import LineChartRow from './components/LineChartRow.vue'
import IndicatorCard from './components/IndicatorCard.vue'
import BarChart from './components/BarChart.vue'

const ns = useNamespace('Dashboard')


/**
 * 获取一天中不同时段的问好
 */

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