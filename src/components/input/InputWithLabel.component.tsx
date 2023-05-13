import React from "react";
import { InputStyle } from "./input.style";

interface InputWithLabelProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  preText: string;
}

const InputWithLabel = ({
  preText,
  ...inputAttributes
}: InputWithLabelProps) => {
  return (
    <InputStyle>
      <div className="input-container">
        <div className="label-text">{preText}</div>
        <input {...inputAttributes}></input>
      </div>
    </InputStyle>
  );
};

export default InputWithLabel;
