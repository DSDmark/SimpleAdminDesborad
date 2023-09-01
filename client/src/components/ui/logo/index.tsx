// @mui
import { Box } from '@mui/material'

// ui
import { RouterLink } from '..'

// data
import logoData from '@/contants/logo'

const Logo = () => {
  return (
    <Box component={RouterLink} to={logoData.href}>
      <img width='auto' height={100} src={logoData.src} alt={logoData.name} />
    </Box>
  )
}

export default Logo
