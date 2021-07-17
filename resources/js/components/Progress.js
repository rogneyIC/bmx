import React from "react";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Col,
    Container,
    Form,
    FormGroup,
    Input,
    Label,
    Row,
    Table,
} from "reactstrap";

class Progress extends React.Component {
    render() {
        return (
            <Container>
                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dato 1</th>
                            <th>Dato 2</th>
                            <th>Dato 3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <Form className="form-progress">
                    <Card>
                        <CardBody>
                            <FormGroup className="mb-3" row>
                                <Label sm={1}>1:</Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-3" row>
                                <Label sm={1}>2:</Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-3" row>
                                <Label sm={1}>3:</Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-3" row>
                                <Label sm={1}>4:</Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-3" row>
                                <Label sm={1}>5:</Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                            <FormGroup className="mb-3" row>
                                <Label sm={1} for="progress-phone">
                                    Link:
                                </Label>
                                <Col>
                                    <Input type="text" />
                                </Col>
                            </FormGroup>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary">Enviar</Button>
                        </CardFooter>
                    </Card>
                </Form>
            </Container>
        );
    }
}

export default Progress;
