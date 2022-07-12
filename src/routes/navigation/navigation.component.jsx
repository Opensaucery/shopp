import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

import { ReactComponent as Bee } from '../../assets/Bee.svg'

import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <Bee className='logo' width='40px'/>
          </Link>
          <div className=' nav-links-container'>
            <Link className='nav-link' to='/shop'>
              SHOP
            </Link>
            <Link className='nav-link' to='/sign-in'>
              SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation