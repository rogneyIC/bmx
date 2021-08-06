import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import FormikProgress from "../components/formik/FormikProgress";
import { useHistory } from "react-router-dom";
import toastr from "toastr";

export default (props) => {
    let history = useHistory();

    if (!props.competitor) {
        history.push("/leveler");
    } else {
        useEffect(() => {
            if (props.refSidebar.current)
                props.refSidebar.current.style.display = "flex";

            if (props.refMainPanel.current)
                props.refMainPanel.current.style.width = "calc(100% - 256px)";
        }, []);
    }

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
                <Card as={Col} md={8}>
                    <Card.Body>
                        <FormikProgress user_id={props.user_id} />
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};
