// @mui
import {
  AppBar,
  Toolbar,
  styled,
  ListItemIcon,
  alpha,
  Link as MuiLink,
} from '@mui/material'

// headerBar
export const NAV_WIDTH = 280
const HEADER_MOBILE = 64
const HEADER_DESKTOP = 92

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

// navBar
export const DivStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
})

export const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: HEADER_MOBILE + 24,
  [theme.breakpoints.up('lg')]: {
    paddingTop: HEADER_MOBILE + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}))

export const StyledAccount = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: alpha(theme.palette.grey[500], 0.12),
}))

// nav-section
export const StyledNavItem = styled(MuiLink)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}))

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
