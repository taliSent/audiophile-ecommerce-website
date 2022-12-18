import { FC } from "react";
import iconCart from "src/assets/shared/header/icon-cart.svg";
import Navbar from "./Navbar";
import "src/scss/components/_header.scss";

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <Navbar variant='header' />
        <img src={iconCart} alt='icon-cart' />
      </div>
    </div>
  );
};
export default Header;
