import React, { useEffect, useState } from "react";
import {
    Button,
    Card,
    Col,
    Container,
    FloatingLabel,
    Form,
    Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";

export default (props) => {
    const navigate = useNavigate();
    if (props.email == "invite@invite.invite") {
        navigate("/leveler");
    } else {
        const [street, setStreet] = useState("");
        const [park, setPark] = useState("");
        const [dirt, setDirt] = useState("");
        const [link_street, setLink_street] = useState("");
        const [link_park, setLink_park] = useState("");
        const [link_dirt, setLink_dirt] = useState("");

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
            if (valid) {
                let data = {
                    user_id: props.id,
                    street: street,
                    park: park,
                    dirt: dirt,
                    link_street: link_street,
                    link_park: link_park,
                    link_dirt: link_dirt,
                };

                await axios
                    .post("/progress/store", data)
                    .then((response) => {
                        toastr.success(
                            "Progreso enviado. En espera de aceptación"
                        );
                        navigate("/leveler");
                    })
                    .catch((error) => {
                        toastr.warning(error);
                    });
            }
        };

        return (
            <Container className="py-3 px-4">
                <div className="mb-4 text-center">
                    <span className="fs-5 title">Subir progreso</span>
                </div>
                {/* <Row>
                    <CardGroup className="card-leveler p-0">
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
                </Row> */}
                <Row className="justify-content-md-center">
                    <Card as={Col}>
                        <Card.Body>
                            <Form onSubmit={sendData}>
                                <Row className="mb-3">
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <FloatingLabel label="Truco en calle:">
                                                <Form.Control
                                                    name="street"
                                                    placeholder="Truco en calle:"
                                                    onChange={(event) =>
                                                        setStreet(
                                                            event.target.value
                                                        )
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
                                                    placeholder="Link:"
                                                    onChange={(event) =>
                                                        setLink_street(
                                                            event.target.value
                                                        )
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
                                                    placeholder="Truco en parque:"
                                                    onChange={(event) =>
                                                        setPark(
                                                            event.target.value
                                                        )
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
                                                    placeholder="Link:"
                                                    onChange={(event) =>
                                                        setLink_park(
                                                            event.target.value
                                                        )
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
                                                    placeholder="Truco en tierra:"
                                                    onChange={(event) =>
                                                        setDirt(
                                                            event.target.value
                                                        )
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
                                                    placeholder="Link:"
                                                    onChange={(event) =>
                                                        setLink_dirt(
                                                            event.target.value
                                                        )
                                                    }
                                                />
                                                <Form.Control.Feedback type="invalid">
                                                    Este campo es obligatorio
                                                </Form.Control.Feedback>
                                            </FloatingLabel>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Button type="submit">Enviar</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        );
    }
};
