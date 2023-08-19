// components
import { SiderNav, Header } from '@/components'

// routes
import { Outlet } from 'react-router-dom'

// styles
import { DivStyle, MainStyle } from './style'

export default function DasboardLayout() {
  return (
    <DivStyle>
      <Header />
      <SiderNav />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </DivStyle>
  )
}
