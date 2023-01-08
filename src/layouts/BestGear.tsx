import { FC } from "react";
import imgDesktop from "src/assets/home/desktop/image-best-gear.jpg";
import imgTablet from "src/assets/home/tablet/image-best-gear.jpg";
import imgMobile from "src/assets/home/mobile/image-best-gear.jpg";
import { pickSrc } from "src/utils/utils";
import "src/scss/layouts/_best-gear.scss";

const BestGear: FC = () => {
  return (
    <div className='best-gear'>
      <div className='best-gear__text'>
        <div className='best-gear__text__headline'>
          {`BRINGING YOU THE `}
          <span className='best-gear__text__headline__highlight'>BEST </span>
          {`AUDIO GEAR`}
        </div>
        <div className='best-gear__text__description'>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </div>
      </div>
      <img alt='best-gear' src={pickSrc(imgDesktop, imgTablet, imgMobile)} />
    </div>
  );
};
export default BestGear;
