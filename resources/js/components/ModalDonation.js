import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";

export default () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toastrShow = () => {
        toastr.success(
            "Gracias por su constribución, en breve se le contactará"
        );
    };

    const send = () => {
        handleClose();
        toastrShow();
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
                    <Modal.Body className="px-4">
                        <Form>
                            <Row>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nombre"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Donación:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Donación"
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Número de contacto:</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="Número de teléfono"
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Usuario instagram:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Usuario de instagram"
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-0">
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Detalles:</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Mensaje opcional:</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Row>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="primary" onClick={send}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Col>
        </Row>
    );
};
