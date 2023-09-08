<template>
	<a-col
		:lg="6"
		:md="12"
		:sm="24"
		:xl="6"
		:xs="24">
		<a-card shadow="never">
			<template #header>
				<span>访问量</span>
			</template>
					
			<div class="bottom">
				<span>
					日均访问量:
					{{ statistic.day }}
				</span>
			</div>
		</a-card>
	</a-col>
	<a-col
		:lg="6"
		:md="12"
		:sm="24"
		:xl="6"
		:xs="24">
		<a-card shadow="never">
			<template #header>
				<span>访问量</span>
			</template>
					
			<div class="bottom">
				<span>
					日均访问量:
					{{ statistic.day }}
				</span>
			</div>
		</a-card>
	</a-col>
	<a-col
		:lg="6"
		:md="12"
		:sm="24"
		:xl="6"
		:xs="24">
		<a-card shadow="never">
			<template #header>
				<span>访问量</span>
			</template>
					
			<div class="bottom">
				<span>
					日均访问量:
					{{ statistic.day }}
				</span>
			</div>
		</a-card>
	</a-col>
	<a-col
		:lg="6"
		:md="12"
		:sm="24"
		:xl="6"
		:xs="24">
		<a-card shadow="never">
			<template #header>
				<span>访问量</span>
			</template>
					
			<div class="bottom">
				<span>
					日均访问量:
					{{ statistic.day }}
				</span>
			</div>
		</a-card>
	</a-col>
</template>
<script lang="ts">
export default {
	name: 'StatisticRow',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('StatisticRow')

const statistic = {
	day: 123,
	week: 123,
	month: 123,
	year: 123,
}

</script>

<style lang="scss">
@include b('StatisticRow'){
  
}
</style>