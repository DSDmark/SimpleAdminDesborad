import { Typography } from '@mui/material'
import NavBar from './navbar'
import { Button } from '@/components'

const Header = () => {
  return (
    <div>
      <NavBar />
      <Typography>Header</Typography>
      <Button>hey</Button>
    </div>
  )
}

export default Header
