import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client'
import { reactBridge } from '@garfish/bridge-react-v18';
import Error from './components/ErrorBoundary';
import { defineCustomElements } from '@innbell/ui/loader'
import RootComponent from './root';
import "./public-path"
import '@innbell/style'

defineCustomElements()

// 👇 将渲染操作放入 mount 函数，子应用初始化时会自动执行
window.mount = () => {
  ReactDOM.render(<RootComponent />, document.getElementById("react-sub-app"))
}

// 👇 将卸载操作放入 unmount 函数，就是上面步骤2中的卸载函数
window.unmount = () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("react-sub-app"))
}

// 如果不在微前端环境，则直接执行mount渲染
if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount()
}