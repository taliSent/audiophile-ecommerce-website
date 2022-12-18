import { ButtonStyleT } from "src/model/types";
import { FC } from "react";
import arrow from "src/assets/shared/button/icon-arrow-right.svg";
import "src/scss/components/_button.scss";

export type ButtonT = {
  title: string;
  variant: ButtonStyleT;
  onClick: () => void;
};

const Button: FC<ButtonT> = ({ title, variant, onClick }) => {
  const needArrow = variant === "thirdly";
  return (
    <button
      type='button'
      className={`button button__${variant}`}
      onClick={onClick}
    >
      {needArrow ? (
        <>
          {title}
          <img src={arrow} alt='arrow' />
        </>
      ) : (
        title
      )}
    </button>
  );
};

export default Button;
