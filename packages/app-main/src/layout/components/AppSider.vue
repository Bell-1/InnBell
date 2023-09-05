<template>
	<layout-sider :class="[ns.b(), theme]">
		<a-menu
			v-model:openKeys="openKeys"
			v-model:selectedKeys="selectedKeys"
			:class="ns.e('menu')"
			mode="inline"
			:items="menus"
			@select="handleSelectMenu"></a-menu>
	</layout-sider>
</template>
<script lang="ts">
export default {
	name: '',
}
</script>
<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router'
import type { ItemType } from 'ant-design-vue'

import { ref, toRefs, watchEffect } from 'vue'
import { Menu as AMenu, LayoutSider } from 'ant-design-vue'
import { useNamespace } from '@innbell/utils'
import { useGlobalStore } from '@/store/global'
import { getSiderBarRoutes } from '@/router'
import { useRoute, useRouter } from 'vue-router'
import { useMicroRouter } from '@/hooks/use-micro-router'

const ns = useNamespace('AppSider')

const globalStore = useGlobalStore()
const { theme } = toRefs(globalStore)

const route = useRoute()
const router = useRouter()

const selectedKeys = ref<string[]>([])
const openKeys = ref<string[]>([])
watchEffect(() => {
	// 监听路由的变化
	selectedKeys.value = [route.path]
})

function getItem(route: RouteRecordRaw, parentKey?: string): ItemType {
	const { path, meta = {} } = route
	const { icon, title } = meta || {}

	const item = {
		key: parentKey ? `${parentKey}/${path}` : path,
		label: title,
		meta,
		// type,
	}

	return item
}

function getItems(routes: RouteRecordRaw[], parentKey?: string, isMicro?: boolean): ItemType[] {
	return routes.map(route => {
		const item = getItem(route, parentKey)
		const subRoutes = route.children?.filter(item => item.meta?.isMenu)
		if (subRoutes?.length) {
			(item as any).children = getItems(subRoutes, (item as any).key, isMicro)
		}
		return item
	})
}

const menus = getItems(getSiderBarRoutes())

const microRouter = useMicroRouter()
const handleSelectMenu = async(meneItem: any) => {
	console.log(111, meneItem)
	microRouter.push((meneItem as any).key, meneItem?.item?.meta?.microName)
}

</script>
<style lang="scss">
@include b('AppSider') {
  background: var(--background-color) !important;
  color: var(--text-color) !important;

  @include e('menu') {
    height: 100%;
    border-right: 0;
    background: none;
    color: var(--text-color);

    .ant-menu-item-group-title {
      color: var(--text-color);

      &:hover {
        color: var(--text-color-hover);
      }
    }

    .ant-menu-item {
      &:hover {
        background: var(--background-hover);
        color: var(--text-color-hover);
      }

      &-selected {
        background: var(--background-active);
        color: var(--text-color-active);

        &:hover {
          background: var(--background-active);
          color: var(--text-color-active);
        }
      }

      &:not(&-selected):not(&-disabled):hover {
        color: var(--text-color-hover);
        background: var(--background-hover);
      }
    }

    .ant-menu-submenu {
      &-title {
        color: var(--text-color);

        &:hover:not(.ant-menu-item-selected):not(.ant-menu-submenu-selected) {
          color: var(--text-color-hover);
        }
      }
    }
  }
}
</style>
@/hooks/use-micro-router