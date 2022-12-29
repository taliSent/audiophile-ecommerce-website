import { FC } from "react";
import { isDesktop } from "react-device-detect";
import { Link } from "react-router-dom";
import logo from "src/assets/shared/logo.svg";
import { motion } from "framer-motion";
import "src/scss/components/_navbar.scss";

type NavbarT = {
  variant: "header" | "footer";
  isMenuOpen: boolean;
};

const Navbar: FC<NavbarT> = ({ variant, isMenuOpen }: NavbarT) => {
  return (
    <div className='navbar'>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      /> */}
      {isDesktop && <img src={logo} alt='logo' />}
      <div
        className={`navbar__links navbar__links--${variant}--${
          isMenuOpen ? "open" : "closed"
        }`}
      >
        <Link to='/'>HOME</Link>
        <Link to='/headphones'>HEADPHONES</Link>
        <Link to='/speaker'>SPEAKERS</Link>
        <Link to='/earphones'>EARPHONES</Link>
      </div>
    </div>
  );
};
export default Navbar;
