import { FC, useState } from "react";
import { isDesktop } from "react-device-detect";
import logo from "src/shared/assets/shared/logo.svg";
import Navbar from "src/entities/Navbar/ui/Navbar";
import "src/scss/widgets/_header.scss";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='header'>
      <div className='header__content'>
        {!isDesktop ? (
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
