import styled from "styled-components";
import { colors, shadow, radius } from "../../../styles/theme";

export const  CountDownStyle = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${colors.title};

    & div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background: ${colors.white};
        box-shadow: ${shadow.regular};
        border-radius: ${radius.small};
        font-size: 8.5rem;
        text-align: center;

        & span {
            flex: 1;
        }

        & span:first-child {
            border-right: 1px solid ${colors.grayLine}
        }

        & span:last-child {
            border-left: 1px solid ${colors.grayLine}
        }
    }

    & > span {
        font-size: 6.25rem;
        margin: 0 0.5rem;
    }

` 
