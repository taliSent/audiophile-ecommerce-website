import { FC } from "react";
import XX99desktop from "src/shared/assets/home/desktop/image-hero.jpg";
import XX99tablet from "src/shared/assets/home/tablet/image-hero.jpg";
import XX99mobile from "src/shared/assets/home/mobile/image-hero.jpg";
import { pickSrc } from "src/shared/utils/utils";
import T from "src/shared/components/ui/T";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import "src/scss/entities/_new-product.scss";

const NewProduct: FC = () => {
  return (
    <div className='new-product'>
      <img
        className='new-product__img'
        src={pickSrc(XX99desktop, XX99tablet, XX99mobile)}
        alt='xx99'
      />
      <div className='new-product__text'>
        <T color='white' size='overline' toUpperCase>
          New product
        </T>
        <T color='white' size='H1' toUpperCase>
          XX99 Mark II HeadphoneS
        </T>
        <div>
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </div>
        <Button title='See Product' variant={BUTTON_STYLES.PRIMARY} />
      </div>
    </div>
  );
};
export default NewProduct;
