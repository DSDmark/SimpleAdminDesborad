import { useNProgress } from '@/hooks'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Register = () => {
  useNProgress()
  return (
    <div>
      Register
      <Button component={Link} to='/login'>
        login
      </Button>
    </div>
  )
}

export default Register
