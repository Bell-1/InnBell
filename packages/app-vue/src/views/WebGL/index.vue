<template>
	<div :class="[ns.b()]">
		<div :class="ns.e('title')">WEBGL TEST</div>
		<canvas ref="webglRef" width="500" height="500">你的浏览器似乎不支持或者禁用了 HTML5 <code>&lt;canvas&gt;</code> 元素。</canvas>
	</div>
</template>
<script lang="ts">
export default {
	name: 'WebGL',
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useNamespace } from '@innbell/utils'
import { initBuffers } from './initBuffers'
import { drawScene } from './drawScene'

const ns = useNamespace('WebGL')
const webglRef = ref<HTMLCanvasElement>()

const positions = [
	// Front face
	-1.0,
	-1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	1.0,

	// Back face
	-1.0,
	-1.0,
	-1.0,
	-1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	-1.0,
	-1.0,

	// Top face
	-1.0,
	1.0,
	-1.0,
	-1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	-1.0,

	// Bottom face
	-1.0,
	-1.0,
	-1.0,
	1.0,
	-1.0,
	-1.0,
	1.0,
	-1.0,
	1.0,
	-1.0,
	-1.0,
	1.0,

	// Right face
	1.0,
	-1.0,
	-1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	1.0,
	1.0,
	-1.0,
	1.0,

	// Left face
	-1.0,
	-1.0,
	-1.0,
	-1.0,
	-1.0,
	1.0,
	-1.0,
	1.0,
	1.0,
	-1.0,
	1.0,
	-1.0,
];

const faceColors = [
	[1.0, 1.0, 1.0, 1.0], // Front face: white
	[1.0, 0.0, 0.0, 1.0], // Back face: red
	[0.0, 1.0, 0.0, 1.0], // Top face: green
	[0.0, 0.0, 1.0, 1.0], // Bottom face: blue
	[1.0, 1.0, 0.0, 1.0], // Right face: yellow
	[1.0, 0.0, 1.0, 1.0], // Left face: purple
];

// Vertex shader program

const vsSource = `
	attribute vec4 aVertexPosition;
	attribute vec4 aVertexColor;

	uniform mat4 uModelViewMatrix;
	uniform mat4 uProjectionMatrix;

	varying lowp vec4 vColor;

	void main() {
		gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
		vColor = aVertexColor;
	}
`;

const fsSource = `
	varying lowp vec4 vColor;

	void main() {
		gl_FragColor = vColor;
	}
`;

var squareRotation = 0.0;

//  初始化着色器程序，让 WebGL 知道如何绘制我们的数据
function initShaderProgram(gl, vsSource, fsSource) {
	const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
	const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

	// 创建着色器程序

	const shaderProgram = gl.createProgram();
	gl.attachShader(shaderProgram, vertexShader);
	gl.attachShader(shaderProgram, fragmentShader);
	gl.linkProgram(shaderProgram);

	// 如果创建失败，alert
	if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
		alert(
			'Unable to initialize the shader program: ' +
        gl.getProgramInfoLog(shaderProgram),
		);
		return null;
	}

	return shaderProgram;
}

// 创建指定类型的着色器，上传 source 源码并编译
//
function loadShader(gl, type, source) {
	const shader = gl.createShader(type);

	// Send the source to the shader object

	gl.shaderSource(shader, source);

	// Compile the shader program

	gl.compileShader(shader);

	// See if it compiled successfully

	if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(
			'An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader),
		);
		gl.deleteShader(shader);
		return null;
	}

	return shader;
}

function init(){
	if(!webglRef.value) return
	const gl = webglRef.value.getContext('webgl')
	if(!gl) return console.log('无法初始化webgl')

	const shaderProgram = initShaderProgram(gl, vsSource, fsSource);

	const programInfo = {
		program: shaderProgram,
		attribLocations: {
			vertexPosition: gl.getAttribLocation(shaderProgram, 'aVertexPosition'),
			vertexColor: gl.getAttribLocation(shaderProgram, 'aVertexColor'),
		},
		uniformLocations: {
			projectionMatrix: gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
			modelViewMatrix: gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
		},
		
	};

	// Here's where we call the routine that builds all the
	// objects we'll be drawing.
	const buffers = initBuffers(gl);

	let squareRotation = 0.0;
	let cubeRotation = 0.0
	let deltaTime = 0;
	var then = 0;

	// Draw the scene repeatedly
	function render(now) {
		now *= 0.001; // convert to seconds
		const deltaTime = now - then;
		then = now;

		drawScene(gl, programInfo, buffers, cubeRotation);
		cubeRotation += deltaTime;

		requestAnimationFrame(render);
	}
	requestAnimationFrame(render);
}

onMounted(() => {
	init()
})

</script>

<style lang="scss">
@include b('WebGL'){
  
}
</style>