import { FC } from "react";
import ZX7 from "./Products/ZX7";
import ZX9 from "./Products/ZX9";
import "src/scss/layouts/_products.scss";

type ProductsT = {};

const Products: FC<ProductsT> = () => {
  return (
    <div className='products'>
      <ZX9 />
      <ZX7 />
    </div>
  );
};
export default Products;
