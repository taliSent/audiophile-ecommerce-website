import { FC } from "react";
import { Link } from "react-router-dom";
import logo from "src/assets/shared/logo.svg";
import "src/scss/components/_navbar.scss";

type NavbarT = {
  variant: "header" | "footer";
};

const Navbar: FC<NavbarT> = ({ variant }: NavbarT) => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' />
      <div className={`navbar__links navbar__links--${variant}`}>
        <Link to='/'>HOME</Link>
        <Link to='/headphones'>HEADPHONES</Link>
        <Link to='/speaker'>SPEAKERS</Link>
        <Link to='/earphones'>EARPHONES</Link>
      </div>
    </div>
  );
};
export default Navbar;
