import { FC } from "react";
import YX1 from "src/entities/Product/ui/YX1";
import ZX7 from "src/entities/Product/ui/ZX7";
import ZX9 from "src/entities/Product/ui/ZX9";
import "src/scss/widgets/_products.scss";

const ProductsPreview: FC = () => {
  return (
    <div className='products'>
      <ZX9 />
      <ZX7 />
      <YX1 />
    </div>
  );
};
export default ProductsPreview;
