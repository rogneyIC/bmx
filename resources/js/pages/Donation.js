import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import ModalDonation from "../components/modal/ModalDonation";
import toastr from "toastr";

export default (props) => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        await axios
            .post("/donation/list", { accepted: true })
            .then((response) => {
                response.data.map((item) => {
                    item.read = item.accepted;
                });
                setData(response.data);
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    useEffect(() => {
        /* setInterval(function () {
             fetchData();
         }, 10000);*/
        fetchData();

        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
        return () => {
            setData([]);
        };
    }, []);

    const deleteDonation = async (id) => {
        await axios
            .post("/donation/delete", { id })
            .then((response) => {
                fetchData();
                toastr.success("Donación eliminada con éxito");
            })
            .catch((error) => {
                toastr.warning(error);
            });
    };

    return (
        <Container className="py-3 px-4">
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead className="table-primary">
                            <tr>
                                <th>Nombre</th>
                                <th>Donación</th>
                                <th>Detalles</th>
                                <th>Mensaje opcional</th>
                                <th>Destino</th>
                                <th>Vuelto acumulado</th>
                                {props.role == "admin" ? (
                                    <th>Acciones</th>
                                ) : null}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.donation_id}>
                                        <td>{item.name}</td>
                                        <td>{item.donation}</td>
                                        <td>{item.detail}</td>
                                        <td>{item.message_optional}</td>
                                        <td>{item.destiny}</td>
                                        <td>{item.accumulated_return}</td>
                                        {props.role == "admin" ? (
                                            <td>
                                                <Button
                                                    variant="danger"
                                                    onClick={() =>
                                                        deleteDonation(
                                                            item.donation_id
                                                        )
                                                    }
                                                >
                                                    Eliminar
                                                </Button>
                                            </td>
                                        ) : null}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            {data.length == 0 ? (
                <Row>
                    <Col className="text-center">
                        <h4>No existen donaciones</h4>
                    </Col>
                </Row>
            ) : null}
            {props.role == "admin" ? null : (
                <ModalDonation user_id={props.user_id} />
            )}
        </Container>
    );
};
