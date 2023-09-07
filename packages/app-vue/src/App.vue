<template>
	<router-view></router-view>
</template>

<script setup lang="ts">
// import { toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

function changeRoute(path: string) {
	router.push(path)
}
</script>

<style>

#sub-vue-app {
  height: 100%;
  overflow: auto;
}
</style>
