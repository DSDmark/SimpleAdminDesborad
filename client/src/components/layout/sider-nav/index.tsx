// @mui
import {
  Box,
  Drawer,
  Typography,
  Avatar,
  Stack,
  Button,
  DrawerProps,
  Link,
} from '@mui/material'

// contants data
import account from '@/contants/account'
import logo from '@/contants/logo'

// styles
import { StyledAccount } from './style'
import { NAV_WIDTH } from '@/style'

// ui
import { RouterLink } from '@/components'

// global hooks
import useResponsiveQuery from '@/hooks/useResponsive'
import { NavLink } from './components/'

// data
import navConfig from './data/navData'

const SiderNav = () => {
  const isDesktop: boolean = useResponsiveQuery('up', 'lg')
  const DrawerContent = (
    <Box>
      <Box
        component={RouterLink}
        to={logo.href}
        sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        {logo.name}
      </Box>
      <Box sx={{ mb: 5, mx: 2.5 }}>
        <Link underline='none'>
          <StyledAccount>
            <Avatar src={account.photoURL} alt='photoURL' />

            <Box sx={{ ml: 2 }}>
              <Typography variant='subtitle2' sx={{ color: 'text.primary' }}>
                {account.displayName}
              </Typography>

              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                admin
              </Typography>
            </Box>
          </StyledAccount>
        </Link>
      </Box>

      <NavLink data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: '100%' }}>
        <Stack
          alignItems='center'
          spacing={3}
          sx={{ pt: 5, borderRadius: 2, position: 'relative' }}>
          <Box
            component='img'
            src='/assets/illustrations/illustration_avatar.png'
            sx={{ width: 100, position: 'absolute', top: -50 }}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Typography gutterBottom variant='h6'>
              Get more?
            </Typography>

            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              get source code
            </Typography>
          </Box>
          <Button href='#' target='_blank' variant='contained'>
            go to github
          </Button>
        </Stack>
      </Box>
    </Box>
  )

  const drawerProps: DrawerProps = {
    PaperProps: {
      sx: {
        width: NAV_WIDTH,
        ...(isDesktop
          ? {
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            }
          : {}),
      },
    },
    ...(isDesktop
      ? {
          variant: 'permanent',
          open: true,
        }
      : {}),
  }

  return (
    <Box component='nav' sx={{ width: { lg: NAV_WIDTH } }}>
      <Drawer {...drawerProps}>{DrawerContent}</Drawer>
    </Box>
  )
}

export default SiderNav
