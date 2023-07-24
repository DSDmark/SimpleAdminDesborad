import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@/components/ui/button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography sx={{ flexGrow: 1 }}>SAD</Typography>
        <Button>Sign Up</Button>
        <Button>Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
