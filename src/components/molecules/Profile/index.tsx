import * as React from "react";
import Image from "next/image";
import { ProfileStyle } from "./style";
import { MainTitle, Subtitle } from "../../../styles/global.style";

const Profile = () => {
  return (
    <ProfileStyle>
      <Image
        src={"https://github.com/Visko93.png"}
        alt={"Vinicius"}
        width={"inherit"}
        height={"inherit"}
      />
      <div>
        <strong>Vinicius Skonicezny</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </ProfileStyle>
  );
};

export default Profile;
