import { FC } from "react";
import YX1 from "../../../entities/Product/ui/YX1";
import ZX9 from "src/entities/Product/ui/ZX9";
import "src/scss/layouts/_products.scss";

const ProductsPreview: FC = () => {
  return (
    <div className='products'>
      <ZX9 />
      {/* <ZX7 /> тут какая-то проблема с картинкой в mobile */}
      <YX1 />
    </div>
  );
};
export default ProductsPreview;
