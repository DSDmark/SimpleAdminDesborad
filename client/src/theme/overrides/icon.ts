import { Theme } from '@mui/material'

export default function Icon(theme: Theme) {
  return {
    MuiIcon: {
      styleOverrides: {
        root: {
          fontSize: 'small',
          color: theme.palette.primary.dark,
        },
      },
    },
  }
}
