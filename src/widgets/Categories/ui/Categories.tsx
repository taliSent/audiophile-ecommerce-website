import { FC } from "react";
import { LINK_HREF, LINK_NAME } from "src/shared/model/enums";
import earphones from "src/shared/assets/shared/desktop/image-category-thumbnail-earphones.png";
import headphones from "src/shared/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "src/shared/assets/shared/desktop/image-category-thumbnail-speakers.png";
import Category from "src/entities/Category/ui/Category";
import "src/scss/layouts/_categories.scss";

const CategoriesPreview: FC = () => {
  return (
    <div className='categories'>
      <Category
        title={LINK_NAME.EARPHONES}
        href={LINK_HREF.EARPHONES}
        image={
          <img className='category__img' src={earphones} alt='earphones' />
        }
      />
      <Category
        title={LINK_NAME.HEADPHONES}
        href={LINK_HREF.HEADPHONES}
        image={
          <img className='category__img' src={headphones} alt='headphones' />
        }
      />
      <Category
        title={LINK_NAME.SPEAKERS}
        href={LINK_HREF.SPEAKERS}
        image={<img className='category__img' src={speakers} alt='speakers' />}
      />
    </div>
  );
};
export default CategoriesPreview;
