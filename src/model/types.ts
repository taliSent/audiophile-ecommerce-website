import { BUTTON_STYLES, INPUT_TYPES } from "./enums";

export type ButtonStyleT =
  | BUTTON_STYLES.PRIMARY
  | BUTTON_STYLES.SECONDARY
  | BUTTON_STYLES.THIRDLY;

export type InputTypeT = INPUT_TYPES.TEXT | INPUT_TYPES.RADIO;

export type InputT = {
  title: string;
  type: InputTypeT;
  errorMessage?: string;
  onClick: () => void;
};

export type OperationT = "+" | "-";
