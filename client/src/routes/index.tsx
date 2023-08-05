import { Suspense } from 'react'

// routes
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import NotFound from './LazyRoute'

// pages
import { Home, About, Login } from '@/pages'
import { Header } from '@/components'

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading...'}>
        <Header/>
        <Routes>
          <Route element={<Home />}>
            <Route path='/home' />
            <Route path='/' />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default RoutesLayout
