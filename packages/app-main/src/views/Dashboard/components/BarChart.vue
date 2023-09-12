<template>
	<v-chart :class="ns.b()" :option="option" autoresize />
</template>
<script lang="ts">
export default {
	name: 'BarChart',
}
</script>

<script lang="ts" setup>
import { ref, provide, watchEffect } from 'vue';
import { useNamespace } from '@innbell/utils'
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	ToolboxComponent,
	BrushComponent,
	GridComponent,
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { useGlobalStore } from '@/store/global'

const ns = useNamespace('BarChart')

use([
	CanvasRenderer,
	BarChart,
	TitleComponent,
	TooltipComponent,
	LegendComponent,
	ToolboxComponent,
	BrushComponent,
	GridComponent,
]);

const globalStore = useGlobalStore()

watchEffect(() => {
	provide(THEME_KEY, globalStore.isDark ? 'dark' : 'light');
})

const props = defineProps({
	option: {
		type: Object,
		default: () => ({}),
	},
});

</script>

<style lang="scss">
@include b('BarChart'){
  height: 100%;
}
</style>