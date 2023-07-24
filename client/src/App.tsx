import RoutesLayout from './routes/'
import createAppTheme from './theme/'
import { ThemeProvider, CssBaseline } from '@mui/material'

const App = () => {
  const theme = createAppTheme('light')

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesLayout />
    </ThemeProvider>
  )
}

export default App
