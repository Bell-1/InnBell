<template>
	<div :class="[ns.b()]">
		<template v-for="group of widgets" :key="group.name">
			<widget-group>
				<template v-for="item of group.children" :key="item">
					<widget-item :label="item" :is-active="active === item" @click="$emit('selectWidget', item)"></widget-item>
				</template>
			</widget-group>
		</template>
	</div>
</template>
<script lang="ts">
export default {
	name: 'WidgetPanel',
}
</script>

<script lang="ts" setup>
import { ref, PropType } from 'vue'
import { useNamespace } from '@innbell/utils'
import WidgetGroup from './WidgetGroup.vue';
import WidgetItem from './WidgetItem.vue';
import { WidgetGroupItem } from '../../use-widgets'

const ns = useNamespace('WidgetPanel')
const props = defineProps({
	widgets: {
		type: Array as PropType<WidgetGroupItem[]>,
		default: () => [],
	},
	active: {
		type: String,
		default: '',
	},
})

const emit = defineEmits(['selectWidget'])

</script>

<style lang="scss">
@include b('WidgetPanel'){
	padding: 4px;
	width: 90px;
	height: 100%;
  display: flex;
	flex: row wrap;
	justify-content: center;
	background: white;
}
</style>