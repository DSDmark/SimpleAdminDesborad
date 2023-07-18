import { ThemeProvider, CssBaseline, Container } from '@mui/material'
import { createAppTheme } from '@/global/'
import { IChildren } from '@/global'

const MainLayout = ({ children }: IChildren) => {
  const theme = createAppTheme('light')
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default MainLayout
