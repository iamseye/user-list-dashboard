import React from "react";
import { ButtonCustom } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children, ...otherProps }: ButtonProps) => {
  return <ButtonCustom {...otherProps}>{children}</ButtonCustom>;
};

export default Button;
