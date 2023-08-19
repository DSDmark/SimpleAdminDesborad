// @mui

import {
  Typography,
  Divider,
  Stack,
  Link as MuiLink,
  Container,
  Button,
  Box,
} from '@mui/material'

// routes
import { Link as RouterLink } from 'react-router-dom'

// hook
import { useSiteTitle, useResponsive, useNProgress } from '@/hooks'

// styles
import { RootStyle, SectionStyle, ContentStyle } from '../style'

// contants
import logo from '@/contants/logo'
import { Facebook, GitHub, Google } from '@mui/icons-material'

// component
import LoginForm from './loginForm'

const Login = () => {
  const isMobile = useResponsive('up', 'md')
  useNProgress()

  useSiteTitle('Login !')

  return (
    <RootStyle>
      {isMobile && (
        <SectionStyle>
          <Typography variant='h3' px={5} mb={5}>
            Hi Welcome here!
          </Typography>
          <Box
            component='img'
            src='/assets/illustrations/illustration_login.png'
            alt='login'
          />
        </SectionStyle>
      )}
      <Container maxWidth='sm'>
        <ContentStyle>
          <Typography variant='h4' gutterBottom>
            sign in to {logo.name}
          </Typography>
          <Typography variant='body2' mb={5}>
            don't have an account?{' '}
            <MuiLink component={RouterLink} to='/register' variant='subtitle2'>
              register
            </MuiLink>
          </Typography>
          <Stack direction='row' spacing={2}>
            <Button fullWidth variant='outlined' size='large' color='inherit'>
              <Google color='error' />
            </Button>
            <Button fullWidth size='large' color='inherit' variant='outlined'>
              <Facebook color='primary' />
            </Button>
            <Button fullWidth color='inherit' size='large' variant='outlined'>
              <GitHub sx={{ color: 'grey' }} />
            </Button>
          </Stack>
          <Divider sx={{ my: 3 }}>
            <Typography variant='body2' sx={{ color: 'text.secondary' }}>
              OR
            </Typography>
          </Divider>
          <LoginForm />
        </ContentStyle>
      </Container>
    </RootStyle>
  )
}

export default Login
