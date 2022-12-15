import { FC } from "react";
import "src/scss/components/_counter.scss";

export type OperationT = "+" | "-";
export type CounterT = {
  count: number;
  onClick: (operation: OperationT) => () => void;
};

const Counter: FC<CounterT> = ({ count, onClick }) => {
  return (
    <div className={`counter`}>
      <div onClick={onClick("-")}>-</div>
      {count}
      <div onClick={onClick("+")}>+</div>
    </div>
  );
};

export default Counter;
