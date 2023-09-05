import type { AppInfo } from '@garfish/bridge-react-v18';

import { ConfigProvider } from '@arco-design/web-react';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/router/index.tsx'

export const prefixCls = 'sub-app-react18';

const RootComponent = ({ basename }: AppInfo) => {
  console.log(222, window.__MICRO_APP_BASE_ROUTE__)
  return (
    <ConfigProvider prefixCls={prefixCls}>
      <RouterProvider router={router({ basename })}></RouterProvider>
      {/* <BrowserRouter basename={appInfo.basename}>{routes}</BrowserRouter> */}
    </ConfigProvider>
  );
};

export default RootComponent;