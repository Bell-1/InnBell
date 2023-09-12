<template>
	<template v-for="item of list" :key="item.title">
		<a-col
			:xs="24"
			:sm="24"
			:md="12"
			:lg="6"
			:xl="6"
		>
			<a-card shadow="never" :title="item.title">
				<div class="count">
					{{ item.value }}
				</div>
			</a-card>
		</a-col>
	</template>
</template>
<script lang="ts">
export default {
	name: 'StatisticRow',
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useScrollNumber } from '@innbell/utils'

const { scrollNumber } = useScrollNumber()

type Item = { title: string; value: number }
const list = ref<Item[]>([
	{ title: '今日访问量', value: 0 },
	{ title: '昨日访问量', value: 0 },
	{ title: '本周访问量', value: 0 },
	{ title: '本月访问量', value: 0 },
])

function random() {
	return ~~Math.round(Math.random() * 1000)
}

list.value.forEach((item) => {
	scrollNumber(item.value, random(), (num: number) => item.value = ~~num)
})

</script>

<style lang="scss" scoped>
.count {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	font-size: large;
}
</style>