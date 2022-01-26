import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { FaFilter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Chart from "chart.js/auto";
import ModalFilterCategory from "../components/modal/ModalFilterCategory";
import ModalFilterRegion from "../components/modal/ModalFilterRegion";
import configuration from "../components/chart/ChartConfig";

export default (props) => {
    const chartContainer = useRef(null);
    const [fieldset, setFieldset] = useState(true);
    const [chartInstance, setChartInstance] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        props.refLoader.current.style.display = "initial";

        if (chartContainer && chartContainer.current) {
            const fetchData = async () => {
                await axios
                    .post("/user/list", { id: props.id })
                    .then((response) => {
                        setData(response.data[0]);
                        props.setCompetitor(response.data[1]);
                        props.refLoader.current.style.display = "none";
                        const chartConfig = {
                            type: "bar",
                            data: configuration.config(
                                response.data[0],
                                props.id
                            ),
                            options: {
                                plugins: {
                                    legend: {
                                        display: false,
                                    },
                                },
                                scales: {
                                    yAxes: [
                                        {
                                            ticks: {
                                                beginAtZero: true,
                                            },
                                        },
                                    ],
                                },
                            },
                        };
                        const newChartInstance = new Chart(
                            chartContainer.current,
                            chartConfig
                        );
                        setChartInstance(newChartInstance);
                    })
                    .catch((error) => {
                        toastr.error(error);
                    });
            };
            fetchData();
            return () => {
                setData([]);
                setChartInstance(null);
            };
        }
    }, [chartContainer]);

    const progressWait = () => {
        navigate("/leveler/progress");
    };

    const activeFilter = async () => {
        if (fieldset) {
            setFieldset(false);
        } else {
            await axios
                .post("/user/filter", { option: "all" })
                .then((response) => {
                    chartInstance.data = configuration.config(
                        response.data,
                        props.id
                    );
                    chartInstance.update();
                    setFieldset(true);
                })
                .catch((error) => {
                    toastr.error(error);
                });
        }
    };

    const filterAge = async (value) => {
        await axios
            .post("/user/filter", { option: "age", age: value })
            .then((response) => {
                chartInstance.data = configuration.config(
                    response.data,
                    props.id
                );
                chartInstance.update();
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    const makeCompetitor = async () => {
        await axios
            .post("/user/make", { id: props.id })
            .then((response) => {
                props.setCompetitor(true);
                toastr.success("Felicidades, ahora usted es un competidor");
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    return (
        <Container className="py-3 px-4 leveler">
            <Row>
                <Col className="align-self-end">
                    <Row className="justify-content-md-end">
                        {!props.competitor &&
                        props.role != "admin" &&
                        props.email != "invite@invite.invite" ? (
                            <Col xs={3} className="text-end">
                                <Button
                                    variant="primary"
                                    onClick={makeCompetitor}
                                >
                                    {"Hazme competidor"}
                                </Button>
                            </Col>
                        ) : null}
                        <Col xs={2} className="text-end">
                            <Button variant="primary" onClick={activeFilter}>
                                <FaFilter />
                                {" Filtrar"}
                            </Button>
                        </Col>
                        <Col xs={5}>
                            <fieldset disabled={fieldset} className="row">
                                <Col className="d-grid">
                                    <ModalFilterRegion
                                        id={props.id}
                                        chartInstance={chartInstance}
                                    />
                                </Col>
                                <Col className="d-grid">
                                    <ModalFilterCategory
                                        id={props.id}
                                        chartInstance={chartInstance}
                                    />
                                </Col>
                                <Col>
                                    <Dropdown
                                        className="d-grid"
                                        onSelect={filterAge}
                                    >
                                        <Dropdown.Toggle variant="primary">
                                            {"Edad"}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item eventKey="1">
                                                {"menor de 13 años"}
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="2">
                                                {"13-17 años"}
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="3">
                                                {"13-24 años"}
                                            </Dropdown.Item>
                                            <Dropdown.Item eventKey="4">
                                                {"mayor de 24 años"}
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                            </fieldset>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="chart-container">
                                <canvas ref={chartContainer} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            {props.email != "invite@invite.invite" ? (
                <Row className="justify-content-md-end">
                    <Col xs="auto">
                        <Button onClick={progressWait}>Subir progreso</Button>
                    </Col>
                </Row>
            ) : null}
        </Container>
    );
};
