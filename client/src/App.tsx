// routers
import RoutesLayout from './routes/'

// providers
import { Provider } from 'react-redux'

// redux store
import { store } from './states/'

const App = () => {
  return (
    <Provider store={store}>
      <RoutesLayout />
    </Provider>
  )
}

export default App
