import React, { useEffect } from "react";
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import toastr from "toastr";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 287px)";
    });
    const toastrShow = () => {
        toastr.success(
            "Gracias por su constribución, en breve se le contactará"
        );
    };

    return (
        <Container>
            <Row>
                <Col>
                    <table className="table table-success table-striped table-hover table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pepe</td>
                                <td>pepe@gmail.com</td>
                                <td>76829301</td>
                            </tr>
                            <tr>
                                <td>Roberto</td>
                                <td>robert@gmail.com</td>
                                <td>128303912</td>
                            </tr>
                        </tbody>
                    </table>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col xs="auto">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#donation-modal"
                    >
                        Haz tu donación
                    </button>
                    <div
                        className="modal fade"
                        id="donation-modal"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-sm">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Donación</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="modal-body">
                                    <Form>
                                        <FormGroup className="mb-3">
                                            <Label for="donation-name">
                                                Nombre:
                                            </Label>
                                            <Input
                                                type="text"
                                                name="name"
                                                id="donation-name"
                                                placeholder="Nombre"
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-3">
                                            <Label for="donation-email">
                                                Correo electrónico:
                                            </Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                id="donation-email"
                                                placeholder="Correo electrónico"
                                            />
                                        </FormGroup>
                                        <FormGroup className="mb-3">
                                            <Label for="donation-phone">
                                                Teléfono:
                                            </Label>
                                            <Input
                                                type="phone"
                                                name="phone"
                                                id="donation-phone"
                                                placeholder="Número de teléfono"
                                            />
                                        </FormGroup>
                                    </Form>
                                </div>
                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-dismiss="modal"
                                        onClick={toastrShow}
                                    >
                                        Enviar
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
