import styled from "styled-components";
import { colors } from "../../../styles/theme";

export const  CompletedChalengesStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 3.5rem 0;
    padding: 0 0 1rem 0;
    border-bottom: 1px solid #D7D8DA;

    font-weight: 500;

    & span:first-child{
        font-size: 1.25rem;
    }

    & span:last-child{
        font-size: 1.5rem;
    }

` 
