<template>
	<layout-header :class="[ns.b(), theme]">
		<div :class="ns.e('left')">
			<div :class="ns.e('logo')">INNBELL</div>
		</div>
		<div :class="ns.e('content')"></div>
		<div :class="ns.e('right')">
			<theme-switch :theme="theme" @change="changeTheme"></theme-switch>

			<a 
				:class="ns.e('github-corner')"
				href="https://github.com/Bell-1/innbell"
				target="_blank"
			>
				<github-corner-svg></github-corner-svg>
			</a>

			<a-dropdown :class="ns.e('setting-dropdown')" trigger="click">
				<div :class="ns.e('user')" @click.prevent>
					{{ user?.username[0] }}
				</div>
				<template #overlay>
					<a-menu>
						<a-menu-item>
							<a href="javascript:;">{{ user?.username }}</a>
						</a-menu-item>
						<a-menu-item>
							<a href="javascript:;">Log out</a>
						</a-menu-item>
					</a-menu>
				</template>
			</a-dropdown>
		</div>
	</layout-header>
</template>
<script lang="ts">
export default {
	name: 'AppHeader',
}
</script>
<script lang="ts" setup>
import { toRefs } from 'vue'
import ThemeSwitch from '@/components/ThemeSwitch/index.vue'
import { useNamespace } from '@innbell/utils'
import { useUserStore } from '@/store/user'
import { LayoutHeader, Dropdown as ADropdown, Menu as AMenu, MenuItem as AMenuItem } from 'ant-design-vue'
import { useGlobalStore } from '@/store/global'
import githubCornerSvg from '@innbell/common-assets/svg/github-corner.svg'

// useNamespace
const ns = useNamespace('app-header')

// 
const globalStore = useGlobalStore()
const { theme, changeTheme } = toRefs(globalStore)

// user store
const userSore = useUserStore()
const { user } = toRefs(userSore)

</script>
<style lang="scss">
@include b('app-header') {
	position: relative;
  position: relative;
  padding: 0 $padding-s;
  height: 60px;
  display: flex;
  align-items: center;
  color: var(--text-color) !important;
  background: var(--background-color) !important;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1);
  z-index: 100;

  @include e('left') {
    height: 100%;

    @include e('logo') {
      height: 100%;
      width: 148px;
      font-size: $font-size-large;
      color: #ab8fff;
    }
  }

  @include e('content') {
    flex: 1;
  }

  @include e('right') {
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: var(--text-color, $text-color);

    &>* {
      margin-left: $margin-s;
    }

		@include e('github-corner'){
			&:hover .octo-arm {
				-webkit-animation: octocat-wave .56s ease-in-out;
				animation: octocat-wave .56s ease-in-out;
			}

			svg {
				position: fixed;
				top: 0;
				right: 0;
				width: 64px;
				height: 64px;
				fill: #ffa629;
				color: white;
			}

			@keyframes octocat-wave {
				0%, 100% {
					transform: rotate(0);
				}
				20%, 60% {
					transform: rotate(-25deg);
				}
				40%, 80% {
					transform: rotate(10deg);
				}
			}
		}

    @include e('user') {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid $border-color;
      background: #eee;
      text-transform: uppercase;
    }
  }
}
</style>