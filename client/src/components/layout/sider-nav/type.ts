import { BoxProps } from '@mui/material'

// nav-section
export interface INavData {
  title: string
  path: string
  icon: any
}

export interface INavDataProps {
  data: INavData[]
  other?: BoxProps
}
