import { Link } from 'react-router-dom'
import { styled } from '@mui/material'

const RouterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textDecoration: 'none',
  fontSize: '1.2rem',
  textAlign: 'center',
  fontWeight: 800,
}))

export default RouterLink
