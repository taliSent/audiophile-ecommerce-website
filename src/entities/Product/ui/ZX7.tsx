import { FC } from "react";
import { pickSrc } from "src/shared/utils/utils";
import XZ7desktop from "src/shared/assets/home/desktop/image-speaker-zx7.jpg";
import XZ7tablet from "src/shared/assets/home/tablet/image-speaker-zx7.jpg";
import XZ7mobile from "src/shared/assets/home/mobile/image-speaker-zx7.jpg";
import { H4 } from "src/shared/components/H";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import "src/scss/entities/_zx7.scss";

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
