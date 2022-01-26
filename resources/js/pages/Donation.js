import React, { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import ModalDonation from "../components/modal/ModalDonation";

export default ({ user_id, role }) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);

    const fetchData = async () => {
        await axios
            .post("/donation/list", { accepted: true })
            .then((response) => {
                response.data.map((item) => {
                    item.read = item.accepted;
                });
                setData(response.data);
                let cols = [
                    {
                        name: "Nombre",
                        sortable: true,
                        selector: (row) => row.name,
                    },
                    {
                        name: "Donación",
                        sortable: true,
                        selector: (row) => row.donation,
                    },
                    {
                        name: "Detalles",
                        sortable: true,
                        selector: (row) => row.detail,
                    },
                    {
                        name: "Mensaje opcional",
                        sortable: true,
                        selector: (row) => row.message_optional,
                    },
                    {
                        name: "Destino",
                        sortable: true,
                        selector: (row) => row.destiny,
                    },
                    {
                        name: "Vuelto acumulado",
                        sortable: true,
                        selector: (row) => row.accumulated_return,
                    },
                ];
                if (role == "admin")
                    cols.push({
                        name: "Acciones",
                        cell: (row) => {
                            return (
                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        deleteDonation(row.donation_id)
                                    }
                                >
                                    <FaTrash />
                                </Button>
                            );
                        },
                    });
                setColumns(cols);
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
            <ModalDonation user_id={user_id} />

            <DataTable
                columns={columns}
                data={data}
                noDataComponent={<div class="my-3">No existen donaciones para mostrar</div>}
                persistTableHead
            />

            <div className="mt-3">
                <span>
                    Agradecimientos especiales a los que apoyan el bmx chileno.
                    Al comprar prefiere marcas que impulsan el deporte.
                </span>
            </div>
        </Container>
    );
};
