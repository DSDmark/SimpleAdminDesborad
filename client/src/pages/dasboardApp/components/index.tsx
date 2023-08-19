import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const DasboardApp = () => {
  return (
    <div>
      DasboardApp
      <Button component={Link} to='/login'>
      </Button>
      login
    </div>
  )
}

export default DasboardApp
