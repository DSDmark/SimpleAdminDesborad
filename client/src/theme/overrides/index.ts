import { Theme } from '@mui/material'
import Typography from './typography'
import Link from './link'
import Popover from './popover'
import Button from './button'
import Tooltip from './tooltip'
import SvgIcon from './svgIcon'
import CssBaseLine from './cssbaseline'
import Icon from './icon'

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    CssBaseLine(theme),
    Typography(theme),
    Link(),
    Button(theme),
    Tooltip(theme),
    Popover(),
    SvgIcon(),
    Icon(theme),
  )
}
