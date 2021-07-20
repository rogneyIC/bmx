import React, { useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import sidebarImage from "../../img/sidebarFond.jpg";
import logo from "../../img/logo-sidebar.svg";
import { Image, Nav } from "react-bootstrap";

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
                            <Image src={logo} fluid />
                        </div>
                    </div>
                </div>
                <Nav className="pt-3 pb-3 px-4 flex-column">
                    <Nav.Item>
                        <NavLink
                            to="/home"
                            activeClassName="active"
                            className="nav-link home"
                        >
                            Inicio
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/what"
                            activeClassName="active"
                            className="nav-link what"
                        >
                            ¿Qués es? ¿Cómo funciona?
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/donation"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Donaciones
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/leveler"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Nivelador
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/trip"
                            activeClassName="active"
                            className="nav-link"
                        >
                            TRIP
                        </NavLink>
                    </Nav.Item>
                    <Nav.Item>
                        <NavLink
                            to="/datatec"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Datos técnicos
                        </NavLink>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
};
