<template>
	<div id="MicroApp">
		<micro-app
			:name="AppInfo.name"
			:url='AppInfo.url'
			:baseroute="AppInfo.baseroute"
			:disable-memory-router="AppInfo.disableMemoryRouter"
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
const REACT_URL = import.meta.env.PROD ? 'https://react.bell520.cn' : 'http://localhost:8082'

const AppInfo = {
	name: 'SUB_REACT',
	url: REACT_URL,
	baseroute: '/react',
	disableMemoryRouter: true,
}

</script>
<style lang="scss"></style>