import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";
import FormikProgress from "../components/formik/FormikProgress";
import { useHistory } from "react-router-dom";

export default (props) => {
    let history = useHistory();
    if (!props.competitor) {
        history.push("/leveler");
    }
    const [trick, setTrick] = useState("");
    const [link, setLink] = useState("");

    useEffect(async () => {
        await axios
            .post("/progress/getProgress", { user_id: props.user_id })
            .then((response) => {
                if (response.data[0].trick !== null)
                    setTrick(response.data[0].trick.data);
                if (response.data[0].link !== null)
                    setLink(response.data[0].link);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

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
                <Card as={Col} md="6">
                    <Card.Body>
                        <FormikProgress
                            trick={trick}
                            link={link}
                            user_id={props.user_id}
                        />
                    </Card.Body>
                </Card>
            </Row>
        </Container>
    );
};
