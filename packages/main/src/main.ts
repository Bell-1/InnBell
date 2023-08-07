// core
import Garfish from 'garfish';
import { createApp } from "vue"
import App from "@/App.vue"
import store from "@/store"
import router from "@/router"
import "@/router/permission"
// request 拦截处理
import '@/utils/request'
// load
import { loadSvg } from "@/icons"
import { loadPlugins } from "@/plugins"
import { loadDirectives } from "@/directives"
// css
import "uno.css"
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "vxe-table/lib/style.css"
import "vxe-table-plugin-element/dist/style.css"
import "@/styles/index.scss"

const app = createApp(App)

/** 加载插件 */
loadPlugins(app)
/** 加载全局 SVG */
loadSvg(app)
/** 加载自定义指令 */
loadDirectives(app)

app.use(store).use(router)
router.isReady().then(() => {
  app.mount("#app")
})



Garfish.run({
  basename: '/',
  domGetter: '#subApp',
  apps: [
    {
      name: 'vue',
      activeWhen: '/vue',
      sandbox: false,
      entry: 'http://localhost:3000', // js入口
    },
    // {
    //   name: 'react',
    //   activeWhen: '/react',
    //   entry: 'http://localhost:3001', // html入口
    // },
  ],
});

createApp(App).mount('#app')
