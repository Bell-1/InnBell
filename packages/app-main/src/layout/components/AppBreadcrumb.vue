<template>
	<div :class="[ns.b()]">
		<breadcrumb :class="[ns.e('breadcrumb')]">
			<breadcrumb-item>aaa</breadcrumb-item>
			<breadcrumb-item>{{ route.path }}</breadcrumb-item>
		</breadcrumb>
	</div>
</template>
<script lang="ts">
export default {
	name: 'AppBreadcrumb',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'
import { Breadcrumb, BreadcrumbItem } from 'ant-design-vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const ns = useNamespace('AppBreadcrumb')

</script>

<style lang="scss">
@include b('AppBreadcrumb'){
  position: relative;
  padding: $padding-m $padding-l;
  background: white;
  z-index: 10;
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 100%;
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  }
}
</style>