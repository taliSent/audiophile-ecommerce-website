import { FC } from "react";
import { pickSrc } from "src/shared/utils/utils";
import XZ9desktop from "src/shared/assets/home/desktop/image-speaker-zx9.png";
import XZ9tablet from "src/shared/assets/home/tablet/image-speaker-zx9.png";
import XZ9mobile from "src/shared/assets/home/mobile/image-speaker-zx9.png";
import circles from "src/shared/assets/home/desktop/pattern-circles.svg";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import T from "src/shared/components/ui/T";
import "src/scss/entities/_zx9.scss";

const ZX9: FC = () => {
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
          <T size='H1' color='white' toUpperCase>
            ZX9 SPEAKER
          </T>
          <div className='zx9__plate__text__description'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <Button title='SEE PRODUCT' variant={BUTTON_STYLES.THIRDLY} />
        </div>
      </div>
    </div>
  );
};
export default ZX9;
