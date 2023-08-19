// @mui
import { styled } from '@mui/material'

// style
import { HEADER_MOBILE } from '@/style'

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
