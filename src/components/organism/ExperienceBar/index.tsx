import * as React from "react";

// styles
import { Bar } from "./style";


 const ExperienceBar = () => {
    return (
        <Bar>
            <span>0 xp</span>
            <section>
                <div style={{ width: '50%'}} />
                <span style={{left: '50%'}}>
                    300 xp
                </span>
            </section>

            <span>600 xp</span>
        </Bar>
    )
}

export default ExperienceBar