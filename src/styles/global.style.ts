import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`

	* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
	}

	body, html {
      max-width: 100vw;
      height: 100%;
  }

	@media (max-width: 1080px) {
		html {
			font-size: 93.75%
		}
	}

	@media (max-width: 768px) {
		html {
			font-size: 87.5%
		}
	}

  h1,h2,h3,h4,h5,h6 {
      margin: 0 ;
      padding: 0;
      font-family: 'Rajdhani', monospace;
      color: ${colors.title};
      font-weight: 600;
  }

  button{
    color: unset;
    font-size: 1rem;
		font-weight: 500;
    font-family: 'Inter', sans-serif;
  }

  p {
    margin: 0 ;
  }

	/* Typography */

	body, input, textarea  {
		font-size: 1rem;
		font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: ${colors.text};
	}
`;


export const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin: 1.25rem .5rem;
`

export const Subtitle = styled.h3`
  color: ${colors.blue};
  font-weight: 500;
  font-size: 1.25rem;
  margin: 1.25rem .5rem;
`

export default GlobalStyle;
