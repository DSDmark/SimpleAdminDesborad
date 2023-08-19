// @mui
import { AppBar, Toolbar, styled } from '@mui/material'

// style
import { NAV_WIDTH, HEADER_MOBILE, HEADER_DESKTOP } from '@/style'

export const AppBarStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}))

export const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))
