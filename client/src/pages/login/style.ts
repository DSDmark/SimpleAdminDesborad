// @mui
import { styled } from '@mui/material'

export const RootStyle = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

export const SectionStyle = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '480px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: theme.shadows,
  background: theme.palette.background.default,
}))

export const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))
