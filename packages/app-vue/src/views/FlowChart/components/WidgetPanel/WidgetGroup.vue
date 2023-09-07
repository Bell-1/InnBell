<template>
	<div :class="[ns.b()]">
		<div v-if="title" :class="ns.e('title')">{{ title }}</div>
		<slot></slot>
	</div>
</template>
<script lang="ts">
export default {
	name: 'WidgetGroup',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('WidgetGroup')

const props = defineProps({
	title: {
		type: String,
		default: '',
	},
})

</script>

<style lang="scss">
@include b('WidgetGroup'){
  
}
</style>