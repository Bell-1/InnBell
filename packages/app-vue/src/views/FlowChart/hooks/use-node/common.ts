export const commonAttrs = {
	body: {
		fill: '#fff',
		stroke: '#8f8f8f',
		strokeWidth: 1,
	},
	label: {
		refX: 0.5,
		refY: '100%',
		refY2: 4,
		textAnchor: 'middle',
		textVerticalAnchor: 'top',
	},
}

export const commonPoints = {
	groups: {
		top: {
			position: 'top',
			attrs: {
				circle: {
					magnet: true,
					stroke: '#8f8f8f',
					r: 5,
				},
			},
			label: {
				position: 'top',
			},
		},
		bottom: {
			position: 'bottom',
			attrs: {
				circle: {
					magnet: true,
					stroke: '#8f8f8f',
					r: 5,
				},
			},
			label: {
				position: 'top',
			},
		},
	},
}

// 删除工具
export const removeTool = {
	name: 'button-remove',
}

// 顶点工具
export const verticesTool = {
	name: 'vertices',
}

// 线段工具
export const segmentsTool = {
	name: 'segments',
}

export const commonNodeTools = [removeTool]
export const commonEdgeTools = [removeTool, verticesTool, segmentsTool]