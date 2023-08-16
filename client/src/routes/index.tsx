// routes
import { BrowserRouter, useRoutes } from 'react-router-dom'
import NotFound from './LazyRoute'

// pages
import { DetailPenal, DasboardApp, Login, Register } from '@/pages'

// components
import { Header, Footer } from '@/components'

// hooks
import { useSrcollTop } from '@/hooks'

const RoutesLayout = () => {
  const ScrollTop = () => useSrcollTop()

  const Routes = () =>
    useRoutes([
      {
        path: '/dasboard',
        element: <DasboardApp />,
        children: [{ path: '/dasboard/app', element: <DetailPenal /> }],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/create-account',
        element: <Register />,
      },
      { path: '*', element: <NotFound /> },
    ])

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes />
    </BrowserRouter>
  )
}

export default RoutesLayout
