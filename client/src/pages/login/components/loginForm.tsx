import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// @mui
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from '@mui/material'
import { Close, RemoveRedEyeOutlined } from '@mui/icons-material'

const LoginForm = () => {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleClick = () => {
    navigate('/', { replace: true })
  }

  const EndAdornment = () => (
    <InputAdornment position='end'>
      <IconButton onClick={() => setShowPassword(!showPassword)} edge='end'>
        {showPassword ? <RemoveRedEyeOutlined /> : <Close />}
      </IconButton>
    </InputAdornment>
  )

  return (
    <>
      <Stack spacing={3}>
        <TextField name='mail' variant='outlined' label='email address' />
        <TextField
          name='password'
          label='password'
          type={showPassword ? 'text' : 'password'}
          InputProps={{ endAdornment: <EndAdornment /> }}
        />
      </Stack>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-between'
        sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox name='remember' aria-label='remember me' />}
          label='remember me'
        />

        <Link variant='subtitle2' underline='hover'>
          Forgot password?
        </Link>
      </Stack>
      <Button
        fullWidth
        size='large'
        type='submit'
        variant='contained'
        onClick={handleClick}>
        Login
      </Button>
    </>
  )
}

export default LoginForm
