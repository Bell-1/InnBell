<template>
	<div :class="[ns.b(), ns.is('active', isActive)]">
		<label>{{ label }}</label>
	</div>
</template>
<script lang="ts">
export default {
	name: 'WidgetItem',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('WidgetItem')
const props = defineProps({
	label: {
		type: String,
		default: '',
	},
	isActive: {
		type: Boolean,
		default: false,
	},
})

</script>

<style lang="scss">
@include b('WidgetItem'){
	margin-top: $padding-s;
	padding: $padding-xs;
  width: 60px;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
	transition: all 0.2s ease-in-out;
	user-select: none;
	cursor: pointer;

	@include when('active'){
		border: 1px solid $color-primary;
		color: $color-primary;
	}
}
</style>