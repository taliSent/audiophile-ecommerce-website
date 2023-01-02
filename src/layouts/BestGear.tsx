import { FC } from "react";
import bestGearDesktop from "src/assets/desktop/image-best-gear.jpg";
import bestGearTablet from "src/assets/tablet/image-best-gear.jpg";
import bestGearMobile from "src/assets/mobile/image-best-gear.jpg";
import { isDesktop, isMobile, isTablet } from "react-device-detect";
import "src/scss/layouts/_best-gear.scss";

const BestGear: FC = () => {
  const pickSrc = () => {
    switch (true) {
      case isDesktop:
        return bestGearDesktop;
      case isTablet:
        return bestGearTablet;
      case isMobile:
        return bestGearMobile;
      default:
        return bestGearTablet;
    }
  };
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
      <img alt='best-gear' src={pickSrc()} />
    </div>
  );
};
export default BestGear;
