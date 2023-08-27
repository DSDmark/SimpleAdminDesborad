// routers
import RoutesLayout from './routes/'

// providers
import ThemeProvider from './theme'
import { Provider } from 'react-redux'

// redux store
import { store } from './states/'

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RoutesLayout />
      </ThemeProvider>
    </Provider>
  )
}

export default App
