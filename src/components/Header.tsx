import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/shared/logo.svg";
import iconCart from "src/assets/shared/icon-cart.svg";
import "src/scss/components/_header.scss";

const Header: FC = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <div className='header__links'>
        <Link to='/home'>HOME</Link>
        <Link to=''>HEADPHONES</Link>
        <Link to=''>SPEAKERS</Link>
        <Link to=''>EARPHONES</Link>
      </div>
      <img src={iconCart} alt='icon-cart' />
    </div>
  );
};
export default Header;
