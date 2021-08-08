import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    FaCog,
    FaDonate,
    FaEnvelopeOpen,
    FaHistory,
    FaSignOutAlt,
    FaUserCircle,
    FaUserShield,
} from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { Container, Navbar, Nav, Dropdown, NavItem, ListGroup } from "react-bootstrap";
import toastr from "toastr";
import NotificationDonation from "./NotificationDonation";
import NotificationProgress from "./NotificationProgress";
import { useHistory } from "react-router-dom";

export default (props) => {
    const [listDonation, setListDonation] = useState([]);
    const [listProgress, setListProgress] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .post("/donation/list", { accepted: false })
                .then((response) => {
                    response.data.map((item) => {
                        item.read = item.accepted;
                    });
                    setListDonation(response.data);
                })
                .catch((error) => {
                    toastr.error(error);
                });

            await axios
                .post("/progress/list")
                .then((response) => {
                    response.data.map((item) => {
                        item.read = item.accepted;
                    });
                    setListProgress(response.data);
                })
                .catch((error) => {
                    toastr.error(error);
                });
        };
        setInterval(function () {
            fetchData();
        }, 5000);
        return () => {
            setListDonation([]);
            setListProgress([]);
        };
    }, []);

    const notDonation = () => {
        toastr.info("No existen donaciones pendientes");
    };

    const notProgress = () => {
        toastr.info("No existen progresos de usuarios pendientes");
    };

    const areNotificationsRead = listDonation.reduce(
        (acc, notif) => acc && notif.read,
        true
    );

    const areNotificationsProgressRead = listProgress.reduce(
        (acc, notif) => acc && notif.read,
        true
    );

    /*const markNotificationsAsRead = () => {
        setTimeout(() => {
            setListDonation(listDonation.map((n) => ({ ...n, read: true })));
        }, 1000);
    };*/

    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    const srcImg = "/images/avatars/" + props.user.photo;

    let history = useHistory();
    const showProfile = (e) => {
        history.push("/profile", e.target.text);
    };

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid className="justify-content-end">
                <Nav className="align-items-center">
                    {props.role == "admin" ? (
                        listDonation.length == 0 ? (
                            <NavItem
                                className="icon-notifications me-lg-2 only-icon"
                                onClick={notDonation}
                            >
                                <span className="icon icon-sm">
                                    <FaDonate color="white" />
                                </span>
                            </NavItem>
                        ) : (
                            <Dropdown
                                as={Nav.Item}
                                // onToggle={markNotificationsAsRead}
                            >
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="icon-notifications me-lg-2"
                                >
                                    <span className="icon icon-sm">
                                        <FaDonate color="white" />
                                        {areNotificationsRead ? null : (
                                            <span className="icon-badge rounded-circle unread-notifications" />
                                        )}
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="notification-dropdown py-0 mt-2">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="text-center text-primary fw-bold py-3">
                                            Donaciones pendintes
                                        </ListGroup.Item>

                                        {listDonation.map((n) => (
                                            <NotificationDonation
                                                key={n.donation_id}
                                                {...n}
                                            />
                                        ))}

                                        <Dropdown.Item className="text-center text-primary fw-bold py-3">
                                            Ver todas
                                        </Dropdown.Item>
                                    </ListGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        )
                    ) : null}

                    {props.role == "admin" ? (
                        listProgress.length == 0 ? (
                            <NavItem
                                className="icon-notifications me-lg-2 only-icon"
                                onClick={notProgress}
                            >
                                <span className="icon icon-sm">
                                    <GiProgression color="white" />
                                </span>
                            </NavItem>
                        ) : (
                            <Dropdown as={Nav.Item}>
                                <Dropdown.Toggle
                                    as={Nav.Link}
                                    className="icon-notifications me-lg-2"
                                >
                                    <span className="icon icon-sm">
                                        <GiProgression color="white" />
                                        {areNotificationsProgressRead ? null : (
                                            <span className="icon-badge rounded-circle unread-notifications" />
                                        )}
                                    </span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="notification-dropdown py-0 mt-2">
                                    <ListGroup className="list-group-flush">
                                        <ListGroup.Item className="text-center text-primary fw-bold py-3">
                                            Progresos de usuarios pendintes
                                        </ListGroup.Item>

                                        {listProgress.map((n) => (
                                            <NotificationProgress
                                                key={n.progress_id}
                                                {...n}
                                            />
                                        ))}

                                        <Dropdown.Item className="text-center text-primary fw-bold py-3">
                                            Ver todas
                                        </Dropdown.Item>
                                    </ListGroup>
                                </Dropdown.Menu>
                            </Dropdown>
                        )
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
                                        {props.user.name}
                                    </span>
                                </div>
                            </div>
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="user-dropdown">
                            <Dropdown.Item onClick={showProfile}>
                                <FaUserCircle className="me-2" />
                                Perfil
                            </Dropdown.Item>
                            <Dropdown.Item onClick={showProfile}>
                                <FaHistory className="me-2" />
                                Historial
                            </Dropdown.Item>
                            <Dropdown.Item onClick={showProfile}>
                                <FaCog className="me-2" />
                                Configuraciones
                            </Dropdown.Item>
                            <Dropdown.Item onClick={showProfile}>
                                <FaEnvelopeOpen className="me-2" />
                                Mensajes
                            </Dropdown.Item>
                            <Dropdown.Item onClick={showProfile}>
                                <FaUserShield className="me-2" />
                                Soporte
                            </Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item onClick={handleLogout}>
                                <FaSignOutAlt className="text-danger me-2" />
                                Cerrar sesión
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    );
};
