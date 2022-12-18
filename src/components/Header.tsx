import { FC } from "react";
import Navbar from "./Navbar";
import "src/scss/components/_header.scss";

const Header: FC = () => {
  return (
    <div className='header'>
      <div className='header__content'>
        <Navbar variant='header' />
        <div className='header__content__icon--cart'></div>
      </div>
    </div>
  );
};
export default Header;
