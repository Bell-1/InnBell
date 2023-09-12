<template>
	<a-col
		:xs="24"
		:sm="24"
		:md="24"
		:lg="24"
		:xl="24"
		:xll="24"
	>
		<a-card :class="ns.e('line-chart-col')">
			<div ref="lineChartRef" :class="ns.e('line-chart')"></div>
		</a-card>
	</a-col>
</template>
<script lang="ts">
export default {
	name: 'LineChartRow',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('Dashboard')

</script>

<style lang="scss">
@include b('Dashboard'){
  @include e('line-chart-col'){
		width: 100%;
		height: 300px;
		.ant-card-body {
			height: 100%;
		}
	}
}
</style>