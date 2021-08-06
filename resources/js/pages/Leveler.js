import React, { useEffect, useState } from "react";
import Chart from "../components/Chart";
import Progress from "./Progress";
import { Switch, Route } from "react-router-dom";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    }, []);
    return (
        <Switch>
            <Route exact path="/leveler" render={() => <Chart {...props} />} />

            <Route
                path="/leveler/progress"
                render={() => <Progress {...props} />}
            />
        </Switch>
    );
};
