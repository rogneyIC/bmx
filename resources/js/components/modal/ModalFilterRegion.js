import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import toastr from "toastr";

export default (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);
    const [check9, setCheck9] = useState(false);
    const [check10, setCheck10] = useState(false);
    const [check11, setCheck11] = useState(false);
    const [check12, setCheck12] = useState(false);
    const [check13, setCheck13] = useState(false);
    const [check14, setCheck14] = useState(false);
    const [check15, setCheck15] = useState(false);
    const [check16, setCheck16] = useState(false);

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
                if (val.region == index2 + 1) {
                    backgroundColor.push(colorArray[index2]);
                }
            });
            labelArray.push(val.name + " / " + val.age + "años");
            dataArray.push(val.point);
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
        setCheck5(false);
        setCheck6(false);
        setCheck7(false);
        setCheck8(false);
        setCheck9(false);
        setCheck10(false);
        setCheck11(false);
        setCheck12(false);
        setCheck13(false);
        setCheck14(false);
        setCheck15(false);
        setCheck16(false);
    };

    const sendData = async (e) => {
        e.preventDefault();
        const dataChecked = [
            check1,
            check2,
            check3,
            check4,
            check5,
            check6,
            check7,
            check8,
            check9,
            check10,
            check11,
            check12,
            check13,
            check14,
            check15,
            check16,
        ];
        const data = { option: "region", region: [] };
        dataChecked.forEach(function (val, index, array) {
            if (val) data.region.push(index + 1);
        });
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
                Región
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
                                    label="1"
                                    onChange={(event) =>
                                        setCheck1(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="2"
                                    onClick={(event) =>
                                        setCheck2(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="3"
                                    onClick={(event) =>
                                        setCheck3(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="4"
                                    onClick={(event) =>
                                        setCheck4(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="5"
                                    onClick={(event) =>
                                        setCheck5(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="6"
                                    onClick={(event) =>
                                        setCheck6(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="7"
                                    onClick={(event) =>
                                        setCheck7(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="8"
                                    onClick={(event) =>
                                        setCheck8(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="9"
                                    onClick={(event) =>
                                        setCheck9(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="10"
                                    onClick={(event) =>
                                        setCheck10(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="11"
                                    onClick={(event) =>
                                        setCheck11(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="12"
                                    onClick={(event) =>
                                        setCheck12(event.target.checked)
                                    }
                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-0">
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="13"
                                    onClick={(event) =>
                                        setCheck13(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="14"
                                    onClick={(event) =>
                                        setCheck14(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="15"
                                    onClick={(event) =>
                                        setCheck15(event.target.checked)
                                    }
                                />
                            </Form.Group>
                            <Form.Group className="mb-3 col">
                                <Form.Check
                                    type="checkbox"
                                    label="16"
                                    onClick={(event) =>
                                        setCheck16(event.target.checked)
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
