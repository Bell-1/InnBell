const xAxisData = [];
const data1 = [];
const data2 = [];
const data3 = [];
const data4 = [];
for (let i = 0; i < 10; i++) {
	xAxisData.push('Class' + i);
	data1.push(+(Math.random() * 2).toFixed(2));
	data2.push(+(Math.random() * 5).toFixed(2));
	data3.push(+(Math.random() + 0.3).toFixed(2));
	data4.push(+Math.random().toFixed(2));
}
const emphasisStyle = {
	itemStyle: {
		shadowBlur: 10,
		shadowColor: 'rgba(0,0,0,0.3)',
	},
};
export const option = {
	legend: {
		data: ['bar', 'bar2', 'bar3', 'bar4'],
		left: '10%',
		top: 20,
	},
	toolbox: {
		feature: {
			magicType: {
				type: ['stack'],
			},
			dataView: {},
		},
	},
	tooltip: {},
	xAxis: {
		data: xAxisData,
		name: 'X Axis',
		axisLine: { onZero: true },
		splitLine: { show: false },
		splitArea: { show: false },
	},
	yAxis: {},
	grid: {
		bottom: 50,
	},
	series: [
		{
			name: 'bar',
			type: 'bar',
			stack: 'one',
			emphasis: emphasisStyle,
			data: data1,
		},
		{
			name: 'bar2',
			type: 'bar',
			stack: 'one',
			emphasis: emphasisStyle,
			data: data2,
		},
		{
			name: 'bar3',
			type: 'bar',
			stack: 'two',
			emphasis: emphasisStyle,
			data: data3,
		},
		{
			name: 'bar4',
			type: 'bar',
			stack: 'two',
			emphasis: emphasisStyle,
			data: data4,
		},
	],
};