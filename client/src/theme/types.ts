import { IChildren } from '@/types'

export type ThemeMode = 'dark' | 'light'

export interface IThemeProvider extends IChildren {
  preferredTheme: ThemeMode
}

export interface IColor {
  light: string
  main: string
  dark: string
  contrastText: string
}
