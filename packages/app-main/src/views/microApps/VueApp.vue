<template>
	<div id="MicroApp">
		<micro-app
			:name="AppInfo.name"
			:url='AppInfo.url'
			:baseroute="AppInfo.baseroute"
			disable-memory-router
			iframe
		></micro-app>
	</div>
</template>
<script lang="ts">
export default {
	name: 'MicroApp',
}
</script>
<script lang="ts" setup>
const VUE_URL = import.meta.env.PROD ? 'https://vue.bell520.cn' : 'http://localhost:8081'

const AppInfo = {
	name: 'SUB_VUE',
	url: VUE_URL,
	baseroute: '/vue',
	disableMemoryRouter: true,
}

</script>
<style lang="scss"></style>