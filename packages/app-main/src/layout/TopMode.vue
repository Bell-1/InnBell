<template>
	<space :class="[ns.b()]" direction="vertical" :size="[0, 48]">
		<layout :class="ns.e('container')">
			<app-header></app-header>
			<layout>
				<app-sider></app-sider>
				<layout>
					<layout-content :class="ns.e('main')">
						<router-view></router-view>
					</layout-content>
				</layout>
			</layout>
		</layout>
	</space>
</template>
<script lang="ts">
export default {
	name: 'LayoutTopMode',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import AppHeader from './components/AppHeader.vue'
import AppSider from './components/AppSider.vue'
import { Space, Layout, LayoutContent } from 'ant-design-vue'

const ns = useNamespace('LayoutTopMode')

</script>

<style lang="scss">
@include b('LayoutTopMode') {
	width: 100%;

	.ant-layout {
		background: $background-color-secondary;
	}

	@include e('container') {
		height: 100%;
		height: 100vh;
	}

	@include e('main') {
		padding: 20px;
		height: 100%;
		overflow: auto;
	}

	@include e('header') {}

}
</style>