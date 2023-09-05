<template>
	<div :class="[ns.b()]">
	</div>
</template>
<script lang="ts">
export default {
	name: 'BarChart',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('BarChart')

</script>

<style lang="scss">
@include b('BarChart'){
  
}
</style>