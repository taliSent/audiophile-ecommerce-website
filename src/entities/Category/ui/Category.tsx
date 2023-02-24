import { FC } from "react";
import Button from "src/shared/components/ui/Button";
import { BUTTON_STYLES } from "src/shared/model/enums";
import "src/scss/entities/_category.scss";

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
      <Button title='SHOP' variant={BUTTON_STYLES.FOURTHLY} href={href} />
    </div>
  );
};
export default Category;
