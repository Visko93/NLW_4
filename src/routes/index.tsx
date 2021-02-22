import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../components/pages/Home";


const Routes = () => {
    return(
        <Switch>
            <Route path='/'> 
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes