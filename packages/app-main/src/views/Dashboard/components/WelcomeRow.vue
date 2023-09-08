<template>
	<a-col
		:class="ns.b()"
		:lg="24"
		:md="24"
		:sm="24"
		:xl="24"
		:xs="24">
		<a-card :class="ns.e('card')">
			<div :class="ns.e('container')">
				<div class="icon">
				</div>
				<div class="">
					<p :class="ns.e('title')">
						{{ getGreetings() }}
					</p>
					<a-alert message="这里是提示信息！" type="warning" />
				</div>
			</div>
			<div class=""></div>
		</a-card>
	</a-col>
</template>
<script lang="ts">
export default {
	name: 'WelcomeRow',
}
</script>

<script lang="ts" setup>
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('WelcomeRow')

function getGreetings() {
	const currentHour = new Date().getHours()
	if (currentHour < 5) {
		return '夜深了，请注意休息哦！';
	} else if (currentHour < 12) {
		return '早上好！祝你有一个美好的一天！';
	} else if (currentHour < 18) {
		return '下午好！希望你度过愉快的下午！';
	} else if (currentHour < 22) {
		return '晚上好！愿你晚上过得愉快！';
	} else {
		return '夜深了，请注意休息哦！';
	}
}

</script>

<style lang="scss">
@include b('WelcomeRow') {
	.ant-card {
		background: linear-gradient(to left, #e8e3ff, #8676cc);

	}

	@include e('container') {
		display: flex;
		align-items: center;

		.icon {
			margin-right: $padding-s;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 60px;
			height: 60px;
			background: $color-white;
			border-radius: 50%;
		}

	}

	@include e('title') {
		font-weight: $font-weight-bold;
		color: $color-white;
		font-size: $font-size-large;
	}
}
</style>