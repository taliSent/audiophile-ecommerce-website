import { FC } from "react";
import ZX9 from "./Products/ZX9";

type ProductsT = {};

const Products: FC<ProductsT> = () => {
  return (
    <div className='products'>
      <ZX9 />
    </div>
  );
};
export default Products;
