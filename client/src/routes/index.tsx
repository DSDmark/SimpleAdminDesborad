// routes
import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import NotFound from './LazyRoute'

// pages
import { DetailPenal, Login, Register } from '@/pages'

// components
import 'nprogress/nprogress.css' // Import nprogress styles

// hooks
import { useNProgress, useSrcollTop } from '@/hooks'
import DasboardLayout from '@/layout/dasboard'

const RoutesLayout = () => {
  const ScrollTop = () => useSrcollTop()
  const SlimProgressBar = () => useNProgress()

  const Routes = () =>
    useRoutes([
      {
        path: '/dasboard',
        element: <DasboardLayout />,
        children: [
          { element: <Navigate to='/dasboard/detail-penal' />, index: true },
          { path: '/dasboard/detail-penal', element: <DetailPenal /> },
          { path: '/dasboard/user-details', element: 'user details section' },
          { path: '/dasboard/products', element: 'product details section' },
        ],
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      { path: '*', element: <NotFound /> },
    ])

  return (
    <BrowserRouter>
      <ScrollTop />
      <SlimProgressBar />
      <Routes />
    </BrowserRouter>
  )
}

export default RoutesLayout
