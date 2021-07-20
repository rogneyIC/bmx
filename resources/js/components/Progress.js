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
            <Row>
                <Form className="form-progress">
                    <Card>
                        <Card.Body>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    1:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    2:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    3:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    4:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    5:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
                            <Form.Group className="mb-3" as={Row}>
                                <Form.Label column sm={1}>
                                    Link:
                                </Form.Label>
                                <Col>
                                    <Form.Control type="text" />
                                </Col>
                            </Form.Group>
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
