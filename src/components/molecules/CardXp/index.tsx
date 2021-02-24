import * as React from "react";
import Image from "next/image";
import { Card, ButtonContainer } from "./style";
import { MainTitle, Subtitle } from "../../../styles/global.style";

import { mesages } from "../../../services/constants/actionsMesages";
import { RegularButton } from "../../atoms/Buttons";
import { SeparationLine } from "../../atoms/SeparationBars/style";

const icons = {
  moveEyes: "eye",
  moveStrecht: "lift",
};

const CardXp = ({ xpValue = 400 }) => {
  return (
    <Card>
      <Subtitle>{`Ganhe ${xpValue} xp`}</Subtitle>
      <SeparationLine />
      <Image
        src={`/public/icons/${icons.moveEyes}.svg`}
        alt={`ìcon to ${icons.moveEyes}`}
        width={152}
        height={58}
      />
      <MainTitle>Mova os Olhos</MainTitle>
      <p>{mesages("Vinicius", "moveEyes")}</p>
      <ButtonContainer>
        <RegularButton handleClick={() => {}}>Completei</RegularButton>
        <RegularButton handleClick={() => {}}>Falhei</RegularButton>
      </ButtonContainer>
    </Card>
  );
};

export default CardXp;
