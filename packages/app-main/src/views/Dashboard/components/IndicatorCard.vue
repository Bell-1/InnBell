<template>
	<div :class="[ns.b()]" :style="style">
		<div :class="ns.e('title')">{{ title }}</div>
		<div :class="ns.e('content')">
			<div :class="ns.e('content-left')">
				<slot></slot>
			</div>
			<div :class="ns.e('content-right')">
				<circle-load :class="ns.e('process-circle')"></circle-load>
			</div>
		</div>
		<div :class="ns.e('line')"></div>
	</div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import CircleLoad from '@innbell/common-assets/svg/circle-load.svg'
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('IndicatorCard')
const props = defineProps({
	title: {
		type: String,
		default: '',
	},
	value: {
		type: String,
		default: '',
	},
	color: {
		type: String,
		default: '',
	},
})

const style = computed(() => ({
	'--color': props.color || '#000',
}))

</script>

<style lang="scss">
@include b('IndicatorCard'){
	position: relative;
	padding: $padding-s;
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	border-radius: $border-radius;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		height: 4px;
		left: 0;
		width: 100%;
		right: 100%;
		background-color: var(--color);
		border-radius: 0 0 $border-radius $border-radius;
	}

	@include e('content'){
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: $padding-s;
	}

	@include e('content-left'){
		flex: 1;
	}

	@include e('content-right'){

	}

	@include e('process-circle'){
		width: 30px;
		height: 30px;
		.outline {
			cy: 14;
			cx: 14;
			r: 7;
			stroke-width: 2px;
			stroke-dasharray: 44px;
		}
		.process {
			cy: 14;
			cx: 14;
			r: 7;
			stroke-width: 2px;
			stroke-dasharray: 44px;
			stroke-dashoffset: 22px;
		}
	}

}
</style>