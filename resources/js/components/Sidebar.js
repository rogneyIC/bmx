import React, { useState } from "react";
import { useLocation, NavLink, Link } from "react-router-dom";
import sidebarFond from "../../img/sidebarFond.jpg";
import sidebarLogo from "../../img/logo-sidebar.svg";
import { Image, Nav } from "react-bootstrap";
import {
    Menu,
    MenuItem,
    ProSidebar,
    SidebarContent,
    SidebarHeader,
} from "react-pro-sidebar";
import {
    FaAccessibleIcon,
    FaDonate,
    FaHome,
    FaQuestion,
    FaTable,
    FaTeeth,
} from "react-icons/fa";

export default ({ toggled, collapsed, handleToggleSidebar }) => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const showClass = show ? "show" : "";
    const onCollapse = () => setShow(!show);
    return (
        <ProSidebar
            breakPoint="md"
            image={sidebarFond}
            toggled={toggled}
            collapsed={collapsed}
            onToggle={handleToggleSidebar}
        >
            <SidebarHeader>
                <a className="brand-link" href="#">
                    <Image src={sidebarLogo} fluid />
                </a>
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem icon={<FaHome />} active>
                        Inicio
                        <Link to="/home" />
                    </MenuItem>
                    <MenuItem icon={<FaQuestion />}>
                        ¿Qués es?
                        <Link to="/what" />
                    </MenuItem>
                    <MenuItem icon={<FaAccessibleIcon />}>
                        Nivelador
                        <Link to="/leveler" />
                    </MenuItem>
                    <MenuItem icon={<FaDonate />}>
                        Donaciones
                        <Link to="/donation" />
                    </MenuItem>
                    <MenuItem icon={<FaTable />}>
                        TRIP
                        <Link to="/trip" />
                    </MenuItem>
                    <MenuItem icon={<FaTeeth />}>
                        Datos técnicos
                        <Link to="/datatec" />
                    </MenuItem>
                </Menu>
            </SidebarContent>
        </ProSidebar>
        /*<div className="sidebar-inner" data-image={sidebarImage}>
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
                            to="/leveler"
                            activeClassName="active"
                            className="nav-link"
                        >
                            Nivelador
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
        </div>*/
    );
};
