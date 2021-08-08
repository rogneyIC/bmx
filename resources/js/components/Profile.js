import React, { useEffect, useRef, useState } from "react";
import { Col, Container, ListGroup, Row, Tab, Tabs } from "react-bootstrap";
import Chart from "chart.js/auto";
import configuration from "./chart/ChartConfig";
import toastr from "toastr";

export default (props) => {
    let key = "profile";
    const [progress, setProgress] = useState([]);
    const srcImg = "/images/avatars/" + props.user.photo;
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [data, setData] = useState([]);

    switch (props.location.state) {
        case "Historial":
            key = "history";
            break;
        case "Configuraciones":
            key = "config";
            break;
        case "Mensajes":
            key = "message";
            break;
        case "Soporte":
            key = "support";
            break;
    }

    const getProgress = async () => {
        await axios
            .post("/progress/get", { user_id: props.user.id })
            .then((response) => {
                setProgress(response.data);
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    const fetchData = async () => {
        await axios
            .post("/user/get", { id: props.user.id })
            .then((response) => {
                setData(response.data);
                if (response.data[0]) {
                    const chartConfig = {
                        type: "bar",
                        data: configuration.configOne(response.data[0]),
                        options: {
                            plugins: {
                                legend: {
                                    display: false,
                                },
                            },
                            scales: {
                                xAxes: [
                                    {
                                        barPercentage: 0.1,
                                    },
                                ],
                                yAxes: [
                                    {
                                        ticks: {
                                            beginAtZero: true,
                                        },
                                    },
                                ],
                            },
                            maintainAspectRatio: false,
                        },
                    };
                    const newChartInstance = new Chart(
                        chartContainer.current,
                        chartConfig
                    );
                    setChartInstance(newChartInstance);
                }
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

        getProgress();
        fetchData();
    }, []);

    return (
        <Container className="py-3 px-4 profile">
            <Row>
                <Col xs={3} className="text-center">
                    <img
                        src={srcImg}
                        className="user-avatar md-avatar rounded-circle"
                    />
                </Col>
                <Col xs={9}>
                    <Tabs defaultActiveKey={key} id="profile" className="mb-3">
                        <Tab eventKey="profile" title="Perfil">
                            Perfil
                        </Tab>
                        <Tab eventKey="history" title="Historial">
                            {data[0] ? (
                                <Row>
                                    <div className="chart-container col-6">
                                        <canvas ref={chartContainer} />
                                    </div>
                                </Row>
                            ) : null}
                            <Row>
                                <ListGroup as={Col}>
                                    {progress.length == 0 ? (
                                        <ListGroup.Item className="text-center">
                                            Usted no tiene avances
                                        </ListGroup.Item>
                                    ) : (
                                        progress.map((n, i) => (
                                            <ListGroup.Item key={n.id}>
                                                <Row>
                                                    <Col xs="auto">
                                                        <strong>{i + 1}</strong>
                                                    </Col>
                                                    <Col>{n.street}</Col>
                                                    <Col>{n.park}</Col>
                                                    <Col>{n.dirt}</Col>
                                                    <Col>
                                                        {n.created_at
                                                            .slice(0, 19)
                                                            .replace("T", " ")}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        ))
                                    )}
                                </ListGroup>
                            </Row>
                        </Tab>
                        <Tab eventKey="config" title="Configuraciones">
                            Configuraciones
                        </Tab>
                        <Tab eventKey="message" title="Mensajes">
                            Mensajes
                        </Tab>
                        <Tab eventKey="support" title="Soporte">
                            Soporte
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};
