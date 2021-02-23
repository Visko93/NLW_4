import * as React from "react";

import ExperienceBar from "../../organism/ExperienceBar";
import { RegularButton } from "../../atoms/Buttons";


const Home = () => {
    return (
        <>
        <ExperienceBar />
        <h1>
            Home
        </h1>
        <div>
            <RegularButton color={'#FF0058'} children={'Primeiro'} />
            <RegularButton color={'#A1F008'} children={'Segundo'} />
            <RegularButton color={'#21E0D8'} children={'Terceiro'} />
        </div>
        
        </>
    )
}

export default Home