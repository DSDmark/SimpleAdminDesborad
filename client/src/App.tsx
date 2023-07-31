import RoutesLayout from './routes/'
import ThemeProvider from './theme'

const App = () => {
  return (
    <ThemeProvider preferredTheme={'dark'}>
      <RoutesLayout />
    </ThemeProvider>
  )
}

export default App
