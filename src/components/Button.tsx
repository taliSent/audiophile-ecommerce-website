import { ButtonStyleT } from "@/model/types";
import { FC } from "react";
import arrow from "src/assets/shared/icon-arrow-right.svg";
import "src/scss/components/_button.scss";

export type ButtonT = {
  title: string;
  style: ButtonStyleT;
  onClick: () => void;
};

const Button: FC<ButtonT> = ({ title, style, onClick }) => {
  const className = `button button__${style}`;
  const needArrow = style === "thirdly";
  return (
    <button type='button' className={className} onClick={onClick}>
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
