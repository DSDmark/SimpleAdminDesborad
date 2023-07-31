import { IProps } from './type'
import { Grid as MuiGrid, Paper, styled } from '@mui/material/'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}))

const Grid = ({ children, data }: IProps<number>) => {
  return (
    <MuiGrid container spacing={2}>
      {Array.from(Array(data))?.map((_, index) => (
        <MuiGrid item key={index}>
          <Item>{children}</Item>
        </MuiGrid>
      ))}
    </MuiGrid>
  )
}

export default Grid
