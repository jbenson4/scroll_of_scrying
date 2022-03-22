import React from 'react'
import "./Header.scss"
import { ReactComponent as LogoSvg } from './images/scry-icon.svg';

const Header = () => {
  return (
    <header>
      <h1><LogoSvg className="LogoSvg"/> Scroll of Scrying</h1>
    </header>
  )
}

export default Header;