import { Theme } from '@mui/material'
import Typography from './typography'
import Link from './link'

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(Typography(theme), Link())
}
