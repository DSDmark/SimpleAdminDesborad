// @mui
import { styled, alpha } from '@mui/material/styles'
import {
  Box,
  Link,
  Button,
  Drawer,
  Typography,
  Avatar,
  Stack,
  DrawerProps,
} from '@mui/material'

// contants data
import account from '@/contants/account'

// styles
import { NAV_WIDTH, StyledAccount } from '../style'

// global hooks
import useResponsiveQuery from '@/hooks/useResponsive'
import NavSection from './nav-section'

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
  },
  {
    title: 'user',
    path: '/dashboard/user',
  },
  {
    title: 'product',
    path: '/dashboard/products',
  },
  {
    title: 'blog',
    path: '/dashboard/blog',
  },
  {
    title: 'login',
    path: '/login',
  },
  {
    title: 'Not found',
    path: '/404',
  },
]

const NavDrawerComponent = () => {
  const isDesktop: boolean = useResponsiveQuery('up', 'lg')
  const DrawerContent = (
    <Box>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>DSDmark</Box>
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

      <NavSection data={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
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
              From only $69
            </Typography>
          </Box>

          <Button
            href='https://material-ui.com/store/items/minimal-dashboard/'
            target='_blank'
            variant='contained'>
            Upgrade to Pro
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

export default NavDrawerComponent
