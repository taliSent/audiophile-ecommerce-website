import { FC } from "react";
import Footer from "src/components/Footer";
import Header from "src/components/Header";
import BestGear from "src/layouts/BestGear";

const HomePage: FC = () => {
  return (
    <div className='page'>
      <Header />
      <BestGear />
      <Footer />
    </div>
  );
};

export default HomePage;
