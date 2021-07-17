import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarNav from "../components/NavbarNav";
import Home from "./Home";
import What from "./What";
import Donation from "./Donation";
import Leveler from "./Leveler";
import Trip from "./Trip";
import DateTec from "./DateTec";

function Dashboard() {
    const user = JSON.parse(document.getElementById("main").dataset.user);
    const role = document.getElementById("main").dataset.role;
    return (
        <Router>
            <Sidebar />
            <div className="main-panel">
                <NavbarNav user={user} role={role} />
                <Route path="/home" component={Home} />
                <Route path="/what" component={What} />
                <Route path="/donation" component={Donation} />
                <Route path="/leveler" component={Leveler} />
                <Route path="/Trip" component={Trip} />
                <Route path="/DateTec" component={DateTec} />
            </div>
        </Router>
    );
}

export default Dashboard;
if (document.getElementById("main"))
    ReactDOM.render(<Dashboard />, document.getElementById("main"));
