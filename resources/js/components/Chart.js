import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
    Button,
    Col,
    Container,
    Dropdown,
    Image,
    Row,
} from "react-bootstrap";
import img_chart from "../../img/img-chart.jpg";
//import ModalFilter from "./modal/ModalFilter";
import ModalFilterRegion from "./modal/ModalFilterRegion";
import ModalFilterCategory from "./modal/ModalFilterCategory";
import { FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import toastr from "toastr";

export default (props) => {
    const chartContainer = useRef(null);
    const [fieldset, setFieldset] = useState(true);
    const [chartInstance, setChartInstance] = useState(null);
    const [data, setData] = useState([]);
    const [competitor, setCompetitor] = useState(true);

    const config = (dataResponse) => {
        let labelArray = [];
        let dataArray = [];

        let colorArray = [
            "rgb(247,156,145)",
            "rgb(253,196,149)",
            "rgb(223,208,135)",
            "rgb(249,219,26)",
            "rgb(224,165,35)",
            "rgb(250,220,177)",
            "rgb(192,192,192)",
            "rgb(236,240,129)",
            "rgb(144,173,132)",
            "rgb(180,205,86)",
            "rgb(49,204,50)",
            "rgb(68,167,39)",
            "rgb(0,121,0)",
            "rgb(220,183,249)",
            "rgb(162,165,248)",
            "rgb(19,155,227)",
        ];

        let backgroundColor = [];
        dataResponse.forEach(function (val, index, array) {
            colorArray.forEach(function (val2, index2, array2) {
                if (val.region == index2 + 1) {
                    backgroundColor.push(colorArray[index2]);
                }
            });
            props.user_id == val.user_id
                ? labelArray.push("* " + val.name + " / " + val.age + "años *")
                : labelArray.push(val.name + " / " + val.age + "años");
            dataArray.push(val.point);
        });

        return {
            labels: labelArray,
            datasets: [
                {
                    data: dataArray,
                    backgroundColor: backgroundColor,
                },
            ],
        };
    };

    useEffect(() => {
        if (chartContainer && chartContainer.current) {
            const fetchData = async () => {
                await axios
                    .post("/user/list", { id: props.user_id })
                    .then((response) => {
                        setData(response.data[0]);
                        setCompetitor(response.data[1]);
                        const chartConfig = {
                            type: "bar",
                            data: config(response.data[0]),
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
                                animation: {
                                    onComplete: function (e) {},
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
                        //setError(error);
                        console.log(error);
                    });
            };
            fetchData();
            return () => {
                setData([]);
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
                    chartInstance.data = config(response.data);
                    chartInstance.update();
                    setFieldset(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    const filterAge = async (value) => {
        await axios
            .post("/user/filter", { option: "age", age: value })
            .then((response) => {
                chartInstance.data = config(response.data);
                chartInstance.update();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const makeCompetitor = async () => {
        await axios
            .post("/progress/store", { user_id: props.user_id })
            .then((response) => {
                setCompetitor(true);
                toastr.success("Felicidades, ahora usted es un competidor");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <Container className="py-3 px-4 leveler">
            <Row>
                <Col xs={2}>
                    <Image src={img_chart} fluid />
                </Col>
                <Col xs={10} className="align-self-end">
                    <Row className="justify-content-md-end">
                        {!competitor && props.role != "admin" ? (
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
                                        chartInstance={chartInstance}
                                    />
                                </Col>
                                <Col className="d-grid">
                                    <ModalFilterCategory
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
                        {/* <Col xs={2} className="text-end">
                            <ModalFilter chartInstance={chartInstance} />
                        </Col> */}
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
            {competitor ? (
                <Row className="justify-content-md-end">
                    <Col xs="auto">
                        <NavLink
                            to="/leveler/progress"
                            activeClassName="active"
                            className="btn btn-primary"
                        >
                            {"Subir avance"}
                        </NavLink>
                    </Col>
                </Row>
            ) : null}
        </Container>
    );
};
