import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'
import { innbellPlugin } from '@/components/innbellPlugin'
// component
import App from './App.vue'
// micro app
import '@/micro'
// iconfont
import '@innbell/common-assets/font/iconfont.css'
// style
import 'normalize.css'

// 创建app并挂载
const app = createApp(App)

// stencil components
app.use(innbellPlugin)

// antd
// app.use(Antd)

// store
app.use(store)

// router
app.use(router)

// mount
app.mount('#app')
