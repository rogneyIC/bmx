import React, { useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import bmx1 from "../../img/bmx1.jpg";
import bmx2 from "../../img/bmx2.jpg";
import bmx3 from "../../img/bmx3.jpg";
import bmx4 from "../../img/bmx4.jpg";
import bmx5 from "../../img/bmx5.jpg";
import Logo from "../components/Logo";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "none";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "100%";
    }, []);
    return (
        <Container className="py-3">
            <Row>
                <Col xs={7}>
                    <Row>
                        <Col>
                            <p className="home-text">
                                <strong>ComparteCompiteBMX</strong> es una
                                iniciativa que busca mostrar el nivel de cada
                                región de país y motivar el deporte con ideas
                                nuevas de competencia y apoyo ideales para
                                fechas sin campeonatos.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Carousel fade controls={false} interval={4000}>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={bmx1} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={bmx2} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={bmx3} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={bmx4} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={bmx5} />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Col>
                <Col xs={5} className="align-self-center">
                    <Logo props={props} />
                </Col>
            </Row>
        </Container>
    );
};
