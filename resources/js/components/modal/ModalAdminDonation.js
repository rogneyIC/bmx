import axios from "axios";
import { Button, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
import { Formik } from "formik";
import * as yup from "yup";

export default (props) => {
    const handleClose = () => props.setShow(false);

    const schema = yup.object().shape({
        donation: yup.string().required(),
        detail: yup.string().required(),
        destiny: yup.string().required(),
        accumulated: yup.string().required(),
    });

    const sendData = async (e) => {
        const data = {
            id: props.donation_id,
            donation: e.donation,
            detail: e.detail,
            message: e.message,
            destiny: e.destiny,
            accumulated: e.accumulated,
        };
        await axios
            .post("/donation/update", data)
            .then((response) => {
                handleClose();
                toastr.success("Donación aptualizada con éxito");
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    const handleDelete = async () => {
        await axios
            .post("/donation/delete", { id: props.donation_id })
            .then((response) => {
                handleClose();
                toastr.success("Donación eliminada con éxito");
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    return (
        <Modal show={props.show} onHide={handleClose} size="lg" centered>
            <Modal.Header>
                <Modal.Title>Donación:</Modal.Title>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Formik
                enableReinitialize
                validationSchema={schema}
                onSubmit={sendData}
                initialValues={{
                    name: props.name,
                    phone: props.phone,
                    instagram: props.instagram,
                    donation: props.donation,
                    detail: props.detail,
                    message: props.message_optional,
                    destiny: "",
                    accumulated: "",
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.donation)
                        errors.donation = "Este campo es obligatorio";
                    if (!values.detail)
                        errors.detail = "Este campo es obligatorio";
                    if (!values.destiny)
                        errors.destiny = "Este campo es obligatorio";
                    if (!values.accumulated)
                        errors.accumulated = "Este campo es obligatorio";
                    return errors;
                }}
            >
                {({ handleSubmit, handleChange, values, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Modal.Body className="px-4 overflow">
                            <Row>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Nombre:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        value={values.name}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Número:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={values.phone}
                                        disabled
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Instagram:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="instagram"
                                        value={values.instagram}
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
                                        value={values.donation}
                                        onChange={handleChange}
                                        isInvalid={!!errors.donation}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.donation}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Destino:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="destiny"
                                        value={values.destiny}
                                        onChange={handleChange}
                                        isInvalid={!!errors.destiny}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.destiny}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Vuelto acumulado:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="accumulated"
                                        value={values.accumulated}
                                        onChange={handleChange}
                                        isInvalid={!!errors.accumulated}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.accumulated}
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
                                    <Form.Label>Mensaje opcional:</Form.Label>
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
                )}
            </Formik>
        </Modal>
    );
};
