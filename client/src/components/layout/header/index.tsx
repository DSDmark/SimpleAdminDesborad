// @mui
import { IconButton, Box, Stack } from '@mui/material'
import { Menu } from '@mui/icons-material'

// style
import { AppBarStyle, ToolbarStyle } from './style'
import { AccountPopover, Modes } from './components'

const Header = () => {
  return (
    <AppBarStyle>
      <ToolbarStyle>
        <IconButton sx={{ mr: 1, color: 'text.primary' }}>
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack direction='row-reverse' gap={2}>
          <AccountPopover />
          <Modes />
        </Stack>
      </ToolbarStyle>
    </AppBarStyle>
  )
}

export default Header
