<template>
	<div :class="ns.b()">
		<div :class="ns.e('left')">
			<Space.Compact>
				<a-input v-model:value="val">
					<a-button type="primary" @click="handleAddNode">
						Add Node
					</a-button>
				</a-input>
			</Space.Compact>
			<div class="show-list">
				<div class="flex start">
					<label for="">输入顺序</label>
					<p>{{ nodeList }}</p>
				</div>
				<div class="flex start">
					<label for="">深度</label>
					<p>{{ depth }}</p>
				</div>
				<div class="flex start">
					<label for="">先序遍历</label>
					<p>{{ preListRec }}</p>
				</div>
				<div class="flex start">
					<label for="">后序遍历</label>
					<p>{{ postListRec }}</p>
				</div>
				<div class="flex start">
					<label for="">广度遍历</label>
					<p>{{ breadthList }}</p>
				</div>
			</div>
		</div>
		<div :class="ns.e('right')">
			<textarea
				:class="ns.e('textarea')"
				cols="30"
				rows="10"
				:value="nodeTreeStr"
			/>
		</div>
	</div>
</template>

<script lang="ts">
export default {
	name: 'BinaryTree',
}
</script>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Space, Input as AInput, Button as AButton, message } from 'ant-design-vue'
import { useNamespace } from '@innbell/utils'

const ns = useNamespace('BinaryTree')
const [messageApi] = message.useMessage();

type TreeNode = {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
};

function createNode(val: number): TreeNode {
	return {
		val,
		left: null,
		right: null,
	};
}

function insetNode(node: TreeNode, newNode: TreeNode, nodeList: number[]): void {
	if (newNode.val < node.val) {
		if (node.left === null) {
			node.left = newNode;
			nodeList.push(newNode.val);
		} else {
			insetNode(node.left, newNode, nodeList);
		}
	} else if (newNode.val > node.val) {
		if (node.right === null) {
			node.right = newNode;
			nodeList.push(newNode.val);
		} else {
			insetNode(node.right, newNode, nodeList);
		}
	} else {
		messageApi.warning(newNode.val + '值已存在');
	}
}

function preOrderRec(node: TreeNode | null, preListRec: number[]): void {
	if (node) {
		preListRec.push(node.val);
		preOrderRec(node.left, preListRec);
		preOrderRec(node.right, preListRec);
	}
}

function postOrderRec(node: TreeNode | null, postListRec: number[]): void {
	if (node) {
		postOrderRec(node.left, postListRec);
		postOrderRec(node.right, postListRec);
		postListRec.push(node.val);
	}
}

function breadthTraversal(node: TreeNode | null): void {
	let list: any = [];
	if (node) {
		let que = [node];
		while (que.length) {
			let nowNode = que.shift();
			nowNode && list.push(nowNode.val);
			if (nowNode?.left) que.push(nowNode.left);
			if (nowNode?.right) que.push(nowNode.right);
		}
	}
	breadthList.value = list;
}

function calcDepth(node: TreeNode | null): number {
	if (!node) return 0;
	return Math.max(calcDepth(node?.left), calcDepth(node.right)) + 1;
}

const val = ref(123);
const depth = ref(0);
const nodeTree = ref<TreeNode | null>(null);
const nodeList = ref<number[]>([]);
const preListRec = ref<number[]>([]);
const postListRec = ref<number[]>([]);
const breadthList = ref<number[]>([]);

const nodeTreeStr = computed(() => JSON.stringify(nodeTree.value, null, 4));

function handleAddNode(): void {
	if (val.value >= 0) {
		addNode(val.value);
	}
}

function addNode(val: number): void {
	let { value: nodeTreeValue } = nodeTree;
	let node: TreeNode = createNode(val);
	if (nodeTreeValue === null) {
		nodeTree.value = node;
		nodeList.value.push(val);
	} else {
		insetNode(nodeTreeValue, node, nodeList.value);
		preListRec.value = [];
		postListRec.value = [];
		breadthList.value = [];
		preOrderRec(nodeTreeValue, preListRec.value);
		postOrderRec(nodeTreeValue, postListRec.value);
		breadthTraversal(nodeTreeValue);
	}
	depth.value = calcDepth(nodeTree.value);
}
</script>

<style lang="scss">
@include b('BinaryTree') {
	display: flex;
	// align-items: stretch;

	@include e('left') {
		padding: $padding-s;
		flex: 1;
	}

	@include e('right') {
		padding: $padding-s;
		flex: 1;

		@include e('textarea') {
			width: 100%;
			height: 100%;
			padding: $padding-s;
			box-shadow: inset 4px 4px 6px rgba(148, 148, 148, 0.5),
				inset -4px -4px 6px rgba(231, 236, 236, 0.8);
			border-radius: 4px;
			border: none;
		}
	}

	.add {
		width: 150px;
		margin: 20px 0;
	}

	textarea {
		min-height: 200px !important;
	}

	.show-list {
		padding: 10px 20px;
		margin-top: 30px;
		box-shadow: inset 4px 4px 6px rgba(148, 148, 148, 0.5),
			inset -4px -4px 6px rgba(231, 236, 236, 0.8);
		border-radius: 4px;

		label {
			margin-right: 20px;
		}
	}
}
</style>