import { createBrowserRouter } from 'react-router-dom'
import PageNotFound from '@/views/NotFound'
import InnbellUI from '@/views/InnUI'

export const router = () => createBrowserRouter([
  {
    path: 'innbell-ui',
    element: <InnbellUI />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
], {
  basename: window.__MICRO_APP_BASE_ROUTE__ || '/',
})