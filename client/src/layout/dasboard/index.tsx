import { useState } from 'react'

// components
import { SiderNav, Header } from '@/components'

// routes
import { Outlet } from 'react-router-dom'

// styles
import { DivStyle, MainStyle } from './style'

export default function DasboardLayout() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <DivStyle>
      <Header onToggle={() => setOpen(prev => !prev)} />
      <SiderNav open={open} onClose={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </DivStyle>
  )
}
