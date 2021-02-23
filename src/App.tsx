import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes";
import  GlobalStyle, {ContentConteiner}  from "./styles/global.style";

function App() {
  return (
    <Router>
      <ContentConteiner>
        <GlobalStyle />
        <Routes />
      </ContentConteiner>
    </Router>
  );
}

export default App;
