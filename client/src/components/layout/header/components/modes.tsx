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

const Modes = () => {
  const [handleOpen, handleClose, open] = useAccountMenuToggle(null)
  return (
    <>
      <Box justifyContent='center' alignItems='center' display='flex'>
        <IconButton
          onClick={handleOpen}
          sx={{
            opacity: open ? 0.6 : 1,
            display: 'flex',
          }}>
          <LightMode color='primary' />
        </IconButton>
        <Popover open={Boolean(open)} anchorEl={open} onClose={handleClose}>
          <Box sx={{ my: 1.5, px: 2.5 }}>
            <Typography variant='subtitle2'>current mode</Typography>
            <Typography variant='body2' noWrap>
              LightMode
            </Typography>
          </Box>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack p={1}>
            <MenuItem onClick={handleClose}>LightMode</MenuItem>
            <Divider sx={{ borderStyle: 'dashed' }} />
            <MenuItem onClick={handleClose}>DarkMode</MenuItem>
          </Stack>
        </Popover>
      </Box>
    </>
  )
}

export default Modes
