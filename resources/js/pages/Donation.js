import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col } from "react-bootstrap";
import ModalDonation from "../components/ModalDonation";

function Donation(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios
                .get("/donation/list")
                .then((response) => {
                    setData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };
        fetchData();

        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    }, []);

    const initialDb = [];
    const [db, setDb] = useState(initialDb);

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
                                        <td>{item.name}</td>
                                        <td>{item.donation}</td>
                                        <td>{item.detail}</td>
                                        <td>{item.message_optional}</td>
                                        <td>{item.destiny}</td>
                                        <td>{item.accumulated_return}</td>
                                    </tr>
                                );
                            })}
                            {/* <tr>
                                <th>1</th>
                                <td>Pepe</td>
                                <td>1 bicicleta</td>
                                <td>Nueva</td>
                                <td>Para Ramón</td>
                                <td>Región 2</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>2</th>
                                <td>Pepe</td>
                                <td>1 bicicleta</td>
                                <td>Nueva</td>
                                <td>Para Ramón</td>
                                <td>Región 2</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>3</th>
                                <td>Pepe</td>
                                <td>1 bicicleta</td>
                                <td>Nueva</td>
                                <td>Para Ramón</td>
                                <td>Región 2</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>4</th>
                                <td>Pepe</td>
                                <td>1 bicicleta</td>
                                <td>Nueva</td>
                                <td>Para Ramón</td>
                                <td>Región 2</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <th>5</th>
                                <td>Pepe</td>
                                <td>1 bicicleta</td>
                                <td>Nueva</td>
                                <td>Para Ramón</td>
                                <td>Región 2</td>
                                <td>0</td>
                            </tr> */}
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <ModalDonation />
        </Container>
    );
}

export default Donation;
