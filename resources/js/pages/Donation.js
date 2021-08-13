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
        <Container className="py-3 px-4 donation">
            <div className="mb-4 text-center">
                <span className="fs-5 title">
                    Registro donaciones y transparencia
                </span>
            </div>
            <ModalDonation user_id={props.user_id} />

            <Table striped bordered hover responsive>
                <thead className="table-primary">
                    <tr>
                        <th>Nombre</th>
                        <th>Donación</th>
                        <th>Detalles</th>
                        <th>Mensaje opcional</th>
                        <th>Destino</th>
                        <th>Vuelto acumulado</th>
                        {props.role == "admin" ? <th>Acciones</th> : null}
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
                                                deleteDonation(item.donation_id)
                                            }
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                ) : null}
                            </tr>
                        );
                    })}
                    {data.length == 0 ? (
                        <tr>
                            <td
                                colSpan={props.role == "admin" ? "7" : "6"}
                                className="text-center"
                            >
                                No existen donaciones
                            </td>
                        </tr>
                    ) : null}
                </tbody>
            </Table>

            <div>
                <span>
                    Agradecimientos especiales a los que apoyan el bmx chileno.
                    Al comprar prefiere marcas que impulsan el deporte.
                </span>
            </div>
        </Container>
    );
};
