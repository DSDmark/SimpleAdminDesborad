import apiSlicer from '@/services'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import modesReducer from './modes'

export const store = configureStore({
  reducer: {
    modes: modesReducer,
    // [apiSlicer.reducerPath]: apiSlicer.reducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware().concat(apiSlicer.middleware),
})

// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
