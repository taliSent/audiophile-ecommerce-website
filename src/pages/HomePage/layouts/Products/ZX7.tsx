import { FC } from "react";
import { pickSrc } from "src/utils/utils";
import XZ7desktop from "src/assets/home/desktop/image-speaker-zx7.jpg";
import XZ7tablet from "src/assets/home/tablet/image-speaker-zx7.jpg";
import XZ7mobile from "src/assets/home/mobile/image-speaker-zx7.jpg";
import { H4 } from "src/components/H";
import Button from "src/components/Button";
import { BUTTON_STYLES } from "src/model/enums";
import "src/scss/components/_zx7.scss";

const ZX7: FC = () => {
  return (
    <div className='zx7'>
      <div className='zx7__plate'>
        <div className='zx7__plate__text'>
          <H4 color='black'>ZX7 SPEAKER</H4>
          <Button title='SEE PRODUCT' variant={BUTTON_STYLES.SECONDARY} />
        </div>
        <img
          className='zx7__plate__img'
          src={pickSrc(XZ7desktop, XZ7tablet, XZ7mobile)}
          height='320'
          alt='zx9'
        />
      </div>
    </div>
  );
};
export default ZX7;
