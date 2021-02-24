import * as React from "react";
import { ButtonStyle } from "./style";
interface ButtonProps {
  handleClick: React.MouseEventHandler;
  children?: string;
}

const RegularButton = ({ children, handleClick }: ButtonProps) => {
  return <ButtonStyle onClick={handleClick}>{children}</ButtonStyle>;
};

export default RegularButton;
