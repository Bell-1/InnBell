<template>
	<div class="text-area-wrapper" :style="wrapperStyle">
		<div class="close">
			<i class="iconfont icon-close" @click.prevent="handleClose"></i>
		</div>
		<div class="content">
			<textarea v-model="node.content" cols="30" rows="10"></textarea>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { PropType, computed, defineProps, defineEmits } from 'vue'

	const props = defineProps({
		node: {
			type: Object as PropType<any>,
			required: true
		}
	})

	const emit = defineEmits(['close'])

	const wrapperStyle = computed(() => {
		const [x, y] = props.node.point
		return {
			top: `${y}px`,
			left: `${x}px`
		}
	})

	const handleClose = () => {
		emit('close', props.node)
	}

</script>

<style lang="scss">
	.text-area-wrapper {
		position: absolute;
		left: 0;
		top: 0;
		.close {
			position: absolute;
			right: -20px;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			i {
				font-size: 20px;
				color: rgb(160, 160, 168);
				&:hover {
					color: red;
					cursor: pointer;
				}
			}
		}
		.content {
			width: 200px;
			height: 100px;
			border: 1px solid #eee;
			textarea {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>