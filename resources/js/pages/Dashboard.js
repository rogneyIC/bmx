import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarNav from "../components/NavbarNav";
import Home from "./Home";
import What from "./What";
import Donation from "./Donation";
import Leveler from "./Leveler";
import Trip from "./Trip";
import Datatec from "./Datatec";

function Dashboard() {
    const user = JSON.parse(document.getElementById("main").dataset.user);
    const role = document.getElementById("main").dataset.role;
    const refSidebar = useRef();
    const refMainPanel = useRef();

    return (
        <Router>
            <div className="sidebar-parent" ref={refSidebar}>
                <Sidebar />
            </div>
            <div className="main-panel" ref={refMainPanel}>
                <NavbarNav user={user} role={role} />
                <Route
                    path="/home"
                    render={(props) => (
                        <Home
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                        />
                    )}
                />
                <Route
                    path="/what"
                    render={(props) => (
                        <What
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                        />
                    )}
                />
                <Route
                    path="/donation"
                    render={(props) => (
                        <Donation
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                            user_id={user.id}
                        />
                    )}
                />
                <Route
                    path="/leveler"
                    render={(props) => (
                        <Leveler
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                        />
                    )}
                />
                <Route
                    path="/Trip"
                    render={(props) => (
                        <Trip
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                        />
                    )}
                />
                <Route
                    path="/Datatec"
                    render={(props) => (
                        <Datatec
                            {...props}
                            refSidebar={refSidebar}
                            refMainPanel={refMainPanel}
                        />
                    )}
                />
            </div>
        </Router>
    );
}

export default Dashboard;
if (document.getElementById("main"))
    ReactDOM.render(<Dashboard />, document.getElementById("main"));
