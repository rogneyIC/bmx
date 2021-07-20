import React, { useEffect } from "react";
import LevelerChart from "../components/LevelerChart";
import Progress from "../components/Progress";
import { Switch, Route } from "react-router-dom";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    });
    return (
        <Switch>
            <Route path="/leveler/progress" component={Progress} />
            <Route path="/leveler" component={LevelerChart} />
        </Switch>
    );
};
