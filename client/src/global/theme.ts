import {
  createTheme,
  Theme,
  responsiveFontSizes,
  PaletteMode,
} from '@mui/material'
import { grey, blueGrey } from '@mui/material/colors'

const darkModeTheme = {
  primary: {
    main: grey[500],
    dark: blueGrey[700],
  },
}

const lightModeTheme = {
  primary: {
    main: grey[500],
    dark: blueGrey[700],
  },
}

const createAppTheme = (preferredTheme: PaletteMode) => {
  const theme: Theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            textTransform: 'capitalize',
          },
        },
      },
      MuiGrid: {
        styleOverrides: {
          root: {
            placeItems: 'center',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: 'none',
          },
        },
      },
    },
    palette: {
      mode: preferredTheme,
      ...(preferredTheme === 'dark' ? darkModeTheme : lightModeTheme),
    },
  })
  return responsiveFontSizes(theme)
}

export default createAppTheme
