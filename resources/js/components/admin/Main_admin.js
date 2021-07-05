import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home_admin";
import What from "./What_admin";
import Ratings from "./Ratings_admin";
import Levelers from "./Levelers_admin";
import { Route, BrowserRouter as Router } from "react-router-dom";
import ScrollButton from "../common/ScrollButton";
import { Content, Heading } from "../common/Styles";

function Main_admin() {
    return (
        <Router>
            <Route path="/home" component={Home}></Route>
            <Route path="/what" component={What}></Route>
            <Route path="/ratings" component={Ratings}></Route>
            <Route path="/levelers" component={Levelers}></Route>
            {/* <Content /> */}
            <ScrollButton />
        </Router>
    );
}

export default Main_admin;
if (document.getElementById("main_admin"))
    ReactDOM.render(<Main_admin />, document.getElementById("main_admin"));
