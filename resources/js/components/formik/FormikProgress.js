import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import toastr from "toastr";
import { useHistory } from "react-router-dom";

export default (props) => {
    let history = useHistory();

    const schema = yup.object().shape({
        link: yup.string().required(),
    });

    const sendData = async (e) => {
        console.log(e);
        let data = {
            user_id: props.user_id,
            street: e.street,
            park: e.park,
            dirt: e.dirt,
            link: e.link,
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
            });
    };

    return (
        <Formik
            enableReinitialize
            validationSchema={schema}
            onSubmit={sendData}
            initialValues={{
                street: "",
                park: "",
                dirt: "",
                link: "",
            }}
            validate={(values) => {
                const errors = {};
                if (!values.street || !values.park || !values.dirt) {
                    errors.street = "Uno de estos campos es obligatorio";
                    errors.park = "Uno de estos campos es obligatorio";
                    errors.dirt = "Uno de estos campos es obligatorio";
                }
                if (!values.link) errors.link = "Este campo es obligatorio";
                return errors;
            }}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <FloatingLabel label="Calle:">
                                <Form.Control
                                    as="textarea"
                                    name="street"
                                    placeholder="Calle:"
                                    value={values.street}
                                    onChange={handleChange}
                                    // isInvalid={!!errors.street}
                                    style={{ height: "110px" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.street}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FloatingLabel label="Parque:">
                                <Form.Control
                                    as="textarea"
                                    name="park"
                                    placeholder="Parque:"
                                    value={values.park}
                                    onChange={handleChange}
                                    // isInvalid={!!errors.park}
                                    style={{ height: "110px" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.park}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <FloatingLabel label="Tierra:">
                                <Form.Control
                                    as="textarea"
                                    name="dirt"
                                    placeholder="Tierra:"
                                    value={values.dirt}
                                    onChange={handleChange}
                                    // isInvalid={!!errors.dirt}
                                    style={{ height: "110px" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.dirt}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="validationFormik02">
                            <FloatingLabel label="Link:">
                                <Form.Control
                                    type="text"
                                    name="link"
                                    placeholder="Link:"
                                    value={values.link}
                                    onChange={handleChange}
                                    isInvalid={!!errors.link}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.link}
                                </Form.Control.Feedback>
                            </FloatingLabel>
                        </Form.Group>
                    </Row>
                    <Button type="submit">Enviar</Button>
                </Form>
            )}
        </Formik>
    );
};
