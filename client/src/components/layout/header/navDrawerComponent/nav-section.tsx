// @mui
import { Box, List, ListItemText } from '@mui/material'

// ui
import { RouterLink } from '@/components'

// styles
import { StyledNavItemIcon, StyledNavItem } from '../style'

// types
import { INavData, INavDataProps } from '../type'

interface INavItemProps {
  item: INavData
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
  const { title, path, icon } = item
  return (
    <RouterLink to={path}>
      <StyledNavItem
        sx={{
          '&.active': {
            color: 'text.primary',
            bgcolor: 'action.selected',
            fontWeight: 'fontWeightBold',
          },
        }}>
        <StyledNavItemIcon>{icon}</StyledNavItemIcon>
        <ListItemText disableTypography primary={title} />
      </StyledNavItem>
    </RouterLink>
  )
}
