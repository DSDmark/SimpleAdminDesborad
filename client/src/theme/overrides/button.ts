import { Theme, alpha } from '@mui/material'

export default function Button(theme: Theme) {
  return {
    MuiButton: {
      variant: 'contained',
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette.grey[800],
          boxShadow: theme.shadows,
          '&:hover': {
            backgroundColor: theme.palette.grey[400],
          },
        },
        containedSecondary: {
          boxShadow: theme.shadows,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette.grey[500], 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      },
    },
  }
}
