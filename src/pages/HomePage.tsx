import { FC } from "react";
import BestGear from "src/widgets/BestGear/ui/BestGear";
import Footer from "src/widgets/Footer/ui/Footer";
import Header from "src/shared/components/Header";
import CategoriesPreview from "src/widgets/Categories/ui/Categories";
import ProductsPreview from "src/widgets/ProductsPreview/ui/Products";
import "src/scss/layouts/_page.scss";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <CategoriesPreview />
        <ProductsPreview />
        <BestGear />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
