import { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import ModalDonation from "../components/modal/ModalDonation";
import crud from "../components/Crud";

export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await crud.listDonation(true);
            setData(res);
        };
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
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.user_name}</td>
                                        <td>{item.donation}</td>
                                        <td>{item.detail}</td>
                                        <td>{item.message_optional}</td>
                                        <td>{item.destiny}</td>
                                        <td>{item.accumulated_return}</td>
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
            <ModalDonation user_id={props.user_id} />
        </Container>
    );
};
