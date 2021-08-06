import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
import { Formik } from "formik";
import * as yup from "yup";

export default (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const schema = yup.object().shape({
        donation: yup.string().required(),
        detail: yup.string().required(),
        message: yup.string(),
    });

    const sendData = async (e) => {
        let data = {
            user_id: props.user_id,
            donation: e.donation,
            detail: e.detail,
            message: e.message,
        };
        await axios
            .post("/donation/store", data)
            .then((response) => {
                handleClose();
                toastr.success(
                    "Doonación enviada. En espera de la aceptación del administrador"
                );
            })
            .catch((error) => {
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
                    <Formik
                        validationSchema={schema}
                        onSubmit={sendData}
                        initialValues={{
                            donation: "",
                            detail: "",
                            message: "",
                        }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.donation)
                                errors.donation = "Este campo es obligatorio";
                            if (!values.detail)
                                errors.detail = "Este campo es obligatorio";
                            return errors;
                        }}
                    >
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Modal.Body className="px-4">
                                    <Row>
                                        <Form.Group className="mb-3 col">
                                            <Form.Label>Donación:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="donation"
                                                value={values.donation}
                                                onChange={handleChange}
                                                isInvalid={!!errors.donation}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.donation}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-0">
                                        <Form.Group className="mb-3 col">
                                            <Form.Label>Detalles:</Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="detail"
                                                value={values.detail}
                                                onChange={handleChange}
                                                isInvalid={!!errors.detail}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.detail}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group className="mb-3 col">
                                            <Form.Label>
                                                Mensaje opcional:
                                            </Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                rows={5}
                                                name="message"
                                                value={values.message}
                                                onChange={handleChange}
                                            />
                                        </Form.Group>
                                    </Row>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button
                                        variant="secondary"
                                        onClick={handleClose}
                                    >
                                        Cancelar
                                    </Button>
                                    <Button type="submit">Enviar</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            </Col>
        </Row>
    );
};
