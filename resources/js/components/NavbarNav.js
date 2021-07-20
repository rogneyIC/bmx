import React, { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import {
    Container,
    Row,
    Col,
    Navbar,
    Nav,
    Image,
    ListGroup,
    Form,
    InputGroup,
    Dropdown,
} from "react-bootstrap";
import NOTIFICATIONS_DATA from "./notifications";
import crud from "./Crud";
import NotificationDonation from "./NotificationDonation";

export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await crud.listDonation(false);
            setData(res);
        };
        setInterval(function () {
            fetchData();
        }, 10000);
        return () => {
            setData([]);
        };
    }, []);

    //const [isOpen, setIsOpen] = useState(false);
    //const toggle = () => setIsOpen(!isOpen);

    //const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
    const areNotificationsRead = data.reduce(
        (acc, notif) => acc && notif.read,
        true
    );
    const markNotificationsAsRead = () => {
        setTimeout(() => {
            setData(data.map((n) => ({ ...n, read: true })));
        }, 1000);
    };
    /*const Notification = (props) => {
        const { link, sender, image, time, message, read = false } = props;
        const readClassName = read ? "" : "text-danger";

        return (
            <ListGroup.Item
                tag="a"
                action
                href={link}
                className="border-bottom border-light"
            >
                <Row className="align-items-center">
                    <Col className="col-auto">
                        <Image
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
            </ListGroup.Item>
        );
    };*/

    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    const srcImg = "/images/avatars/" + props.user.user_photo;

    return (
        <Navbar expand="md" bg="dark" variant="dark" sticky="top">
            <Container fluid>
                {/* <Navbar.Brand>
                    <Form inline className="navbar-search">
                        <Form.Group
                            id="topbarSearch"
                            className="mb-2 mr-sm-2 mb-sm-0"
                        >
                            <InputGroup>
                                <InputGroup.Text>
                                    <FaIcons.FaSearch />
                                </InputGroup.Text>
                                <Form.Control
                                    type="search"
                                    id="search-nav"
                                    placeholder="Search"
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form>
                </Navbar.Brand> */}
                <Navbar.Toggle aria-controls="nav-bmx" />
                <Navbar.Collapse className="justify-content-end" id="nav-bmx">
                    <Nav className="align-items-center">
                        {props.role == "admin" ? (
                            <Dropdown
                                as={Nav.Item}
                                onToggle={markNotificationsAsRead}
                            >
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="icon-notifications me-lg-2"
                                >
                                    <span className="icon icon-sm">
                                        <FaIcons.FaBell />
                                        {areNotificationsRead ? null : (
                                            <span className="icon-badge rounded-circle unread-notifications" />
                                        )}
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="notification-dropdown py-0 mt-2">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item
                                            tag="a"
                                            href="#"
                                            className="text-center text-primary fw-bold py-3"
                                        >
                                            Notificaciones
                                        </ListGroup.Item>

                                        {data.map((n) => (
                                            <NotificationDonation
                                                key={`data-${n.id}`}
                                                {...n}
                                            />
                                        ))}

                                        <Dropdown.Item className="text-center text-primary fw-bold py-3">
                                            View all
                                        </Dropdown.Item>
                                    </ListGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : null}

                        <Dropdown as={Nav.Item}>
                            <Dropdown.Toggle as={Nav.Link}>
                                <div className="media d-flex align-items-center">
                                    <img
                                        src={srcImg}
                                        className="user-avatar md-avatar rounded-circle"
                                    />
                                    <div className="media-body ms-2 text-white align-items-center d-none d-lg-block">
                                        <span className="mb-0 font-small fw-bold">
                                            {props.user.user_name}
                                        </span>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="user-dropdown">
                                <Dropdown.Item>
                                    <FaIcons.FaUserCircle className="me-2" /> Mi
                                    perfil
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <FaIcons.FaCog className="me-2" />{" "}
                                    Configuraciones
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <FaIcons.FaEnvelopeOpen className="me-2" />{" "}
                                    Mensajes
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <FaIcons.FaUserShield className="me-2" />{" "}
                                    Soporte
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item onClick={handleLogout}>
                                    <FaIcons.FaSignOutAlt className="text-danger me-2" />{" "}
                                    Cerrar sesión
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
