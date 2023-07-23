import RoutesLayout from './routes/'
import createAppTheme from './theme/'
import { ThemeProvider, CssBaseline, Container } from '@mui/material'

const App = () => {
  const theme = createAppTheme('dark')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <RoutesLayout />
      </Container>
    </ThemeProvider>
  )
}

export default App
