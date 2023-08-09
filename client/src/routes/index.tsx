// routes
import { BrowserRouter, useRoutes } from 'react-router-dom'
import NotFound from './LazyRoute'

// pages
import { Home, About, Login } from '@/pages'
import { Header } from '@/components'

// hooks
import { useSrcollTop } from '@/hooks'

const RoutesLayout = () => {
  const ScrollTop = () => useSrcollTop()

  const Routes = () =>
    useRoutes([
      {
        path: '/',
        element: <Header />,
        children: [
          { path: 'home', element: <Home /> },
          { path: 'abou', element: <About /> },
          { path: 'login', element: <Login /> },
        ],
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
