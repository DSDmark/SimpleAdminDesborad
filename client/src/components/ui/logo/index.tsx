// @mui
import { Box } from '@mui/material'

// ui
import { RouterLink } from '..'

// data
import logoData from '@/contants/logo'

const Logo = () => {
  return (
    <RouterLink to={logoData.href}>
      <Box
        width='auto'
        height={80}
        component='img'
        src={logoData.src}
        alt={logoData.name}
      />
    </RouterLink>
  )
}

export default Logo
