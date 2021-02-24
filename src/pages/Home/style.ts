import styled from "styled-components";

export const Container = styled.main`
    height: 100vh;
    max-width: 1000px;
    padding: 2.5rem 2rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    
    & section {
        flex: 1;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6.25rem;
        align-content: center;
    }
`

export const  LeftContainer = styled.div`
    display: flex;
`