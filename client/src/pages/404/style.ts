// @mui
import { styled } from '@mui/material'

export const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  textAlign: 'center',
  padding: theme.spacing(12, 0),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
}))
