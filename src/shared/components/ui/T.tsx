import { FC } from "react";
import "src/scss/shared/_t.scss";

type TType = {
  children: string;
  size: "H1" | "H2" | "H3" | "H4" | "overline";
  toUpperCase?: boolean;
  color?: "white" | "black";
};

const T: FC<TType> = ({
  children,
  size,
  toUpperCase = false,
  color = "black",
}: TType) => {
  return (
    <span className={`text ${size} ${size}--${color}`}>
      {toUpperCase ? children.toUpperCase() : children}
    </span>
  );
};

export default T;
