import { FC } from "react";
import "src/scss/shared/_t.scss";

type TType = {
  children: string;
  size: "H1" | "H2" | "H3" | "H4" | "overline" | "subtitle";
  color?: "white" | "black" | "orange";
  isUpperCase?: boolean;
  isInline?: boolean;
};

const T: FC<TType> = ({
  children,
  size,
  isUpperCase = false,
  isInline = false,
  color = "black",
}: TType) => {
  return (
    <div
      className={`text text--${color} text--${
        isInline ? "inline" : ""
      } ${size}`}
    >
      {isUpperCase ? children.toUpperCase() : children}
    </div>
  );
};

export default T;
