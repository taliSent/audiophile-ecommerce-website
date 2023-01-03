import { FC } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import BestGear from "src/layouts/BestGear";
import Categories from "./layouts/Categories";
import "src/scss/layouts/_page.scss";

const HomePage: FC = () => {
  return (
    <div className='page'>
      <Header />
      <Categories />
      <BestGear />
      <Footer />
    </div>
  );
};

export default HomePage;
