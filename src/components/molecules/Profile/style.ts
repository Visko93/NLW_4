import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const  ProfileStyle = styled.div`
    display: flex;
    align-items: center;


    & img {
        width: 5.5rem;
        height: 5.5rem;
        border-radius: 50%;
    }

    & div {
        margin-left: 1.5rem;
    
    }
    & strong {
        font-size: 1.5rem;
        font-weight: 600;
        color: ${colors.title}
    }
    & p {
        font-size: 1rem;
        margin-top: .5rem;
    
    & img {
        width: 16px;
        height: 16px;
        margin-right: 0.5rem;
    }
    
    }



` 
