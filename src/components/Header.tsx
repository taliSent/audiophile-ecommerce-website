import { FC, useState } from "react";
import { isMobile } from "react-device-detect";
import logo from "src/assets/shared/logo.svg";
import "src/scss/components/_header.scss";
import Navbar from "./Navbar";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='header'>
      <div className='header__content'>
        {isMobile ? (
          <>
            <div
              className='header__content__icon--hamburger'
              onClick={toggleIsOpen}
            />
            <img
              src={logo}
              alt='open-navbar'
              className='header__content__logo'
            />
          </>
        ) : (
          <Navbar variant='header' />
        )}
        <div className='header__content__icon--cart' />
        {isMenuOpen && <Navbar variant='header' isMenuOpen />}
      </div>
    </div>
  );
};
export default Header;
