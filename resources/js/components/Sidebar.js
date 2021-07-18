import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import sidebarImage from "../../img/sidebarFond.jpg";
import logo from "../../img/logo-sidebar.svg";

export default (props) => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    const onCollapse = () => setShow(!show);
    return (
        <div className="sidebar-inner" data-image={sidebarImage}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: "url(" + sidebarImage + ")",
                }}
            ></div>
            <div className="sidebar-wrapper">
                <div className="logo d-flex align-items-center justify-content-center">
                    <div className="simple-text logo-mini mx-1">
                        <div className="logo-img">
                            <img src={logo} alt="..." />
                        </div>
                    </div>
                </div>
                <Nav vertical className="pt-3 pb-3 px-4">
                    <NavItem>
                        <NavLink
                            to="/home"
                            activeClassName="active"
                            className="nav-link home"
                        >
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/what"
                            activeClassName="active"
                            className="nav-link what"
                        >
                            ¿Quiénes somos?
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/donation"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Donaciones
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/leveler"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Nivelador
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/trip"
                            activeClassName="active"
                            className="nav-link"
                        >
                            TRIP
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            to="/datatec"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Datos técnicos
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>
    );
};
