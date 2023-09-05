<template>
	<left-mode v-if="mode === 'left'"></left-mode>
	<top-mode v-else-if="mode === 'top'"></top-mode>
</template>
<script lang="ts">
export default {
	name: 'Layout',
}
</script>
<script lang="ts" setup>
import { toRef } from 'vue'
import TopMode from './TopMode.vue'
import LeftMode from './LeftMode.vue'
import { useGlobalStore } from '@/store/global'

const globalStore = useGlobalStore()
const mode = toRef(globalStore, 'appLayoutMode')

</script>
<style lang="scss">

</style>