// route
import { Outlet } from 'react-router-dom'

// styles
import { HeaderStyle } from './style'

// compnonets
import { Logo } from '@/components/ui'
import { AccountPopover, Modes } from '@/components/layout/header/components'
import { Box } from '@mui/material'

const MinimalLayout = () => {
  return (
    <>
      <HeaderStyle>
        <Logo />
        <Box flexGrow={1} />
        <AccountPopover />
        <Modes />
      </HeaderStyle>
      <Outlet />
    </>
  )
}

export default MinimalLayout
