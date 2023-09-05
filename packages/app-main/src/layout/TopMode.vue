<template>
	<space :class="[ns.b(), theme]" direction="vertical" :size="[0, 48]">
		<layout :class="ns.e('container')">
			<app-header></app-header>
			<layout>
				<app-sider></app-sider>
				<layout>
					<!-- <app-breadcrumb></app-breadcrumb> -->
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
import { toRefs } from 'vue'
import { useNamespace } from '@innbell/utils'
import AppHeader from './components/AppHeader.vue'
import AppSider from './components/AppSider.vue'
// import AppBreadcrumb from './components/AppBreadcrumb.vue'
import { Space, Layout, LayoutContent } from 'ant-design-vue'
import { useGlobalStore } from '@/store/global'

const ns = useNamespace('LayoutTopMode')

const globalStore = useGlobalStore()
const { theme } = toRefs(globalStore)

</script>

<style lang="scss">
@include b('LayoutTopMode') {
  width: 100%;

  &.dark {
    --background-color: #191919;
    --background-hover: #f0f2f5;
    --background-active: #{$color-primary-dark};
    --text-color: #{$color-white};
    --text-color-active: #{$color-primary-light};
    --text-color-hover: #{$color-primary};
  }

  &.light {
    --background-color: #fff;
    --background-hover: #f0f2f5;
    --background-active: #f0f2f5;
    --text-color: #{$text-color};
    --text-color-active: #{$color-primary};
    --text-color-hover: #{$color-primary};
  }

  @include e('container') {
    height: 100%;
    height: 100vh;
  }

  @include e('main') {
    padding: 20px;
    height: 100%;
    overflow: auto;
    background: $background-color;
  }

  @include e('header') {}

}
</style>