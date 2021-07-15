import React, { useState } from "react";
import * as ReactStrap from "reactstrap";
import NOTIFICATIONS_DATA from "./notifications";
import Profile3 from "../../img/users/profile-picture-1.jpg";
import * as FaIcons from "react-icons/fa";
import axios from "axios";

export default (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
    const areNotificationsRead = notifications.reduce(
        (acc, notif) => acc && notif.read,
        true
    );
    const markNotificationsAsRead = () => {
        setTimeout(() => {
            setNotifications(notifications.map((n) => ({ ...n, read: true })));
        }, 300);
    };
    const Notification = (props) => {
        const { link, sender, image, time, message, read = false } = props;
        const readClassName = read ? "" : "text-danger";

        return (
            <ListGroup.Item
                action
                href={link}
                className="border-bottom border-light"
            >
                <Row className="align-items-center">
                    <Col className="col-auto">
                        {/* <Image
                            src={image}
                            className="user-avatar lg-avatar rounded-circle"
                        /> */}
                        <img
                            src={image}
                            className="user-avatar lg-avatar rounded-circle"
                        />
                    </Col>
                    <Col className="ps-0 ms--2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h4 className="h6 mb-0 text-small">{sender}</h4>
                            </div>
                            <div className="text-end">
                                <small className={readClassName}>{time}</small>
                            </div>
                        </div>
                        <p className="font-small mt-1 mb-0">{message}</p>
                    </Col>
                </Row>
            </ListGroup.Item>
        );
    };

    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    return (
        <div>
            <ReactStrap.Navbar expand="md">
                <ReactStrap.NavbarBrand>
                    <ReactStrap.Form inline className="navbar-search">
                        <ReactStrap.FormGroup
                            id="topbarSearch"
                            className="mb-2 mr-sm-2 mb-sm-0"
                        >
                            <ReactStrap.InputGroup>
                                <ReactStrap.InputGroupText>
                                    <FaIcons.FaSearch />
                                </ReactStrap.InputGroupText>
                                <ReactStrap.Input
                                    className="form-control me-2"
                                    type="search"
                                    id="search-nav"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                            </ReactStrap.InputGroup>
                        </ReactStrap.FormGroup>
                    </ReactStrap.Form>
                </ReactStrap.NavbarBrand>

                <ReactStrap.NavbarToggler onClick={toggle} />
                <ReactStrap.Collapse isOpen={isOpen} navbar>
                    <ReactStrap.Nav
                        className="ms-auto align-items-center"
                        navbar
                    >
                        <ReactStrap.Dropdown
                            nav
                            inNavbar
                            toggle={markNotificationsAsRead}
                        >
                            <ReactStrap.DropdownToggle
                                nav
                                className="icon-notifications me-lg-2"
                            >
                                <span className="icon icon-sm">
                                    <FaIcons.FaBell className="bell-shake" />
                                    {areNotificationsRead ? null : (
                                        <span className="icon-badge rounded-circle unread-notifications" />
                                    )}
                                </span>
                            </ReactStrap.DropdownToggle>
                            <ReactStrap.DropdownMenu>
                                <ReactStrap.ListGroup>
                                    <ReactStrap.NavLink
                                        href="#"
                                        className="text-center text-primary fw-bold border-bottom border-light py-3"
                                    >
                                        Notifications
                                    </ReactStrap.NavLink>
                                    <ReactStrap.ListGroupItem>
                                        Cras justo odio
                                    </ReactStrap.ListGroupItem>
                                    <ReactStrap.ListGroupItem>
                                        Dapibus ac facilisis in
                                    </ReactStrap.ListGroupItem>
                                    <ReactStrap.ListGroupItem>
                                        Morbi leo risus
                                    </ReactStrap.ListGroupItem>
                                    <ReactStrap.ListGroupItem>
                                        Porta ac consectetur ac
                                    </ReactStrap.ListGroupItem>
                                    <ReactStrap.ListGroupItem>
                                        Vestibulum at eros
                                    </ReactStrap.ListGroupItem>

                                    <ReactStrap.DropdownItem className="text-center text-primary fw-bold py-3">
                                        View all
                                    </ReactStrap.DropdownItem>
                                </ReactStrap.ListGroup>
                            </ReactStrap.DropdownMenu>
                        </ReactStrap.Dropdown>

                        <ReactStrap.UncontrolledDropdown nav inNavbar>
                            <ReactStrap.DropdownToggle nav>
                                <div className="media d-flex align-items-center">
                                    <img
                                        src={Profile3}
                                        className="user-avatar md-avatar rounded-circle"
                                    />
                                    <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                        <span className="mb-0 font-small fw-bold">
                                            {props.user}
                                        </span>
                                    </div>
                                </div>
                            </ReactStrap.DropdownToggle>
                            <ReactStrap.DropdownMenu
                                right
                                className="user-dropdown"
                            >
                                <ReactStrap.DropdownItem>
                                    <FaIcons.FaUserCircle className="me-2" /> Mi
                                    perfil
                                </ReactStrap.DropdownItem>
                                <ReactStrap.DropdownItem>
                                    <FaIcons.FaCog className="me-2" />{" "}
                                    Configuraciones
                                </ReactStrap.DropdownItem>
                                <ReactStrap.DropdownItem>
                                    <FaIcons.FaEnvelopeOpen className="me-2" />{" "}
                                    Mensajes
                                </ReactStrap.DropdownItem>
                                <ReactStrap.DropdownItem>
                                    <FaIcons.FaUserShield className="me-2" />{" "}
                                    Soporte
                                </ReactStrap.DropdownItem>
                                <ReactStrap.DropdownItem divider />
                                <ReactStrap.DropdownItem onClick={handleLogout}>
                                    <FaIcons.FaSignOutAlt className="text-danger me-2" />{" "}
                                    Cerrar sesión
                                </ReactStrap.DropdownItem>
                            </ReactStrap.DropdownMenu>
                        </ReactStrap.UncontrolledDropdown>
                    </ReactStrap.Nav>
                </ReactStrap.Collapse>
            </ReactStrap.Navbar>
        </div>
    );
};
