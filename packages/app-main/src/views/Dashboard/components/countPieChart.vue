<template>
	<div :class="[ns.b()]">
    
	</div>
</template>
<script lang="ts">
export default {
	name: 'CountPieChart',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('countPieChart')

</script>

<style lang="scss">
@include b('countPieChart'){
  
}
</style>