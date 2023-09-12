<template>
	<a-col
		
		:xs="24"
		:sm="24"
		:md="12"
		:lg="12"
		:xl="12"
		:xll="12"
	>
		<a-card class="chart-col" shadow="never">
			<bar-chart :option="option1"></bar-chart>
		</a-card>
	</a-col>
	<a-col
		:xs="24"
		:sm="24"
		:md="12"
		:lg="12"
		:xl="12"
		:xll="12"
	>
		<a-card class="chart-col" shadow="never">
			<bar-chart :option="option2"></bar-chart>
		</a-card>
	</a-col>
</template>
<script lang="ts">
export default {
	name: 'ChartRow',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import BarChart from './BarChart.vue';

import { option as option1 } from '../chartData/barData1'
import { option as option2 } from '../chartData/barData2'

const ns = useNamespace('Dashboard')

</script>

<style lang="scss">
.chart-col{
	height: 245px;
	.ant-card-body {
		height: 100%;
		padding: 0;
	}
}
</style>