import styled from "styled-components";
import { colors } from "../../../styles/theme";


export const  Bar = styled.header`
  display: flex;
  align-items: center;

  span {
      font-size: 1rem;

  }

  & section {
      flex: 1;
      height: 4px;
      border-radius: 4px;
      background-color: ${colors.grayLine};
      margin: 0 1.5rem;

      & div {
          height: 4px;
          border-radius: 2px;
          background-color: ${colors.green}
      }

      & span {
        position: absolute;
        transform: translateX(-50%);
      }
  }
` 

