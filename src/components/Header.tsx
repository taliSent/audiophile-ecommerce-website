import { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
import logo from "src/assets/shared/logo.svg";
import "src/scss/components/_header.scss";
import { AnimatePresence } from "framer-motion";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <BrowserView>
        <div className='header'>
          <div className='header__content'>
            <Navbar variant='header' />
            <div className='header__content__icon--cart' />
          </div>
        </div>
      </BrowserView>
      <MobileView>
        <div className='header'>
          <div className='header__content'>
            <div
              className='header__content__icon--hamburger'
              onClick={toggleIsOpen}
            />
            <img
              src={logo}
              alt='open-navbar'
              className='header__content__logo'
            />
            <div className='header__content__icon--cart' />
          </div>
          <AnimatePresence>
            {isMenuOpen && <Navbar variant='header' isMenuOpen />}
          </AnimatePresence>
        </div>
      </MobileView>
    </>
  );
};
export default Header;
