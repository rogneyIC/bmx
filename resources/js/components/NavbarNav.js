import React, { useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import {
    Col,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Form,
    FormGroup,
    Input,
    InputGroup,
    InputGroupText,
    ListGroup,
    ListGroupItem,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavLink,
    Row,
    UncontrolledDropdown,
} from "reactstrap";

import NOTIFICATIONS_DATA from "./notifications";

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
            <ListGroupItem
                tag="a"
                action
                href={link}
                className="border-bottom border-light"
            >
                <Row className="align-items-center mb-0">
                    <Col className="col-auto">
                        <img
                            src={image}
                            className="user-avatar lg-avatar rounded-circle"
                        />
                    </Col>
                    <Col className="ps-0 ms-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-0 text-small">{sender}</h6>
                            </div>
                            <div className="text-end">
                                <small className={readClassName}>{time}</small>
                            </div>
                        </div>
                        <p className="font-small mt-1 mb-0">{message}</p>
                    </Col>
                </Row>
            </ListGroupItem>
        );
    };

    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    let srcImg = "/images/avatars/" + props.user.user_photo;

    return (
        <Navbar expand="md">
            <NavbarBrand>
                <Form inline className="navbar-search">
                    <FormGroup
                        id="topbarSearch"
                        className="mb-2 mr-sm-2 mb-sm-0"
                    >
                        <InputGroup>
                            <InputGroupText>
                                <FaIcons.FaSearch />
                            </InputGroupText>
                            <Input
                                className="form-control me-2"
                                type="search"
                                id="search-nav"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </InputGroup>
                    </FormGroup>
                </Form>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />

            <Collapse isOpen={isOpen} navbar>
                <Nav className="ms-auto align-items-center" navbar>
                    {props.role == "admin" ? (
                        <UncontrolledDropdown
                            nav
                            inNavbar
                            onToggle={markNotificationsAsRead}
                        >
                            <DropdownToggle
                                nav
                                className="icon-notifications me-lg-2"
                            >
                                <span className="icon icon-sm">
                                    <FaIcons.FaBell className="bell-shake" />
                                    {areNotificationsRead ? null : (
                                        <span className="icon-badge rounded-circle unread-notifications" />
                                    )}
                                </span>
                            </DropdownToggle>
                            <DropdownMenu className="notification-dropdown py-0 mt-2">
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem
                                        tag="a"
                                        href="#"
                                        className="text-center text-primary fw-bold py-3"
                                    >
                                        Notificaciones
                                    </ListGroupItem>

                                    {notifications.map((n) => (
                                        <Notification
                                            key={`notification-${n.id}`}
                                            {...n}
                                        />
                                    ))}

                                    <DropdownItem className="text-center text-primary fw-bold py-3">
                                        View all
                                    </DropdownItem>
                                </ListGroup>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    ) : null}

                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav>
                            <div className="media d-flex align-items-center">
                                <img
                                    src={srcImg}
                                    className="user-avatar md-avatar rounded-circle"
                                />
                                <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                                    <span className="mb-0 font-small fw-bold">
                                        {props.user.user_name}
                                    </span>
                                </div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu right className="user-dropdown">
                            <DropdownItem>
                                <FaIcons.FaUserCircle className="me-2" /> Mi
                                perfil
                            </DropdownItem>
                            <DropdownItem>
                                <FaIcons.FaCog className="me-2" />{" "}
                                Configuraciones
                            </DropdownItem>
                            <DropdownItem>
                                <FaIcons.FaEnvelopeOpen className="me-2" />{" "}
                                Mensajes
                            </DropdownItem>
                            <DropdownItem>
                                <FaIcons.FaUserShield className="me-2" />{" "}
                                Soporte
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem onClick={handleLogout}>
                                <FaIcons.FaSignOutAlt className="text-danger me-2" />{" "}
                                Cerrar sesión
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
            </Collapse>
        </Navbar>
    );
};
