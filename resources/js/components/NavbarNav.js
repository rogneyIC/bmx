import { useEffect, useState } from "react";
import axios from "axios";
import * as FaIcons from "react-icons/fa";
import {
    Container,
    Navbar,
    Nav,
    ListGroup,
    Dropdown,
    NavItem,
} from "react-bootstrap";
import crud from "./Crud";
import NotificationDonation from "./NotificationDonation";
import toastr from "toastr";

export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await crud.listDonation(false);
            setData(res);
        };
        setInterval(function () {
            fetchData();
        }, 5000);
        return () => {
            setData([]);
        };
    }, []);

    const notDonation = () => {
        toastr.info("No existen donaciones pendientes");
    };

    const areNotificationsRead = data.reduce(
        (acc, notif) => acc && notif.read,
        true
    );
    const markNotificationsAsRead = () => {
        setTimeout(() => {
            setData(data.map((n) => ({ ...n, read: true })));
        }, 1000);
    };

    const handleLogout = () => {
        axios.post("/logout").then(() => (location.href = "/"));
    };

    const srcImg = "/images/avatars/" + props.user.user_photo;

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid className="justify-content-end">
                <Nav className="align-items-center">
                    {props.role == "admin" ? (
                        data.length == 0 ? (
                            <NavItem
                                className="icon-notifications me-lg-2 only-icon"
                                onClick={notDonation}
                            >
                                <span className="icon icon-sm">
                                    <FaIcons.FaDonate color="white" />
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
                                        {/* <FaIcons.FaBell /> */}
                                        <FaIcons.FaDonate color="white" />
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

                                        {data.map((n) => (
                                            <NotificationDonation
                                                key={n.donation_id}
                                                {...n}
                                            />
                                        ))}

                                        {data.length != 0 ? (
                                            <Dropdown.Item className="text-center text-primary fw-bold py-3">
                                                Ver todas
                                            </Dropdown.Item>
                                        ) : (
                                            <ListGroup.Item className="text-center text-primary fw-bold py-3">
                                                No hay donaciones pendientes
                                            </ListGroup.Item>
                                        )}
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
            </Container>
        </Navbar>
    );
};
