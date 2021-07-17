import React from "react";
import LevelerChart from "../components/LevelerChart";
import Progress from "../components/Progress";
import toastr from "toastr";
import { Switch, Route } from "react-router-dom";

class Leveler extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/leveler/progress" component={Progress} />
                <Route path="/leveler" component={LevelerChart} />
            </Switch>
        );
    }
}

export default Leveler;
