// routes
import { Outlet } from 'react-router-dom'

// header components
import HeaderBar from './headerBar'
import NavDrawerComponent from './navDrawerComponent'

// styles
import { DivStyle, MainStyle } from './style'

const Header = () => {
  return (
    <DivStyle>
      <HeaderBar />
      <NavDrawerComponent />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </DivStyle>
  )
}

export default Header
