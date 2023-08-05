import { Theme } from '@mui/material'
import Typography from './typography'
import Link from './link'
import Popover from './popover'
import Button from './button'
import Tooltip from './tooltip'

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    Typography(theme),
    Link(),
    Button(theme),
    Tooltip(theme),
    Popover(),
  )
}
