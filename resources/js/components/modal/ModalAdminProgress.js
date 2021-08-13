import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
/*import { Formik } from "formik";
import * as yup from "yup";*/

export default (props) => {
    const handleClose = () => props.setShow(false);
    const [street, setStreet] = useState("");
    const [park, setPark] = useState("");
    const [dirt, setDirt] = useState("");
    const [link_street, setLink_street] = useState("");
    const [link_park, setLink_park] = useState("");
    const [link_dirt, setLink_dirt] = useState("");
    const [point, setPoint] = useState("");

    /*const schema = yup.object().shape({
        street: yup.string().required(),
        park: yup.string().required(),
        dirt: yup.string().required(),
        link: yup.string().required(),
        link: yup.string().required(),
        link: yup.string().required(),
        point: yup.string().required(),
    });*/

    useEffect(() => {
        if (props.street) setStreet(props.street);
        if (props.park) setPark(props.park);
        if (props.dirt) setDirt(props.dirt);
        if (props.link_street) setLink_street(props.link_street);
        if (props.link_park) setLink_park(props.link_park);
        if (props.link_dirt) setLink_dirt(props.link_dirt);
    }, []);

    const sendData = async (e) => {
        e.preventDefault();
        let valid = true;
        $(".form-control").removeClass("is-invalid");
        if (
            street.trim() == "" &&
            park.trim() == "" &&
            dirt.trim() == "" &&
            link_street.trim() == "" &&
            link_park.trim() == "" &&
            link_dirt.trim() == ""
        ) {
            toastr.warning("Debe poner al menos un truco");
        }
        if (street.trim() != "" && link_street.trim() == "") {
            $(".form-control[name='link_street']").addClass("is-invalid");
            valid = false;
        }
        if (link_street.trim() != "" && street.trim() == "") {
            $(".form-control[name='street']").addClass("is-invalid");
            valid = false;
        }
        if (park.trim() != "" && link_park.trim() == "") {
            $(".form-control[name='link_park']").addClass("is-invalid");
            valid = false;
        }
        if (link_park.trim() != "" && park.trim() == "") {
            $(".form-control[name='park']").addClass("is-invalid");
            valid = false;
        }
        if (dirt.trim() != "" && link_dirt.trim() == "") {
            $(".form-control[name='link_dirt']").addClass("is-invalid");
            valid = false;
        }
        if (link_dirt.trim() != "" && dirt.trim() == "") {
            $(".form-control[name='dirt']").addClass("is-invalid");
            valid = false;
        }
        if (point.trim() == "") {
            $(".form-control[name='point']").addClass("is-invalid");
            valid = false;
        }
        if (valid) {
            let data = {
                id: props.progress_id,
                street: street,
                park: park,
                dirt: dirt,
                link_street: link_street,
                link_park: link_park,
                link_dirt: link_dirt,
                point: point,
            };

            await axios
                .post("/progress/update", data)
                .then((response) => {
                    handleClose();
                    toastr.success(
                        "Progreso del usuario aptualizado con éxito"
                    );
                })
                .catch((error) => {
                    toastr.warning(error);
                });
        }
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
        <Modal show={props.show} onHide={handleClose} size="xl" centered>
            <Modal.Header>
                <Modal.Title>Progreso:</Modal.Title>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Form onSubmit={sendData}>
                <Modal.Body className="px-4 overflow">
                    <Row className="mb-3">
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en calle:">
                                    <Form.Control
                                        name="street"
                                        value={street}
                                        placeholder="Truco en calle:"
                                        onChange={(event) =>
                                            setStreet(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        name="link_street"
                                        value={link_street}
                                        placeholder="Link:"
                                        onChange={(event) =>
                                            setLink_street(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en parque:">
                                    <Form.Control
                                        name="park"
                                        value={park}
                                        placeholder="Truco en parque:"
                                        onChange={(event) =>
                                            setPark(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        name="link_park"
                                        value={link_park}
                                        placeholder="Link:"
                                        onChange={(event) =>
                                            setLink_park(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en tierra:">
                                    <Form.Control
                                        name="dirt"
                                        value={dirt}
                                        placeholder="Truco en tierra:"
                                        onChange={(event) =>
                                            setDirt(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        name="link_dirt"
                                        value={link_dirt}
                                        placeholder="Link:"
                                        onChange={(event) =>
                                            setLink_dirt(event.target.value)
                                        }
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Este campo es obligatorio
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col} xs={2}>
                            <FloatingLabel label="Puntos:">
                                <Form.Control
                                    type="number"
                                    name="point"
                                    placeholder="Puntos:"
                                    onChange={(event) =>
                                        setPoint(event.target.value)
                                    }
                                />
                                <Form.Control.Feedback type="invalid">
                                    Este campo es obligatorio
                                </Form.Control.Feedback>
                            </FloatingLabel>
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
            {/* <Formik
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
            </Formik> */}
        </Modal>
    );
};
