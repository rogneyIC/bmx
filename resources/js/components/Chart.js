import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import {
    Col,
    Container,
    Dropdown,
    DropdownButton,
    Image,
    Row,
} from "react-bootstrap";
import img_chart from "../../img/img-chart.jpg";
import ModalFilter from "./modal/ModalFilter";

export default () => {
    const chartContainer = useRef(null);
    const [chartInstance, setChartInstance] = useState(null);
    const [data, setData] = useState([]);
    const [age, setAge] = useState(null);

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
                if (val.user_region == index2 + 1) {
                    backgroundColor.push(colorArray[index2]);
                }
            });
            labelArray.push(val.user_name + " / " + val.user_age + "años");
            dataArray.push(val.user_point);
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
                    .post("/user/list")
                    .then((response) => {
                        setData(response.data);
                        const chartConfig = {
                            type: "bar",
                            data: config(response.data),
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

    const sendData = async (value) => {
        const data = { option: "age", age: value };
        await axios
            .post("/user/filter", data)
            .then((response) => {
                chartInstance.data = config(response.data);
                chartInstance.update();
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
                        <Col xs={2} className="text-end">
                            <ModalFilter chartInstance={chartInstance} />
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
        </Container>
    );
};
