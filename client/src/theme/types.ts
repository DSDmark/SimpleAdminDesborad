import { IChildren } from '@/types'

export type ThemeMode = 'dark' | 'light'

export interface IThemeProvider extends IChildren {
  preferredTheme: ThemeMode
}

export interface IColor {
  lightest: string
  light: string
  main: string
  dark: string
  darkest: string
  contrastText: string
}
