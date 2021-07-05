import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home_admin";
import What from "./What_admin";
import Donations from "./Donations_admin";
import Leveler from "./Leveler_admin";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ScrollButton from "../common/ScrollButton";

function Main_admin() {
    return (
        <Router>
            <Route path="/home" component={Home}></Route>
            <Route path="/what" component={What}></Route>
            <Route path="/donations" component={Donations}></Route>
            <Route path="/leveler" component={Leveler}></Route>
            <ScrollButton />
        </Router>
    );
}

export default Main_admin;
if (document.getElementById("main_admin"))
    ReactDOM.render(<Main_admin />, document.getElementById("main_admin"));
