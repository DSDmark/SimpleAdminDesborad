// @mui
import { Breakpoint, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export type Responsive = (
  query: string,
  start: Breakpoint,
  end?: Breakpoint,
) => boolean

const useResponsiveQuery: Responsive = (query, start, end) => {
  const theme = useTheme()

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start))

  if (query === 'up') {
    const mediaUp = useMediaQuery(theme.breakpoints.up(start))
    return mediaUp
  }
  if (query === 'down') {
    const mediaDown = useMediaQuery(theme.breakpoints.down(start))
    return mediaDown
  }
  if (query === 'between') {
    const mediaBetween = end
      ? useMediaQuery(theme.breakpoints.between(start, end))
      : false
    return mediaBetween
  }
  return mediaOnly
}

export default useResponsiveQuery
