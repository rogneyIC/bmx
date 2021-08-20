import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import NavbarNav from "../components/NavbarNav";
import Home from "./Home";
import What from "./What";
import Donation from "./Donation";
import Trip from "./Trip";
import Datatec from "./Datatec";
import toastr from "toastr";
import Chart from "../components/Chart";
import Progress from "./Progress";
import Profile from "../components/Profile";
import Loader from "react-loader-spinner";
import { Col, Row, ProgressBar } from "react-bootstrap";

function Dashboard() {
    const user = JSON.parse(document.getElementById("main").dataset.user);
    const role = document.getElementById("main").dataset.role;
    const refSidebar = useRef();
    const refMainPanel = useRef();
    const [competitor, setCompetitor] = useState(false);
    const refLoader = useRef();

    useEffect(async () => {
        await axios
            .post("/user/competitor", { id: user.id })
            .then((response) => {
                if (response.data.competitor) setCompetitor(true);
                refLoader.current.style.display = "none";
            })
            .catch((error) => {
                toastr.warning(error);
            });
    }, []);

    return (
        <>
            <div ref={refLoader}>
                <div className="loader d-grid align-content-center justify-content-center text-center">
                    <Loader
                        type="Puff"
                        color="#00BFFF"
                        height={150}
                        width={150}
                        visible={true}
                        className="row"
                    />
                    <ProgressBar animated now={100} label="Cargando..."/>
                </div>
            </div>
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
                                role={role}
                            />
                        )}
                    />
                    <Switch>
                        <Route
                            exact
                            path="/leveler"
                            render={(props) => (
                                <Chart
                                    {...props}
                                    {...user}
                                    refSidebar={refSidebar}
                                    refMainPanel={refMainPanel}
                                    competitor={competitor}
                                    setCompetitor={setCompetitor}
                                    role={role}
                                    refLoader={refLoader}
                                />
                            )}
                        />
                        <Route
                            path="/leveler/progress"
                            render={(props) => (
                                <Progress
                                    {...props}
                                    {...user}
                                    refSidebar={refSidebar}
                                    refMainPanel={refMainPanel}
                                    competitor={competitor}
                                />
                            )}
                        />
                    </Switch>
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
                    <Route
                        path="/Profile"
                        render={(props) => (
                            <Profile
                                {...props}
                                refSidebar={refSidebar}
                                refMainPanel={refMainPanel}
                                user={user}
                                role={role}
                            />
                        )}
                    />
                </div>
            </Router>
        </>
    );
}

export default Dashboard;
if (document.getElementById("main"))
    ReactDOM.render(<Dashboard />, document.getElementById("main"));
