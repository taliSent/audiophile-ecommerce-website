import { FC } from "react";
import useInputLogic from "src/shared/components/model/useInputLogic";
import { InputT } from "src/shared/model/types";
import "src/scss/components/_input.scss";

//TO DO: refactoring
const Input: FC<InputT> = ({ title, errorMessage, type, onClick }) => {
  const {
    mainClassName,
    handleClick,
    isTextInput,
    isError,
    htmlClassName,
    placeholder,
    isRadio,
    ref,
  } = useInputLogic({ title, errorMessage, type, onClick });
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
