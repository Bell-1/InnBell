<template>
	<div :class="[ns.b(), ns.is('dark', isDark)]">
		<breadcrumb :class="[ns.e('breadcrumb')]">
			<template v-for="route of getBreadcrumb()" :key="route.path">
				<breadcrumb-item>{{ route.meta?.title }}</breadcrumb-item>
			</template>
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
import { onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useTheme } from '@/hooks/use-theme'

const route = useRoute()
const ns = useNamespace('AppBreadcrumb')

const getBreadcrumb = () => route.matched.filter((item) => item.meta?.title)
const { isDark } = useTheme()

onMounted(() => {
	console.log(111, route, getBreadcrumb())
})

</script>

<style lang="scss">
@include b('AppBreadcrumb') {
  position: relative;
  padding: $padding-m $padding-l;
  z-index: 10;

  .ant-breadcrumb {
    color: $text-color;

    .ant-breadcrumb-separator {
      color: $text-color;
    }

    li {
      color: $text-color;

      &:last-child {
        color: $color-primary;
      }
    }
  }

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