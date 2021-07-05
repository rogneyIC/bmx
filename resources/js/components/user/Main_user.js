import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home_user";
import { Route, BrowserRouter as Router } from "react-router-dom";

function Main_user() {
    return (
        <Router>
            <Route path="/home" component={Home}></Route>
        </Router>
    );
}

export default Main_user;
if (document.getElementById("main_user"))
    ReactDOM.render(<Main_user />, document.getElementById("main_user"));
