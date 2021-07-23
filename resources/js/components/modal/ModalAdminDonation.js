import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";

export default (props) => {
    const handleClose = () => props.setShow(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [donation, setDonation] = useState("");
    const [destiny, setDestiny] = useState("");
    const [accumulated, setAccumulated] = useState("");
    const [detail, setDetail] = useState("");
    const [message, setMessage] = useState("");

    const onShow = () => {
        setName(props.props.user_name);
        setPhone(props.props.user_phone);
        setInstagram(props.props.user_instagram);
        setDonation(props.props.donation);
        setDetail(props.props.detail);
        setMessage(
            props.props.message_optional ? props.props.message_optional : ""
        );
    };

    const sendData = async (e) => {
        e.preventDefault();
        const id = props.props.donation_id;
        const data = {
            id,
            donation,
            detail,
            message,
            destiny,
            accumulated,
        };
        await axios
            .post("/donation/update", data)
            .then((response) => {
                console.log(response);
                handleClose();
                toastr.success("Donación aptualizada con éxito");
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                toastr.warning(error);
            });
    };

    const handleDelete = async () => {
        const id = props.props.donation_id;
        await axios
            .post("/donation/delete", id)
            .then((response) => {
                console.log(response);
                handleClose();
                toastr.success("Donación eliminada con éxito");
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                toastr.warning(error);
            });
    };

    return (
        <Modal
            show={props.show}
            onHide={handleClose}
            size="lg"
            onShow={onShow}
            centered
        >
            <Modal.Header>
                <Modal.Title>Donación:</Modal.Title>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Form onSubmit={sendData}>
                <Modal.Body className="px-4 overflow">
                    <Row>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Número:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={phone}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Instagram:</Form.Label>
                            <Form.Control
                                type="text"
                                name="instagram"
                                value={instagram}
                                disabled
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Donación:</Form.Label>
                            <Form.Control
                                type="text"
                                name="donation"
                                value={donation}
                                onChange={(event) =>
                                    setDonation(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Destino:</Form.Label>
                            <Form.Control
                                type="text"
                                name="destiny"
                                onChange={(event) =>
                                    setDestiny(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Vuelto acumulado:</Form.Label>
                            <Form.Control
                                type="text"
                                name="accumulated"
                                onChange={(event) =>
                                    setAccumulated(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Row>
                    <Row className="mb-0">
                        <Form.Group className="mb-3 col">
                            <Form.Label>Detalles:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="detail"
                                value={detail}
                                onChange={(event) =>
                                    setDetail(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Mensaje opcional:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={5}
                                name="message"
                                value={message}
                                onChange={(event) =>
                                    setMessage(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Aceptar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
