import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./theme";

const GlobalStyle = createGlobalStyle`

	* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
	}

	body, html {
      width: 100vw;
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

  p {
    margin: 0 ;
  }

	/* Typography */

	body, input, textarea, button  {
		font-size: 1rem;
		font-weight: 400;
    font-family: 'Inter', sans-serif;
    color: ${colors.text};
	}
`;

export const ContentConteiner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  padding: 2.5rem 2rem;
  margin: 0 auto;
`

export default GlobalStyle;
