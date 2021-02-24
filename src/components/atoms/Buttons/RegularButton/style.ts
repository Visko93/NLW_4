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
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 50px;
    max-width: 174px;
    min-width: 130px;
    
    border-radius: ${radius.small};
    padding: 1.5rem 1.75rem;

    cursor: pointer;

    
    font-family: 'Inter', sans-serif;
    color: ${colors.white};
    font-weight: 600;
    font-size: 1rem;
`