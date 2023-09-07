<template>
	<div :class="[ns.b()]">
		
	</div>
</template>
<script lang="ts">
export default {
	name: 'SettingPanel',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('SettingPanel')

</script>

<style lang="scss">
@include b('SettingPanel'){
	width: 360px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: white;
}
</style>