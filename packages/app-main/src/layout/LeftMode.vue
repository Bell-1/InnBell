<template>
	<div :class="ns.b()">
		<app-side :class="ns.e('side')"></app-side>
		<div :class="ns.e('container')">
			<app-header :class="ns.e('header')"></app-header>
			<div :class="ns.e('main')">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
export default {
	name: 'LayoutLeftMode',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import AppHeader from './components/AppHeader.vue'
import AppSide from './components/AppSide.vue'
import { Space, Layout, LayoutContent } from 'ant-design-vue'

const ns = useNamespace('LayoutLeftMode')

</script>

<style lang="scss">
@include b('LayoutLeftMode') {
	background: $background-color-secondary;
	display: flex;
	height: 100vh;

	@include e('container') {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	@include e('side'){
		height: 100%;
	}
	
	@include e('header') {
		padding: 0 $padding-xl;
		display: flex;
		align-items: center;
	}
	@include e('main') {
		padding: $padding-s;
		flex: 1;
		overflow: auto;
	}

}
</style>