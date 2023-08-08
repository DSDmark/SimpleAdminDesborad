import { BoxProps } from '@mui/material'
import { MouseEvent } from 'react'

// useAccountMenuToggle hook
export type HandleOpen = (e: MouseEvent<HTMLButtonElement>) => void
export type HandleClose = () => void
export type OpenState = HTMLButtonElement | null

// nav-section
export interface INavData {
  title: string
  path: string
}

export interface INavDataProps {
  data: INavData[]
  other: BoxProps
}
