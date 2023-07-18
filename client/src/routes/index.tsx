import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, About, NotFound, Login } from '@/pages'
import { Footer, Header } from '@/components'

const RoutesLayout = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  )
}

export default RoutesLayout
