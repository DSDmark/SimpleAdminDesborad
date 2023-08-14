import { Theme } from '@mui/material'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      variant: 'contained',
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
          padding: theme.spacing(1, 2),
          color: 'white',
        },
        containedPrimary: {
          boxShadow: theme.shadows,
        },
      },
    },
  }
}
