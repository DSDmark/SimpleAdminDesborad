// providers
import ThemeProvider from './theme'

// routers
import RoutesLayout from './routes/'

const App = () => {
  return (
    <ThemeProvider preferredTheme={'dark'}>
      <RoutesLayout />
    </ThemeProvider>
  )
}

export default App
