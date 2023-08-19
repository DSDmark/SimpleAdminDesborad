import {
  AccountBox,
  Dashboard,
  LoginTwoTone,
  Person,
  ProductionQuantityLimitsSharp,
  StopScreenShareSharp,
} from '@mui/icons-material'
import { SvgIcon } from '@mui/material'

const navConfig = [
  {
    title: 'dasboard',
    path: '/dasboard',
    icon: (
      <SvgIcon>
        <Dashboard />
      </SvgIcon>
    ),
  },
  {
    title: 'user',
    path: '/dasboard/user',
    icon: (
      <SvgIcon>
        <Person />
      </SvgIcon>
    ),
  },
  {
    title: 'product',
    path: '/dasboard/products',
    icon: (
      <SvgIcon>
        <ProductionQuantityLimitsSharp />
      </SvgIcon>
    ),
  },
  {
    title: 'create account',
    path: '/register',
    icon: (
      <SvgIcon>
        <AccountBox />
      </SvgIcon>
    ),
  },
  {
    title: 'login',
    path: '/login',
    icon: (
      <SvgIcon>
        <LoginTwoTone />
      </SvgIcon>
    ),
  },
  {
    title: 'Not found',
    path: '/404',
    icon: (
      <SvgIcon>
        <StopScreenShareSharp />
      </SvgIcon>
    ),
  },
]

export default navConfig
