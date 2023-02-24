import { FC, ReactNode } from "react";
import "src/scss/components/_h.scss";

type HT = {
  children: ReactNode;
  color?: "white" | "black";
};

export const H1: FC<HT> = ({ children, color }: HT) => {
  return <div className={`h1 h1--${color}`}>{children}</div>;
};

export const H2: FC<HT> = ({ children, color }: HT) => {
  return <div className={`h2 h2--${color}`}>{children}</div>;
};

export const H4: FC<HT> = ({ children, color }: HT) => {
  return <div className={`h4 h4--${color}`}>{children}</div>;
};
