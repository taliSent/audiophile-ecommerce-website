import { FC } from "react";
import { pickSrc } from "src/shared/utils/utils";
import YX1desktop from "src/shared/assets/home/desktop/image-earphones-yx1.jpg";
import YX1tablet from "src/shared/assets/home/tablet/image-earphones-yx1.jpg";
import YX1mobile from "src/shared/assets/home/mobile/image-earphones-yx1.jpg";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import T from "src/shared/components/ui/T";
import "src/scss/entities/_yx1.scss";

const YX1: FC = () => {
  return (
    <div className='yx1'>
      <img
        className='yx1__img'
        /* fix this */
        src={pickSrc(YX1desktop, YX1tablet, YX1mobile)}
        alt='yx1'
      />
      <div className='yx1__plate'>
        <div className='yx1__plate__text'>
          <T size='H4' color='black' isUpperCase>
            YX1 EARPHONES
          </T>
          <Button title='SEE PRODUCT' variant={BUTTON_STYLES.SECONDARY} />
        </div>
      </div>
    </div>
  );
};
export default YX1;
