import { Graph, Node, Shape, Edge } from '@antv/x6'
import { commonAttrs, commonPoints, commonNodeTools, commonEdgeTools } from './common'

Graph.registerNode(
	'custom-node-width-port',
	{
		inherit: 'rect',
		width: 100,
		height: 40,
		attrs: {
			body: {
				stroke: '#8f8f8f',
				strokeWidth: 1,
				fill: '#fff',
				rx: 6,
				ry: 6,
			},
		},
		ports: {
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
				right: {
					position: 'right',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
					label: {
						position: 'right',
					},
				},
				left: {
					position: 'left',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
					label: {
						position: 'left',
					},
				},
			},
			items: [
				{
					group: 'top',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
				},
				{
					group: 'right',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
				},
				{
					group: 'bottom',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
				},
				{
					group: 'left',
					attrs: {
						circle: {
							magnet: true,
							stroke: '#8f8f8f',
							r: 5,
						},
					},
				},
			],
		},
	},
	true,
)

function createRect(config: Node.Metadata = {}){
	const rect = new Shape.Rect({
		x: 280,
		y: 40,
		width: 80,
		height: 40,
		attrs: commonAttrs,
		tools: commonNodeTools,
		...config,
	})

	return rect
}

function createRectWithPoints(config: Node.Metadata = {}){
	return {
		shape: 'custom-node-width-port',
		tools: commonNodeTools,
		...config,
	}
}

function createTriangle(config: Node.Metadata = {}){
	return new Shape.Polyline({
		x: 0,
		y: 0,
		width: 40,
		height: 40,
		label: '三角形',
		attrs: {
			body: {
				...commonAttrs.body,
				// 三角形点位
				refPoints: '0,0 -10,10 10,10',
			},
			label: commonAttrs.label,
		},
		tools: commonNodeTools,
		...config,
	})

}

function createCircle(config: Node.Metadata = {}){
	return new Shape.Circle({
		x: 40,
		y: 40,
		width: 40,
		height: 40,
		attrs: commonAttrs,
		tools: commonNodeTools,
		...config,
	})
}

function createEllipse(config: Node.Metadata = {}){
	return new Shape.Ellipse({
		x: 40,
		y: 40,
		width: 60,
		height: 50,
		attrs: commonAttrs,
		tools: commonNodeTools,
		...config,
	})

}

function createPolygon(config: Node.Metadata = {}){
	return new Shape.Polygon({
		x: 60,
		y: 60,
		width: 40,
		height: 40,
		points: '100,10 40,198 190,78 10,78 160,198',
		attrs: commonAttrs,
		tools: commonNodeTools,
		...config,
	})
}

function createEdge(source: Edge.Properties, target: Edge.Properties){
	return new Shape.Edge({
		source,
		target,
		tools: {
			items: commonEdgeTools,
		},
	})
}

export function useNode(){
	return {
		createRect,
		createRectWithPoints,
		createCircle,
		createEllipse,
		createTriangle,
		createPolygon,
		createEdge,
	}
}