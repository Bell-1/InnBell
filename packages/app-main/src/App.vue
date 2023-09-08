<template>
	<div :class="[globalStore.themeClass]">
		<router-view></router-view>
	</div>
</template>

<script setup lang="ts">
import { useGlobalStore } from '@/store/global'

const globalStore = useGlobalStore()

</script>
