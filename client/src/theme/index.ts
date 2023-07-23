import { grey, blueGrey } from '@mui/material/colors'
import {
  createTheme,
  Theme,
  responsiveFontSizes,
  PaletteMode,
} from '@mui/material'

const createAppTheme = (preferredTheme: PaletteMode) => {
  let isDark = preferredTheme === 'dark' ? true : false

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
      primary: {
        main: grey[500],
        light: grey[500],
        dark: blueGrey[700],
      },
      background: {
        default: isDark ? grey[900] : grey[200],
      },
    },
  })
  return responsiveFontSizes(theme)
}

export default createAppTheme
