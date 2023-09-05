<template>
	<space :class="[ns.b()]"
		direction="vertical"
		:style="{ width: '100%' }"
		:size="[0, 48]">
		<app-header></app-header>
		<layout>
			<layout-sider>Sider</layout-sider>
			<layout>
				<layout-header>Header</layout-header>
				<layout-content>Content</layout-content>
				<layout-footer>Footer</layout-footer>
			</layout>
		</layout>
	</space>
</template>
<script lang="ts">
export default {
	name: 'LayoutLeftMode',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import AppHeader from './components/AppHeader.vue'
import { Space, Layout, LayoutHeader, LayoutSider, LayoutContent, LayoutFooter } from 'ant-design-vue'

const ns = useNamespace('LayoutLeftMode')

</script>

<style lang="scss">

</style>