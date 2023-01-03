import { ButtonStyleT } from "src/model/types";
import { FC } from "react";
import arrow from "src/assets/shared/button/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import "src/scss/components/_button.scss";

export type ButtonT = {
  title: string;
  variant: ButtonStyleT;
  onClick?: () => void;
  href?: string;
};

const Button: FC<ButtonT> = ({
  title,
  variant,
  onClick = () => {},
  href = "",
}) => {
  const needArrow = variant === "thirdly";
  return (
    <Link to={href}>
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
    </Link>
  );
};

export default Button;
