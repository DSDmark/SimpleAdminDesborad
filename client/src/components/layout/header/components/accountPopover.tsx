// @mui
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
} from '@mui/material'

// data
import account from '@/contants/account'

// hook
import useAccountMenuToggle from '../hook/useAccountMenuToggle'
import { uuid } from '@/utils'

const MEMU_OPTION = ['Home', 'loggout', 'login']

const AccountPopover = () => {
  const [handleOpen, handleClose, open] = useAccountMenuToggle(null)

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          opacity: open ? 0.6 : 1,
        }}>
        <Avatar src={account.photoURL} />
      </IconButton>
      <Popover open={Boolean(open)} anchorEl={open} onClose={handleClose}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant='subtitle2'>{account.displayName}</Typography>
          <Typography variant='body2' noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack p={1}>
          {MEMU_OPTION.map(option => (
            <MenuItem key={uuid()} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
        </Stack>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={handleClose} sx={{ m: 1 }}>
          Logout
        </MenuItem>
      </Popover>
    </>
  )
}

export default AccountPopover
