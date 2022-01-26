import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import toastr from "toastr";
//import { useHistory } from "react-router-dom";

export default (props) => {
    //let history = useHistory();

    /*const schema = yup.object().shape({
        link: yup.string().required(),
    });*/

    const

    const sendData = async (e) => {
        e.preventDefault();
        /*let data = {
            user_id: props.user_id,
            street: e.street,
            park: e.park,
            dirt: e.dirt,
            linkStreet: e.linkStreet,
            linkPark: e.linkPark,
            linkDirt: e.linkDirt,
        };
        await axios
            .post("/progress/store", data)
            .then((response) => {
                toastr.success(
                    "Progreso enviado. En espera de la aceptación del administrador"
                );
                history.push("/leveler");
            })
            .catch((error) => {
                toastr.warning(error);
            });*/
    };

    return (
        <Form onSubmit={sendData}>
            <Row className="mb-3">
                <Col>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Truco en calle:">
                            <Form.Control
                                name="street"
                                placeholder="Truco en calle:"
                            />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel label="Link:">
                            <Form.Control
                                name="linkStreet"
                                placeholder="Link:"
                            />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Truco en parque:">
                            <Form.Control
                                name="park"
                                placeholder="Truco en parque:"
                            />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel label="Link:">
                            <Form.Control name="linkPark" placeholder="Link:" />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <FloatingLabel label="Truco en tierra:">
                            <Form.Control
                                name="dirt"
                                placeholder="Truco en tierra:"
                            />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                    <Form.Group>
                        <FloatingLabel label="Link:">
                            <Form.Control name="linkDirt" placeholder="Link:" />
                            <Form.Control.Feedback type="invalid">
                                test
                            </Form.Control.Feedback>
                        </FloatingLabel>
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">Enviar</Button>
        </Form>
        /*<Formik
            enableReinitialize
            // validationSchema={schema}
            onSubmit={sendData}
            initialValues={{
                street: "",
                park: "",
                dirt: "",
                linkStreet: "",
                linkPark: "",
                linkDirt: "",
            }}
            validate={(values) => {
                const errors = {};
                if (!values.street || !values.park || !values.dirt) {
                    errors.street = "Uno de estos campos es obligatorio";
                    errors.park = "Uno de estos campos es obligatorio";
                    errors.dirt = "Uno de estos campos es obligatorio";
                }
                if (!values.linkStreet)
                    errors.linkStreet = "Este campo es obligatorio";
                if (!values.linkPark)
                    errors.linkPark = "Este campo es obligatorio";
                if (!values.linkDirt)
                    errors.linkDirt = "Este campo es obligatorio";
                return errors;
            }}
        >
            {({
                handleSubmit,
                handleChange,
                values,
                touched,
                isValid,
                errors,
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en calle:">
                                    <Form.Control
                                        name="street"
                                        placeholder="Truco en calle:"
                                        value={values.street}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.street}
                                        //isValid={!errors.street}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.street}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        type="text"
                                        name="linkStreet"
                                        placeholder="Link:"
                                        value={values.linkStreet}
                                        onChange={handleChange}
                                        //isInvalid={!!errors.linkStreet}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.linkStreet}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en  parque:">
                                    <Form.Control
                                        name="park"
                                        placeholder="Truco en  parque:"
                                        value={values.park}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.park}
                                        //isValid={&& !errors.park}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.park}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        type="text"
                                        name="linkPark"
                                        placeholder="Link:"
                                        value={values.linkPark}
                                        onChange={handleChange}
                                        //isInvalid={!!errors.linkPark}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.linkPark}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <FloatingLabel label="Truco en  tierra:">
                                    <Form.Control
                                        name="dirt"
                                        placeholder="Truco en  tierra:"
                                        value={values.dirt}
                                        onChange={handleChange}
                                        // isInvalid={!!errors.dirt}
                                        //isValid={!errors.dirt}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.dirt}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                            <Form.Group>
                                <FloatingLabel label="Link:">
                                    <Form.Control
                                        type="text"
                                        name="linkDirt"
                                        placeholder="Link:"
                                        value={values.linkDirt}
                                        onChange={handleChange}
                                        //isInvalid={!!errors.linkDirt}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.linkDirt}
                                    </Form.Control.Feedback>
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Enviar</Button>
                </Form>
            )}
        </Formik>*/
    );
};
