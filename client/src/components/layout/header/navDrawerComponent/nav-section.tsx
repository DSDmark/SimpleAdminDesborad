// @mui
import { styled, Link as MuiLink, Box, List, ListItemText } from '@mui/material'
import { GitHub } from '@mui/icons-material'

// routes
import { Link as RouterLink } from 'react-router-dom'

// styles
import { StyledNavItemIcon } from '../style'
const StyledNavItem = styled(MuiLink)(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  width: '100%',
  textAlign: 'left',
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}))

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
    <StyledNavItem
      as={RouterLink}
      children={[{ href: path }]}
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
    </StyledNavItem>
  )
}
