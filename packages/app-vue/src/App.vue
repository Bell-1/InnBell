<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const {push} = useRouter()
function changeRoute(path: string){
  push(path)
}
console.log(11, useRoute().path)
</script>

<template>
  <div class="vue-app">
    <ul class="menu">
      <li @click="changeRoute('/home')">home</li>
      <li @click="changeRoute('/page1')">page1</li>
      <li @click="changeRoute('/page2')">page2</li>
    </ul>
    <router-view></router-view>
    <div class="">动态更新</div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
