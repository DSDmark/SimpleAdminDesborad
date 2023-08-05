import { Theme } from '@mui/material'

export default function Button(theme: Theme) {
  const disabledStyled = {
    '&.Mui-disabled': {
      background: theme.palette.grey[200],
    },
  }

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          footWeight: 400,
        },
        contained: {
          ...disabledStyled,
        },
        outlined: {
          ...disabledStyled,
        },
      },
    },
  }
}
