import { FC } from "react";
import { pickSrc } from "src/utils/utils";
import XZ9desktop from "src/assets/home/desktop/image-speaker-zx9.png";
import XZ9tablet from "src/assets/home/tablet/image-speaker-zx9.png";
import XZ9mobile from "src/assets/home/mobile/image-speaker-zx9.png";
import circles from "src/assets/home/desktop/pattern-circles.svg";
import H1 from "src/components/H";
import Button from "src/components/Button";
import "src/scss/components/_zx9.scss";
import { BUTTON_STYLES } from "src/model/enums";

type ZX9T = {};

const ZX9: FC<ZX9T> = () => {
  return (
    <div className='zx9'>
      <div className='zx9__plate'>
        <img
          className='zx9__plate__img'
          src={pickSrc(XZ9desktop, XZ9tablet, XZ9mobile)}
          alt='zx9'
        />
        <img className='zx9__plate__circles' src={circles} alt='zx9' />
        <div className='zx9__plate__text'>
          <H1 color='white'>ZX9 SPEAKER</H1>
          <div className='zx9__plate__text__description'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <Button title='See Product' variant={BUTTON_STYLES.THIRDLY} />
        </div>
      </div>
    </div>
  );
};
export default ZX9;
