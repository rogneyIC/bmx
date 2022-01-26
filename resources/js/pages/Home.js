import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import bmx1 from "../../img/bmx1.jpg";
import bmx2 from "../../img/bmx2.jpg";
import bmx3 from "../../img/bmx3.jpg";
import bmx4 from "../../img/bmx4.jpg";
import bmx5 from "../../img/bmx5.jpg";
import Logo from "../components/Logo";

export default () => {
    return (
        <Container className="p-5" fluid>
            <Row>
                <Col xs={7}>
                    <Row>
                        <Col>
                            <p className="home-text">
                                <strong>ComparteCompiteBMX</strong> es una
                                iniciativa que busca dar a conocer el nivel de
                                cada región del país y motivarlo a través de
                                competencias a distancia y en tiempo real.
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
                    <Logo />
                </Col>
            </Row>
        </Container>
    );
};
