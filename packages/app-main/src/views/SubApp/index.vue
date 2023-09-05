<template>
	<div id="subAppContainer">
		<template v-for="app of microApps" :key="app.name">
			<micro-app
				:name="app.name"
				:url='app.url'
				:basename="app.basename"
				:disable-memory-router="app.disableMemoryRouter"
				iframe
			></micro-app>
		</template>
	</div>
</template>
<script lang="ts">
export default {
	name: 'SubAppContainer',
}
</script>
<script lang="ts" setup>
const VUE_URL = import.meta.env.PROD ? 'https://vue.bell520.cn' : 'http://localhost:8081'
const REACT_URL = import.meta.env.PROD ? 'https://react.bell520.cn' : 'http://localhost:8082'

const microApps = [
	{
		name: 'SUB_VUE',
		url: VUE_URL,
		basename: '/vue',
		disableMemoryRouter: true,
		active: location.pathname.startsWith('/vue'),
	},
	{
		name: 'SUB_REACT',
		url: REACT_URL,
		basename: '/react',
		disableMemoryRouter: true,
		active: location.pathname.startsWith('/react'),
	},
]

</script>
<style lang="scss"></style>