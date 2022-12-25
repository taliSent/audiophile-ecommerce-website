import { FC, useEffect, useState } from "react";
import Navbar from "./Navbar";
import { BrowserView, MobileView, TabletView } from "react-device-detect";
import logo from "src/assets/shared/logo.svg";
import "src/scss/components/_header.scss";

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
            <div>
              <div
                className='header__content__icon--hamburger'
                onClick={toggleIsOpen}
              />
              <img
                src={logo}
                alt='open-navbar'
                className='header__content__logo'
              />
            </div>
            {isMenuOpen ? (
              <>
                {/* <Navbar variant='header' />
                <div className='header__content__mobile-menu'></div> */}
              </>
            ) : (
              <></>
            )}

            <div className='header__content__icon--cart' />
          </div>
        </div>
      </MobileView>
    </>
  );
};
export default Header;
