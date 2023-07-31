import { Typography } from '@mui/material'
import NavBar from './navbar'
import { Button } from '@/components'
import { Link } from '@mui/material'

const Header = () => {
  return (
    <div>
      <NavBar />
      <Typography>Header</Typography>
      <Button>"hey</Button>
      <Link> sdf</Link>
    </div>
  )
}

export default Header
