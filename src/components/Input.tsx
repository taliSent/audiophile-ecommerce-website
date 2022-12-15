import { INPUT_TYPES } from "src/model/enums";
import { InputTypeT } from "src/model/types";
import { FC, LegacyRef, RefObject, useRef } from "react";
import "src/scss/components/_input.scss";

export type InputT = {
  title: string;
  type: InputTypeT;
  errorMessage?: string;
  onClick: () => void;
};
//TO DO: refactoring
const Input: FC<InputT> = ({ title, type, errorMessage, onClick }) => {
  const ref = useRef() as RefObject<HTMLInputElement>;
  const isError = !!errorMessage;
  const isErrorPrefix = isError && "--error";
  const mainClassName = `input input${isErrorPrefix}`;
  const htmlClassName = `${mainClassName}__html input__html--${type}`;
  const placeholder = `Enter youre ${title}`;
  const isTextInput = type === INPUT_TYPES.TEXT;
  const isRadio = !isTextInput;
  const handleClick = () => {
    onClick();
    isTextInput && ref.current?.focus();
  };
  return (
    <div className={mainClassName} onClick={handleClick}>
      <div className={`${mainClassName}__text`}>
        {isTextInput && <label className={`input__label`}>{title}</label>}
        {isError && (
          <label className={`input__error-message`}>{errorMessage}</label>
        )}
      </div>
      <div className={`input__frame ${mainClassName}__frame`}>
        <input
          type={type}
          className={htmlClassName}
          placeholder={placeholder}
          ref={ref}
        />
        {isRadio && title}
      </div>
    </div>
  );
};

export default Input;
