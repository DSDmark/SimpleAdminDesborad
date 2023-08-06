// @mui
import { Box, List, ListItemText } from '@mui/material'

// routes
import { NavLink as RouterLink } from 'react-router-dom'

// styles
import { StyledNavItem } from '../style'

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map(item => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  )
}

function NavItem(item) {
  const { title, path, info } = item

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}>
      <ListItemText disableTypography primary={title} />
    </StyledNavItem>
  )
}
