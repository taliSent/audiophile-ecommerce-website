import { ButtonStyleT } from "src/shared/model/types";
import { FC } from "react";
import arrow from "src/shared/assets/shared/button/icon-arrow-right.svg";
import { Link } from "react-router-dom";
import "src/scss/shared/_button.scss";
import { BUTTON_STYLES } from "src/shared/model/enums";
import T from "./T";

export type ButtonT = {
  title: string;
  variant: ButtonStyleT;
  onClick?: () => void;
  href?: string;
};

const Button: FC<ButtonT> = ({
  title,
  variant,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  // onClick = () => {},
  href = "",
}) => {
  const needArrow = variant === BUTTON_STYLES.FOURTHLY;
  return (
    <Link to={href}>
      <button
        type='button'
        className={`button button__${variant}`}
        // onClick={onClick}
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
