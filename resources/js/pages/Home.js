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
                                El BMX (abreviación de su nombre en inglés:
                                "Bicycle Motocross") es una disciplina del
                                ciclismo que se practica con bicicletas cross
                                con ruedas de 20 pulgadas de diámetro. El BMX
                                abarca dos modalidades: carrera, cuyo objetivo
                                es completar el recorrido en el menor tiempo
                                posible, y estilo libre (freestyle), cuyo
                                objetivo es realizar acrobacias.
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
