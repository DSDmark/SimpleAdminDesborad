import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@/components/ui/button'
import Grid from '@/components/ui/grid'

const NavBar = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Grid data={2}>
          <Typography sx={{ flexGrow: 1 }}>SAD</Typography>
          <Button>Sign Up</Button>
          <Button>Login</Button>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
