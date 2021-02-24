import styled from "styled-components";
import {shadow, radius  } from "../../../styles/theme";

export const  Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 500px;
max-height: 468px;
min-width: 200px;
width: 35%;
padding: 1em;
margin: 0 .5em 0 .5em;
text-align: center;

box-shadow: ${shadow.regular};
border-radius: ${radius.small};


` 
export const  ButtonContainer = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin: 1em 0;
`