import { alpha } from '@mui/material'
import { IColor } from '../types'

const withAlphas = (color: IColor) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
  }
}

export const neutral = {
  50: '#F8F9FA',
  100: '#F3F4F6',
  200: '#E5E7EB',
  300: '#D2D6DB',
  400: '#9DA4AE',
  500: '#6C737F',
  600: '#4D5761',
  700: '#2F3746',
  800: '#1C2536',
  900: '#111927',
}

export const indigo = withAlphas({
  light: '#EBEEFE',
  main: '#6366F1',
  dark: '#4338CA',
  contrastText: '#FFFFFF',
})

export const success = withAlphas({
  light: '#3FC79A',
  main: '#10B981',
  dark: '#0B815A',
  contrastText: '#FFFFFF',
})

export const info = withAlphas({
  light: '#CFF9FE',
  main: '#06AED4',
  dark: '#0E7090',
  contrastText: '#FFFFFF',
})

export const warning = withAlphas({
  light: '#FEF0C7',
  main: '#F79009',
  dark: '#B54708',
  contrastText: '#FFFFFF',
})

export const error = withAlphas({
  light: '#FEE4E2',
  main: '#F04438',
  dark: '#B42318',
  contrastText: '#FFFFFF',
})
