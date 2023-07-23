import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, About, Login } from '@/pages'
import NotFound from './LazyRoute'
import { Footer, Header } from '@/components'
import { Suspense } from 'react'

const RoutesLayout = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={'loading...'}>
        <Header />
        <Routes>
          <Route element={<Home />}>
            <Route path='/home' />
            <Route path='/' />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  )
}

export default RoutesLayout
