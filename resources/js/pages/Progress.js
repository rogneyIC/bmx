import React, { useState } from "react";
import {
    Button,
    Card,
    CardGroup,
    Col,
    Container,
    Form,
    Row,
} from "react-bootstrap";
import FloatingLabel from "react-bootstrap-floating-label";
import toastr from "toastr";

export default (props) => {
    const [trick1, setTrick1] = useState(null);
    const [trick2, setTrick2] = useState(null);
    const [trick3, setTrick3] = useState(null);
    const [link, setLink] = useState(null);

    const sendData = async (e) => {
        e.preventDefault();
        let id = props.user_id;
        let trick = { trick1, trick2, trick3 };
        let data = { id, trick, link };
        await axios
            .post("/progress/update", data)
            .then((response) => {
                console.log(response);
                toastr.success(
                    "Progreso enviado. En espera de la aceptación del administrador"
                );
            })
            .catch((error) => {
                console.log(error);
                toastr.warning(error);
            });
    };

    return (
        <Container className="py-3 px-4">
            <Row>
                <CardGroup className="card-leveler">
                    <Card>
                        <Card.Header>Dato 1</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Dato 2</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural
                                lead-in to additional content.{" "}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Header>Dato 3</Card.Header>
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Row>
            <Row className="justify-content-md-center">
                <Form className="form-progress col-6" onSubmit={sendData}>
                    <Card>
                        <Card.Body>
                            <Row className="g-2">
                                {/* <Col md>
                                    <Form.Control
                                        type="text"
                                        placeholder={"truco 1"}
                                        name="trick1"
                                        onChange={(event) =>
                                            setTrick1(event.target.value)
                                        }
                                    />
                                </Col>
                                <Col md>
                                    <Form.Control
                                        type="text"
                                        placeholder={"truco 2"}
                                        name="trick2"
                                        onChange={(event) =>
                                            setTrick2(event.target.value)
                                        }
                                    />
                                </Col>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder={"truco 3"}
                                        name="trick3"
                                        onChange={(event) =>
                                            setTrick3(event.target.value)
                                        }
                                    />
                                </Col> */}
                                <Col md>
                                    {/* <div className="form-floating">
                                        <Form.Control
                                            as="textarea"
                                            placeholder="Escriba aquí sus trucos"
                                            rows={5}
                                        />
                                    </div> */}
                                    <FloatingLabel
                                        label="Trucos:"
                                        type={"textarea"}
                                    >
                                        {/* <Form.Control
                                            as="textarea"
                                            placeholder="Escriba aquí sus trucos"
                                            rows={5}
                                        /> */}
                                    </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="g-2">
                                <Col md>
                                    <Form.Control
                                        type="text"
                                        placeholder={"link"}
                                        name="link"
                                        onChange={(event) =>
                                            setLink(event.target.value)
                                        }
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Row>
        </Container>
    );
};
