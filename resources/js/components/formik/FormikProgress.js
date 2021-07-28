import React from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import toastr from "toastr";
import { useHistory } from "react-router-dom";

export default (props) => {
    let history = useHistory();

    const schema = yup.object().shape({
        trick: yup.string().required(),
        link: yup.string().required(),
    });

    const sendData = async (e) => {
        let data = {
            user_id: props.user_id,
            trick: { data: e.trick },
            link: e.link,
            accepted: false,
        };
        await axios
            .post("/progress/update", data)
            .then((response) => {
                toastr.success(
                    "Progreso enviado. En espera de la aceptación del administrador"
                );
                history.push("/leveler");
            })
            .catch((error) => {
                console.log(error);
                toastr.warning(error);
            });
    };

    return (
        <Formik
            enableReinitialize
            validationSchema={schema}
            onSubmit={sendData}
            initialValues={{
                trick: props.trick,
                link: props.link,
            }}
            validate={(values) => {
                const errors = {};
                if (!values.trick) errors.trick = "Este campo es obligatorio";
                if (!values.link) errors.link = "Este campo es obligatorio";
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
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="validationFormik01">
                            <FloatingLabel label="Trucos:">
                                <Form.Control
                                    as="textarea"
                                    name="trick"
                                    placeholder="Trucos:"
                                    value={values.trick}
                                    onChange={handleChange}
                                    isInvalid={!!errors.trick}
                                    style={{ height: "160px" }}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.trick}
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
