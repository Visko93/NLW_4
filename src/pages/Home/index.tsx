import * as React from "react";
import GlobalStyles from "../../styles/global.style";

import CardXp from "../../components/molecules/CardXp";
import CompletedChalenges from "src/components/molecules/CompletedChalenges";
import ExperienceBar from "../../components/organism/ExperienceBar";
import CountDown from "src/components/organism/CountDown";
import Profile from "../../components/molecules/Profile";

import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <GlobalStyles />
      <ExperienceBar />
      <section>
        <div>
          <Profile />
          <CompletedChalenges />
          <CountDown />
        </div>
        <div></div>
      </section>

      {/* <div>
        <CardXp />
    </div> */}
    </Container>
  );
};

export default Home;
