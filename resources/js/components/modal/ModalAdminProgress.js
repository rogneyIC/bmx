import axios from "axios";
import { Button, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
import { Formik } from "formik";
import * as yup from "yup";

export default (props) => {
    const handleClose = () => props.setShow(false);

    const schema = yup.object().shape({
        street: yup.string().required(),
        park: yup.string().required(),
        dirt: yup.string().required(),
        link: yup.string().required(),
        point: yup.string().required(),
    });

    const sendData = async (e) => {
        const data = {
            user_id: props.user_id,
            street: e.street,
            park: e.park,
            dirt: e.dirt,
            link: e.link,
            point: e.point,
        };
        await axios
            .post("/progress/update", data)
            .then((response) => {
                handleClose();
                toastr.success("Progreso del usuario aptualizado con éxito");
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    const handleDelete = async () => {
        const id = props.progress_id;
        await axios
            .post("/progress/delete", id)
            .then((response) => {
                handleClose();
                toastr.success("Progreso eliminado con éxito");
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    return (
        <Modal show={props.show} onHide={handleClose} size="lg" centered>
            <Modal.Header>
                <Modal.Title>Progreso:</Modal.Title>
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
                    street: props.street,
                    park: props.park,
                    dirt: props.dirt,
                    link: props.link,
                    point: props.point,
                }}
                validate={(values) => {
                    const errors = {};
                    if (!values.street)
                        errors.trick = "Este campo es obligatorio";
                    if (!values.link) errors.link = "Este campo es obligatorio";
                    if (!values.point)
                        errors.point = "Este campo es obligatorio";
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
                                    <Form.Label>Link:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="link"
                                        value={values.link}
                                        onChange={handleChange}
                                        isInvalid={!!errors.link}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.link}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 col-2">
                                    <Form.Label>Puntos:</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="point"
                                        value={values.point}
                                        onChange={handleChange}
                                        isInvalid={!!errors.point}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.point}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Calle:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="street"
                                        value={values.street}
                                        onChange={handleChange}
                                        isInvalid={!!errors.street}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.street}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Parque:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="park"
                                        value={values.park}
                                        onChange={handleChange}
                                        isInvalid={!!errors.park}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.park}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className="mb-3 col">
                                    <Form.Label>Tierra:</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="dirt"
                                        value={values.dirt}
                                        onChange={handleChange}
                                        isInvalid={!!errors.dirt}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.dirt}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit">Aceptar</Button>
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
