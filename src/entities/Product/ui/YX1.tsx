import { FC } from "react";
import { pickSrc } from "src/shared/utils/utils";
import YX1desktop from "src/shared/assets/home/desktop/image-gallery-2.jpg";
import YX1tablet from "src/shared/assets/home/tablet/image-gallery-2.jpg";
import YX1mobile from "src/shared/assets/home/mobile/image-gallery-2.jpg";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import { H4 } from "src/shared/components/ui/H";
import "src/scss/entities/_yx1.scss";

const YX1: FC = () => {
  return (
    <div className='yx1'>
      <img
        className='yx1__plate__img'
        /* fix this */
        src={pickSrc(YX1desktop, YX1tablet, YX1mobile)}
        alt='yx1'
      />
      <div className='yx1__plate'>
        <div className='yx1__plate__text'>
          <H4 color='black'>YX1 EARPHONES</H4>
          <Button title='SEE PRODUCT' variant={BUTTON_STYLES.SECONDARY} />
        </div>
      </div>
    </div>
  );
};
export default YX1;
