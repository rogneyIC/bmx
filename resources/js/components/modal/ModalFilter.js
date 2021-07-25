import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";
import Color from "../Color";
import * as FaIcons from "react-icons/fa";

export default (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [dataRegion, setDataRegion] = useState([]);
    const [region1, setRegion1] = useState(false);
    const [region2, setRegion2] = useState(false);
    const [region3, setRegion3] = useState(false);
    const [region4, setRegion4] = useState(false);
    const [region5, setRegion5] = useState(false);
    const [region6, setRegion6] = useState(false);
    const [region7, setRegion7] = useState(false);
    const [region8, setRegion8] = useState(false);
    const [region9, setRegion9] = useState(false);
    const [region10, setRegion10] = useState(false);
    const [region11, setRegion11] = useState(false);
    const [region12, setRegion12] = useState(false);
    const [region13, setRegion13] = useState(false);
    const [region14, setRegion14] = useState(false);
    const [region15, setRegion15] = useState(false);
    const [region16, setRegion16] = useState(false);

    const [dataCategory, setDataCategory] = useState([]);
    const [category1, setCategory1] = useState(false);
    const [category2, setCategory2] = useState(false);
    const [category3, setCategory3] = useState(false);
    const [category4, setCategory4] = useState(false);

    const [dataAge, setDataAge] = useState([]);
    const [age1, setAge1] = useState(false);
    const [age2, setAge2] = useState(false);
    const [age3, setAge3] = useState(false);
    const [age4, setAge4] = useState(false);
    const [age5, setAge5] = useState(false);

    const config = (dataResponse) => {
        let labelArray = [];
        let dataArray = [];

        let colorArray = [
            "rgb(247,156,145)",
            "rgb(253,196,149)",
            "rgb(223,208,135)",
            "rgb(249,219,26)",
            "rgb(224,165,35)",
            "rgb(250,220,177)",
            "rgb(192,192,192)",
            "rgb(236,240,129)",
            "rgb(144,173,132)",
            "rgb(180,205,86)",
            "rgb(49,204,50)",
            "rgb(68,167,39)",
            "rgb(0,121,0)",
            "rgb(220,183,249)",
            "rgb(162,165,248)",
            "rgb(19,155,227)",
        ];

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

    const checkRadio1 = () => {
        setAge1(true);
        setAge2(false);
        setAge3(false);
        setAge4(false);
        setAge5(false);
    };

    const checkRadio2 = () => {
        setAge1(false);
        setAge2(true);
        setAge3(false);
        setAge4(false);
        setAge5(false);
    };

    const checkRadio3 = () => {
        setAge1(false);
        setAge2(false);
        setAge3(true);
        setAge4(false);
        setAge5(false);
    };

    const checkRadio4 = () => {
        setAge1(false);
        setAge2(false);
        setAge3(false);
        setAge4(true);
        setAge5(false);
    };

    const checkRadio5 = () => {
        setAge1(false);
        setAge2(false);
        setAge3(false);
        setAge4(false);
        setAge5(true);
    };

    const sendData = async (e) => {
        e.preventDefault();
        setDataRegion([
            region1,
            region2,
            region3,
            region4,
            region5,
            region6,
            region7,
            region8,
            region9,
            region10,
            region11,
            region12,
            region13,
            region14,
            region15,
            region16,
        ]);
        setDataCategory([category1, category2, category3, category4]);
        setDataAge([age1, age2, age3, age4, age5]);
        const data = {
            region: [],
            category: [],
            age: [age1, age2, age3, age4],
        };
        if (category1) data.category.push("iniciante");
        if (category2) data.category.push("intermedio");
        if (category3) data.category.push("experto");
        if (category4) data.category.push("pro");
        [
            region1,
            region2,
            region3,
            region4,
            region5,
            region6,
            region7,
            region8,
            region9,
            region10,
            region11,
            region12,
            region13,
            region14,
            region15,
            region16,
        ].forEach(function (val, index, array) {
            if (val) data.region.push(index + 1);
        });
        await axios
            .post("/user/filter", data)
            .then((response) => {
                console.log(config(response.data));
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
                <FaIcons.FaFilter />
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header>
                    <Modal.Title>{"Filtrar:"}</Modal.Title>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                    ></button>
                </Modal.Header>
                <Form onSubmit={sendData}>
                    <Modal.Body className="px-4">
                        <Row>
                            <Col>
                                <h5>{"Seleccione la(s) región(es):"}</h5>
                            </Col>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="1"
                                    defaultChecked={region1}
                                    onClick={(event) =>
                                        setRegion1(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="2"
                                    defaultChecked={region2}
                                    onClick={(event) =>
                                        setRegion2(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="3"
                                    defaultChecked={region3}
                                    onClick={(event) =>
                                        setRegion3(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="4"
                                    defaultChecked={region4}
                                    onClick={(event) =>
                                        setRegion4(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="5"
                                    defaultChecked={region5}
                                    onClick={(event) =>
                                        setRegion5(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="6"
                                    defaultChecked={region6}
                                    onClick={(event) =>
                                        setRegion6(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="7"
                                    defaultChecked={region7}
                                    onClick={(event) =>
                                        setRegion7(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="8"
                                    defaultChecked={region8}
                                    onClick={(event) =>
                                        setRegion8(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="9"
                                    defaultChecked={region9}
                                    onClick={(event) =>
                                        setRegion9(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="10"
                                    defaultChecked={region10}
                                    onClick={(event) =>
                                        setRegion10(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="11"
                                    defaultChecked={region11}
                                    onClick={(event) =>
                                        setRegion11(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="12"
                                    defaultChecked={region12}
                                    onClick={(event) =>
                                        setRegion12(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="13"
                                    defaultChecked={region13}
                                    onClick={(event) =>
                                        setRegion13(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="14"
                                    defaultChecked={region14}
                                    onClick={(event) =>
                                        setRegion14(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="15"
                                    defaultChecked={region15}
                                    onClick={(event) =>
                                        setRegion15(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="16"
                                    defaultChecked={region16}
                                    onClick={(event) =>
                                        setRegion16(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Body className="px-4 pt-0">
                        <Row>
                            <Col>
                                <h5>{"Seleccione la(s) categoría(s):"}</h5>
                            </Col>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="iniciante"
                                    defaultChecked={category1}
                                    onClick={(event) =>
                                        setCategory1(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="intermedio"
                                    defaultChecked={category2}
                                    onClick={(event) =>
                                        setCategory2(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="experto"
                                    defaultChecked={category3}
                                    onClick={(event) =>
                                        setCategory3(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="pro"
                                    defaultChecked={category4}
                                    onClick={(event) =>
                                        setCategory4(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                    </Modal.Body>
                    <Modal.Body className="px-4 pt-0">
                        <Row>
                            <Col>
                                <h5>{"Seleccione la edad:"}</h5>
                            </Col>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="radio"
                                    name="age"
                                    defaultChecked={age1}
                                    label="menor de 12 años"
                                    onClick={checkRadio1}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="radio"
                                    name="age"
                                    defaultChecked={age2}
                                    label="13-17 años"
                                    onClick={checkRadio2}
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="radio"
                                    name="age"
                                    defaultChecked={age3}
                                    label="18-24 años"
                                    onClick={checkRadio3}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="radio"
                                    name="age"
                                    defaultChecked={age4}
                                    label="mayor de 25 años"
                                    onClick={checkRadio4}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="radio"
                                    name="age"
                                    defaultChecked={age5}
                                    label="todas"
                                    onClick={checkRadio5}
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
