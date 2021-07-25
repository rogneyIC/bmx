import { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
    Container,
    Row,
    Col,
    Image,
    DropdownButton,
    Dropdown,
} from "react-bootstrap";
import img_chart from "../../img/img-chart.jpg";
import { NavLink } from "react-router-dom";
import axios from "axios";

//const new_width = data.length * 50 + "px";

export default () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    const config = (dataResponse) => {
        const labelArray = [];
        const dataArray = [];

        const colorArray = [
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

        const backgroundColor = [];
        dataResponse.forEach(function (val, index, array) {
            colorArray.forEach(function (val2, index2, array2) {
                if (val.user_region == index2 + 1) {
                    backgroundColor.push(colorArray[index2]);
                }
            });
            labelArray.push(val.user_name + " / " + val.user_age + "años");
            dataArray.push(val.user_point);
        });

        const cfg = {
            labels: labelArray,
            datasets: [
                {
                    data: dataArray,
                    backgroundColor: backgroundColor,
                },
            ],
        };

        const options = {
            plugins: {
                legend: {
                    display: true,
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
            }
        };

        return [cfg, options];
    };

    const refChart = useRef();

    useEffect(() => {
        const fetchData = async () => {
            await axios
                .post("/user/list")
                .then((response) => {
                    setData(config(response.data));
                    setIsLoaded(true);
                    //console.log(refChart.current.legend);
                    //refChart.current.chart.chartInstance.generateLegend();
                })
                .catch((error) => {
                    setError(error);
                    console.log(error);
                });
        };
        fetchData();
        return () => {
            setData([]);
        };
    }, []);

    return (
        <Container className="py-3 px-4">
            <Row>
                <Col xs={2}>
                    <Image src={img_chart} fluid />
                </Col>
                <Col xs={10} className="align-self-end">
                    <Row className="justify-content-md-end">
                        <Col xs={2} className="text-end">
                            Filtrar:
                        </Col>
                        <Col xs={2}>
                            <DropdownButton title="Región" className="d-grid">
                                {[
                                    "Región 1",
                                    "Región 2",
                                    "Región 3",
                                    "Región 4",
                                    "Región 5",
                                    "Región 6",
                                    "Región 7",
                                    "Región 8",
                                    "Región 9",
                                    "Región 10",
                                    "Región 11",
                                    "Región 12",
                                    "Región 13",
                                    "Región 14",
                                    "Región 15",
                                    "Región 16",
                                ].map((variant) => (
                                    <Dropdown.Item as="button" key={variant}>
                                        {variant}
                                    </Dropdown.Item>
                                ))}
                            </DropdownButton>
                        </Col>
                        <Col xs={2}>
                            <DropdownButton
                                title="Categoría"
                                className="d-grid"
                            >
                                <Dropdown.Item as="button">
                                    Iniciante
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    Intermedio
                                </Dropdown.Item>
                                <Dropdown.Item as="button">
                                    Experto
                                </Dropdown.Item>
                                <Dropdown.Item as="button">Pro</Dropdown.Item>
                            </DropdownButton>
                        </Col>
                        <Col xs={2}>
                            <DropdownButton title="Edad" className="d-grid">
                                <Dropdown.Item as="button">
                                    {"<=12"}
                                </Dropdown.Item>
                                <Dropdown.Item as="button">13-17</Dropdown.Item>
                                <Dropdown.Item as="button">18-24</Dropdown.Item>
                                <Dropdown.Item as="button">
                                    {">=25"}
                                </Dropdown.Item>
                            </DropdownButton>
                        </Col>
                    </Row>
                    <Row>
                        <div className="chartWrapper">
                            <div className="chartAreaWrapper">
                                <Bar
                                    data={data[0]}
                                    options={data[1]}
                                    id="levelerChar"
                                    height="350"
                                    width="0"
                                    ref={refChart}
                                />
                            </div>
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-end">
                <Col xs="auto">
                    <NavLink
                        to="/leveler/progress"
                        activeClassName="active"
                        className="btn btn-primary"
                    >
                        Subir avance
                    </NavLink>
                </Col>
            </Row>
        </Container>
    );
};
