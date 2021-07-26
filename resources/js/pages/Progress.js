import React from "react";
import {
    Button,
    Card,
    CardGroup,
    Col,
    Container,
    Form,
    Row,
} from "react-bootstrap";

export default () => {
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
                <Form className="form-progress col-4">
                    <Card>
                        <Card.Body>
                            <Form.Control
                                type="text"
                                placeholder={"truco 1"}
                                className="mb-3"
                            />
                            <Form.Control
                                type="text"
                                placeholder={"truco 2"}
                                className="mb-3"
                            />
                            <Form.Control
                                type="text"
                                placeholder={"truco 3"}
                                className="mb-3"
                            />
                            <Form.Control
                                type="text"
                                placeholder={"link"}
                                className="mb-3"
                            />
                        </Card.Body>
                        <Card.Footer>
                            <Button color="primary">Enviar</Button>
                        </Card.Footer>
                    </Card>
                </Form>
            </Row>
        </Container>
    );
};
