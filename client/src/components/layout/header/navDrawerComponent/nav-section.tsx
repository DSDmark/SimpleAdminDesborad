// @mui
import { Box, List, ListItemButton, ListItemText } from '@mui/material'
import { GitHub } from '@mui/icons-material'

// routes
import { Link } from 'react-router-dom'

// styles
import { StyledNavItem, StyledNavItemIcon } from '../style'

// types
import { INavData, INavDataProps } from '../type'

interface INavItemProps {
  item: INavData // Define the 'item' prop in NavItemProps
}

export default function NavSection({ data, ...other }: INavDataProps) {
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

function NavItem({ item }: INavItemProps) {
  const { title, path } = item
  return (
    <ListItemButton
      LinkComponent={Link}
      href={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}>
      <StyledNavItemIcon>
        <GitHub />
      </StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
    </ListItemButton>
  )
}
