import { FC } from "react";
import { FOOTER_TEXT } from "src/constants";
import iconFacebook from "src/assets/shared/button/icon-facebook.svg";
import "src/scss/components/_footer.scss";
import Navbar from "../Navbar";

const Footer: FC = () => {
  return (
    <div className='footer'>
      <Navbar variant='footer' />
      <div className='footer__content'>
        <div>{FOOTER_TEXT}</div>
        <img src={iconFacebook} />
      </div>
      <div className='footer__copyright'></div>
    </div>
  );
};
export default Footer;
