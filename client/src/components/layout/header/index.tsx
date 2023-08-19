// @mui
import { IconButton, Box, Stack } from '@mui/material'
import { Menu } from '@mui/icons-material'

// style
import { AppBarStyle, ToolbarStyle } from './style'
import { AccountPopover } from './components'

const Header = () => {
  return (
    <AppBarStyle>
      <ToolbarStyle>
        <IconButton sx={{ mr: 1, color: 'text.primary' }}>
          <Menu />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <Stack>
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </AppBarStyle>
  )
}

export default Header
