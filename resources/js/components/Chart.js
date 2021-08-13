import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { Button, Col, Container, Dropdown, Image, Row } from "react-bootstrap";
import img_chart from "../../img/img-chart.jpg";
import ModalFilterRegion from "./modal/ModalFilterRegion";
import ModalFilterCategory from "./modal/ModalFilterCategory";
import { FaFilter } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import toastr from "toastr";
import configuration from "./chart/ChartConfig";

export default (props) => {
    const chartContainer = useRef(null);
    const [fieldset, setFieldset] = useState(true);
    const [chartInstance, setChartInstance] = useState(null);
    const [data, setData] = useState([]);
    let history = useHistory();

    const progressWait = async () => {
        await axios
            .post("/progress/wait", { id: props.user_id })
            .then((response) => {
                response.data.wait
                    ? toastr.info(
                          "Hay un avance pendiente, por favor, espere por la aceptación del administrador"
                      )
                    : history.push("/leveler/progress");
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";

        if (chartContainer && chartContainer.current) {
            const fetchData = async () => {
                await axios
                    .post("/user/list", { id: props.user_id })
                    .then((response) => {
                        setData(response.data[0]);
                        props.setCompetitor(response.data[1]);
                        const chartConfig = {
                            type: "bar",
                            data: configuration.config(
                                response.data[0],
                                props.user_id
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

    const activeFilter = async () => {
        if (fieldset) {
            setFieldset(false);
        } else {
            await axios
                .post("/user/filter", { option: "all" })
                .then((response) => {
                    chartInstance.data = configuration.config(
                        response.data,
                        props.user_id
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
                    props.user_id
                );
                chartInstance.update();
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    const makeCompetitor = async () => {
        await axios
            .post("/user/make", { id: props.user_id })
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
                {/* <Col xs={2}>
                    <Image src={img_chart} fluid />
                </Col> */}
                {/* <Col xs={10} className="align-self-end"> */}
                <Col className="align-self-end">
                    <Row className="justify-content-md-end">
                        {!props.competitor && props.role != "admin" ? (
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
                        <Col xs={7}>
                            <fieldset disabled={fieldset} className="row">
                                <Col className="d-grid">
                                    <ModalFilterRegion
                                        user_id={props.user_id}
                                        chartInstance={chartInstance}
                                    />
                                </Col>
                                <Col className="d-grid">
                                    <ModalFilterCategory
                                        user_id={props.user_id}
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
                    {/* <Row className="justify-content-md-end">
                        <Col xs={2} className="text-end">
                            <Button disabled>
                                Riders{" "}
                                <span className="badge bg-secondary">4</span>
                            </Button>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <div className="chart-container">
                                <canvas ref={chartContainer} />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col xs="auto">
                    <Button onClick={progressWait}>Subir avance</Button>
                </Col>
            </Row>
        </Container>
    );
};
