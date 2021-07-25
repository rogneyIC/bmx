import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
import Color from "../Color";

export default (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);

    const config = (dataResponse) => {
        let labelArray = [];
        let dataArray = [];
        let colorArray = Color;

        let backgroundColor = [];
        dataResponse.forEach(function (val, index, array) {
            colorArray.forEach(function (val2, index2, array2) {
                if (val.user_region == index2 + 1) {
                    backgroundColor.push(colorArray[index2]);
                }
            });
            labelArray.push(val.user_name + " / " + val.user_age + "años");
            dataArray.push(val.user_point);
        });

        return {
            labels: labelArray,
            datasets: [
                {
                    data: dataArray,
                    backgroundColor: backgroundColor,
                },
            ],
        };
    };

    const showModal = () => {
        setCheck1(false);
        setCheck2(false);
        setCheck3(false);
        setCheck4(false);
    };

    const sendData = async (e) => {
        e.preventDefault();
        const data = { option: "category", category: [] };
        if (check1) data.category.push("iniciante");
        if (check2) data.category.push("intermedio");
        if (check3) data.category.push("experto");
        if (check4) data.category.push("pro");
        await axios
            .post("/user/filter", data)
            .then((response) => {
                props.chartInstance.data = config(response.data);
                props.chartInstance.update();
                handleClose();
            })
            .catch((error) => {
                console.log(error);
                setError(error);
                toastr.warning(error);
            });
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Categoría
            </Button>

            <Modal show={show} onHide={handleClose} onShow={showModal} centered>
                <Modal.Header>
                    <Modal.Title>Escoja la(s) región(es):</Modal.Title>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                    ></button>
                </Modal.Header>
                <Form onSubmit={sendData}>
                    <Modal.Body className="px-4">
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="iniciante"
                                    onChange={(event) =>
                                        setCheck1(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="intermedio"
                                    onClick={(event) =>
                                        setCheck2(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="experto"
                                    onClick={(event) =>
                                        setCheck3(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="pro"
                                    onClick={(event) =>
                                        setCheck4(event.target.checked)
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
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
};
