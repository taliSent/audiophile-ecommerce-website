import { FC, ReactNode } from "react";
import "src/scss/components/_h.scss";

type HT = {
  children: ReactNode;
  color?: "white";
};

const H1: FC<HT> = ({ children, color }: HT) => {
  return <span className={`h1 h1__${color}`}>{children}</span>;
};

const H2: FC<HT> = ({ children, color }: HT) => {
  return <span className={`h2 h2__${color}`}>{children}</span>;
};

export default H1;
