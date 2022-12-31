import { FC } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import { Link } from "react-router-dom";
import logo from "src/assets/shared/logo.svg";
import { motion } from "framer-motion";
import "src/scss/components/_navbar.scss";
import { LINKS } from "src/constants";

type NavbarT = {
  variant: "header" | "footer";
  isMenuOpen?: boolean;
};

const Navbar: FC<NavbarT> = ({ variant, isMenuOpen }: NavbarT) => {
  const menuState = isMenuOpen ? "open" : "closed";
  const needLogo = variant === "footer" ? true : isDesktop;
  return (
    <div className={`navbar navbar--${variant}`}>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      /> */}
      {needLogo && (
        <img src={logo} alt='logo' className={`navbar__logo--${variant}`} />
      )}
      <div
        className={`navbar__links navbar__links--${variant} navbar__links--${variant}--${menuState}`}
      >
        {LINKS.map(({ to, name }) => (
          <Link to={to} key={to}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navbar;
