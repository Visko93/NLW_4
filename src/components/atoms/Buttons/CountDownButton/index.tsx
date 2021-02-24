import * as React from "react";
import { ButtonStyle } from "./style";

interface ButtonProps {
  handleClick: React.MouseEventHandler;
  children?: string;
}

const CountDownButton = ({ children, handleClick }: ButtonProps) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default CountDownButton;
