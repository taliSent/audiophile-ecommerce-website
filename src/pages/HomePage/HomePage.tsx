import { FC } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import BestGear from "src/layouts/BestGear";
import Categories from "./layouts/Categories";
import Products from "./layouts/Products";
import "src/scss/layouts/_page.scss";

const HomePage: FC = () => {
  return (
    <>
      <Header />
      <div className='page'>
        <Categories />
        <Products />
        <BestGear />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
