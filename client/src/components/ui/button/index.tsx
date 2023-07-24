import { IChildren } from './type'
import { Button as MuiButton, ButtonProps } from '@mui/material'

const props: ButtonProps = {
  color: 'secondary',
  variant: 'outlined',
  size: 'large',
  sx: { ml: '2%' },
}

const Button = ({ children }: IChildren) => {
  return <MuiButton {...props}>{children}</MuiButton>
}

export default Button
