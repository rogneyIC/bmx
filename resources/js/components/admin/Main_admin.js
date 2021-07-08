import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "../common/Dashboard";
import Home from "./Home_admin";
import What from "./What_admin";
import Donations from "./Donations_admin";
import Leveler from "./Leveler_admin";
import SliderComp from "../common/SliderComp";
import ScrollButton from "../common/ScrollButton";

function Main_admin() {
    return (
        <Router>
            {/* <Route path="/home" component={Home}></Route>
            <Route path="/what" component={What}></Route>
            <Route path="/donations" component={Donations}></Route>
            <Route path="/leveler" component={Leveler}></Route>
            <SliderComp />
            <ScrollButton /> */}
            <Route path="/home" component={Dashboard}></Route>
        </Router>
    );
}

export default Main_admin;
if (document.getElementById("main_admin"))
    ReactDOM.render(<Main_admin />, document.getElementById("main_admin"));
