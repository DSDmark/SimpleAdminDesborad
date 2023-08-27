// @mui
import { useMemo } from 'react'
import {
  createTheme,
  responsiveFontSizes,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
  ThemeOptions,
} from '@mui/material'

import breakpoints from './base/breakpoints'
import ComponentOverrides from './overrides'
import createPalette from './base/palette'
import { IThemeProvider } from './types'
import shadows from './base/shadows'

const ThemeProvider = ({
  children,
  preferredTheme = 'dark',
}: IThemeProvider) => {
  const refTheme = createPalette(preferredTheme)
  const { palette } = refTheme
  const customShadows = useMemo(() => shadows(refTheme), [refTheme])

  const themeOption: ThemeOptions = useMemo(
    () => ({
      breakpoints,
      palette,
      customShadows,
    }),
    [preferredTheme],
  )

  const theme = responsiveFontSizes(createTheme(themeOption))
  theme.components = ComponentOverrides(theme) // overridered components

  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
