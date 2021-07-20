import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import ModalDonation from "../components/ModalDonation";
import crud from "../components/Crud";

export default (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await crud.listDonation(true);
            setData(res);
        };
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
                    {/* <table className="table table-success table-striped table-hover table-bordered border-primary"> */}
                    <Table striped bordered hover>
                        <thead className="table-primary">
                            <tr>
                                {/* <th>#</th> */}
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
            <ModalDonation user_id={props.user_id} />
        </Container>
    );
};
