import { FC } from "react";
import Navbar from "src/entities/Navbar/ui/Navbar";
import { FOOTER_TEXT } from "../model/constants";
import "src/scss/widgets/_footer.scss";

const Footer: FC = () => {
  return (
    <div className='footer'>
      <Navbar variant='footer' />
      <div className='footer__content'>
        <div className='footer__content__text'>{FOOTER_TEXT}</div>
        <div className='footer__content__social'>
          <div className='footer__content__social--facebook'></div>
          <div className='footer__content__social--twitter'></div>
          <div className='footer__content__social--instagram'></div>
        </div>
      </div>
      <div className='footer__copyright'>
        Copyright 2021. All Rights Reserved
      </div>
    </div>
  );
};
export default Footer;
