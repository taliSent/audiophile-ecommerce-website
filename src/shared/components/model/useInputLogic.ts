import { RefObject, useRef } from "react";
import { INPUT_TYPES } from "src/shared/model/enums";
import { InputT } from "src/shared/model/types";

const useInputLogic = ({ title, type, errorMessage, onClick }: InputT) => {
  const ref = useRef() as RefObject<HTMLInputElement>;
  const isError = !!errorMessage;
  const isErrorPrefix = isError && "--error";
  const mainClassName = `input input${isErrorPrefix}`;
  const htmlClassName = `${mainClassName}__html input__html--${type}`;
  const placeholder = `Enter youre ${title}`;
  const isTextInput = type === INPUT_TYPES.TEXT;
  const handleClick = () => {
    onClick();
    isTextInput && ref.current?.focus();
  };
  return {
    ref,
    isError,
    mainClassName,
    htmlClassName,
    placeholder,
    isTextInput,
    isRadio: !isTextInput,
    handleClick,
  };
};

export default useInputLogic;
