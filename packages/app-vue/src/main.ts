import { createApp, h } from 'vue';
import { vueBridge } from '@garfish/bridge-vue-v3';
import App from './App.vue';
import { newRouter } from '@src/router'
import '@innbell/types'

export const provider = vueBridge({
  rootComponent: App,
  // 可选，注册 vue-router或状态管理对象
  appOptions: ({ basename, dom, appName, props }) => ({
    el: "#app",
    render: () => h(App),
    router: newRouter(basename),
  }),
  handleInstance(vueInstance, { basename }){
    vueInstance.use(newRouter(basename))
  }
});


console.log('vue is micro', window.__GARFISH__)

if (!window.__GARFISH__) {
  // 非微前端环境直接运行
  const vueInstance = createApp(App);
  vueInstance.use(newRouter())
  vueInstance.mount(document.querySelector('#app'));
}