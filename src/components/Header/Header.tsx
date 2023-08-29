import { FC } from 'react'
import UContainer from '../UContainer/UContainer';
import logo from '../../assets/logo-zz.svg'
import { Link } from 'react-router-dom';
import BTN from '../../UI/BTN/BTN';

import './Header.scss'

const Header: FC = () => {

  return <div className="header">
    <UContainer>
      <div className="header__wrap">
        <div className="header__logo">
          <Link to='/' className='header__logo-link'>
            <img src={logo} alt="logo" className='header__logo-img' />
          </Link>
        </div>
        <nav className="header__navbar">
          <Link to='/' className='header__nav-link'>
            <BTN text='About Me' />
          </Link>
          <Link to='/work' className='header__nav-link'>
            <BTN text='Work' />
          </Link>
          <Link to='/contact' className='header__nav-link'>
            <BTN text='Contact' />
          </Link>
        </nav>
      </div>
    </UContainer>
  </div>
}

export default Header