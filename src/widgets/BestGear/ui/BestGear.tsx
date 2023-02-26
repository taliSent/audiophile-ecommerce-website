import { FC } from "react";
import imgDesktop from "src/shared/assets/home/desktop/image-best-gear.jpg";
import imgTablet from "src/shared/assets/home/tablet/image-best-gear.jpg";
import imgMobile from "src/shared/assets/home/mobile/image-best-gear.jpg";
import { pickSrc } from "src/shared/utils/utils";
import "src/scss/widgets/_best-gear.scss";
import T from "src/shared/components/ui/T";

const BestGear: FC = () => {
  return (
    <div className='best-gear'>
      <div className='best-gear__text'>
        <div className='best-gear__text__headline'>
          <T size='H2' isUpperCase isInline>
            Bringing you the
          </T>
          <T size='H2' color='orange' isUpperCase isInline>
            {` best`}
          </T>
          <T size='H2' isUpperCase isInline>
            {` audio gear`}
          </T>
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
