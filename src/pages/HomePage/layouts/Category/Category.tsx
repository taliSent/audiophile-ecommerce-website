import { FC } from "react";
import Button from "src/components/Button";
import { BUTTON_STYLES } from "src/model/enums";
import "src/scss/components/_category.scss";

type CategoryT = {
  title: string;
  href: string;
  image: any;
};

const Category: FC<CategoryT> = ({ title, href, image }: CategoryT) => {
  return (
    <div className='category'>
      {image}
      <div className='category__title'>{title}</div>
      {/* <div className='category__background' /> */}
      <Button
        title='SHOP'
        variant={BUTTON_STYLES.THIRDLY}
        onClick={() => {}}
        href={href}
      />
    </div>
  );
};
export default Category;
