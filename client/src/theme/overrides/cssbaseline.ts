import { Theme } from '@mui/material'

export default function CssBaseLine(theme: Theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          textTransform: 'capitalize',
        },
        // nprogress bar (slim top bar) styling
        '#nprogress': {
          pointerEvent: 'none',
        },
        '#nprogress .bar': {
          backgroundColor: theme.palette.primary.main,
          boxShadow: theme.shadows,
          height: 5,
          left: 0,
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 2000,
        },
      },
    },
  }
}
