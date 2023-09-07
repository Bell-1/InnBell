<template>
	<div ref="ThreeRef" :class="[ns.b()]">
	</div>
</template>
<script lang="ts">
export default {
	name: 'ThreeJS',
}
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useNamespace } from '@innbell/utils'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import SplineLoader from '@splinetool/loader';

const ns = useNamespace('ThreeJS')
const ThreeRef = ref<HTMLDivElement>()
const width = 800
const height = 600

onMounted(() => {
	// camera
	const camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2,  -50000, 10000);
	camera.position.set(0, 0, 0);
	camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

	// scene
	const scene = new THREE.Scene();

	// spline scene
	const loader = new SplineLoader();
	loader.load(
		'https://prod.spline.design/pM7jsEX4JkQqfPbf/scene.splinecode',
		(splineScene) => {
			scene.add(splineScene);
		},
	);

	// renderer
	const renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setAnimationLoop(animate);
	document.body.appendChild(renderer.domElement);

	// scene settings
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFShadowMap;

	scene.background = new THREE.Color('#ffd2d2');
	renderer.setClearAlpha(1);

	// orbit controls
	const controls = new OrbitControls(camera, renderer.domElement);
	controls.enableDamping = true;
	controls.dampingFactor = 0.125;

	window.addEventListener('resize', onWindowResize);
	function onWindowResize() {
		camera.left = window.innerWidth / - 2;
		camera.right = window.innerWidth / 2;
		camera.top = window.innerHeight / 2;
		camera.bottom = window.innerHeight / - 2;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function animate(time) {
		controls.update();
		renderer.render(scene, camera);
	}

})

</script>

<style lang="scss">
@include b('TreeJS'){
  
}
</style>