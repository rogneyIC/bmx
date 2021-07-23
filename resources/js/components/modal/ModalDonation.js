import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";

export default (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [donation, setDonation] = useState(null);
    const [detail, setDetail] = useState(null);
    const [message, setMessage] = useState(null);

    const [error, setError] = useState(null);

    const sendData = async (e) => {
        e.preventDefault();
        const user_id = props.user_id;
        const data = { user_id, donation, detail, message };
        await axios
            .post("/donation/store", data)
            .then((response) => {
                handleClose();
                toastr.success(
                    "Gracias por su constribución, en breve se le contactará"
                );
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                toastr.warning(error);
            });
    };

    return (
        <Row className="justify-content-md-end">
            <Col xs="auto">
                <Button variant="primary" onClick={handleShow}>
                    Haz tu donación
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header>
                        <Modal.Title>Donación:</Modal.Title>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={handleClose}
                        ></button>
                    </Modal.Header>
                    <Form onSubmit={sendData}>
                        <Modal.Body className="px-4">
                            <Row>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Donación:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="donation"
                                        onChange={(event) =>
                                            setDonation(event.target.value)
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
                                        onChange={(event) =>
                                            setMessage(event.target.value)
                                        }
                                    />
                                </Form.Group>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cancelar
                            </Button>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            </Col>
        </Row>
    );
};
