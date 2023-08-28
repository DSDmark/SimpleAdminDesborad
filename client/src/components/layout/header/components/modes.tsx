// @mui
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  IconButton,
  Popover,
} from '@mui/material'

// hook
import useAccountMenuToggle from '../hook/useAccountMenuToggle'
import { DarkMode, LightMode } from '@mui/icons-material'

// redux
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/states'
import { setMode } from '@/states/modes'

const Modes = () => {
  const [handleOpen, handleClose, open] = useAccountMenuToggle(null)
  const dispatch: AppDispatch = useDispatch()
  const preferredTheme = useSelector(
    (state: RootState) => state.modes.preferredTheme,
  )

  const handleMode = (mode: string) => {
    handleClose()
    dispatch(setMode(mode))
  }

  return (
    <>
      <Box justifyContent='center' alignItems='center' display='flex'>
        <IconButton
          onClick={handleOpen}
          sx={{
            opacity: open ? 0.6 : 1,
            display: 'flex',
          }}>
          {preferredTheme === 'light' ? (
            <LightMode color='primary' />
          ) : (
            <DarkMode color='primary' />
          )}
        </IconButton>
        <Popover open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant='subtitle2'>current mode</Typography>
            <Typography variant='body2' noWrap>
              {preferredTheme}
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack p={1}>
            <MenuItem onClick={() => handleMode('light')}>LightMode</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem onClick={() => handleMode('dark')}>DarkMode</MenuItem>
          </Stack>
        </Popover>
      </Box>
    </>
  )
}

export default Modes
