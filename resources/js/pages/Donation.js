import React from "react";
import { Container, Row, Col } from "reactstrap";

export default (props) => {
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
            <div className="row justify-content-md-end">
                <div className="col-3 d-grid">
                    <button type="button" class="btn btn-primary btn-lg">
                        Haz tu donación
                    </button>
                </div>
            </div>
        </Container>
    );
};
