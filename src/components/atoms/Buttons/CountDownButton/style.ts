import styled from "styled-components";
import { colors, radius } from "../../../../styles/theme";

const variantColors = {
    success: {
        backgroundColor: colors.green,
    },
    failure: {
        backgroundColor: colors.red,
    }
}


export const ButtonStyle = styled.button`
   width: 100%;
   height: 5rem;

   margin-top: 2rem;
   display: flex;
   align-items: center;
   justify-content: center;

   border: 0;
   border-radius: 5px;

   background: ${colors.blue};
   color: ${colors.white};

  font-size: 1.25rem;
  font-weight: 600;
  cursor: pointer;

  will-change: background;
  transition: background 300ms ease;

  &:hover {
    background: ${colors.blueDark}
  }

`