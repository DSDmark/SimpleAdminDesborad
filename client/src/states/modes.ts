import { createSlice } from '@reduxjs/toolkit'

export interface IModes {
  preferredTheme: 'dark' | 'light'
}

const initialState: IModes = {
  preferredTheme: 'light',
}

export const modeSlice = createSlice({
  name: 'modes',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.preferredTheme = action.payload
    },
  },
})

export const { setMode } = modeSlice.actions
export default modeSlice.reducer
