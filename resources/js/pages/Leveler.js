import React, { useEffect } from "react";
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
            <Route
                exact
                path="/leveler"
                render={() => (
                    <Chart user_id={props.user_id} role={props.role} />
                )}
            />

            <Route
                path="/leveler/progress"
                render={() => (
                    <Progress user_id={props.user_id} competitor={props.competitor} />
                )}
            />
        </Switch>
    );
};
