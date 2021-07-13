import React from "react";
import { Container, Row, Col } from "reactstrap";
import logo from "../../img/logo-index.svg";
import bmx1 from "../../img/bmx1.jpg";
import bmx2 from "../../img/bmx2.jpg";
import bmx3 from "../../img/bmx3.jpg";
import bmx4 from "../../img/bmx4.jpg";
import bmx5 from "../../img/bmx5.jpg";

export default (props) => {
    const object = React.useRef(null);
    const onLoad = () => {
        const container = $(object.current.contentDocument);
        $(container.find("svg g")).css("cursor", "pointer");
        $(
            container.find(
                'svg g[filter="url(#filter5_bd)"], svg g[filter="url(#filter6_d)"]'
            )
        ).on("click", function () {
            props.history.push("/donation");
        });
    };

    return (
        <Container>
            <Row>
                <Col xs="7">
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
                            <div
                                id="carouselIndex"
                                className="carousel slide carousel-fade shadow"
                                data-bs-ride="carousel"
                            >
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img
                                            src={bmx1}
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={bmx2}
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={bmx3}
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={bmx4}
                                            className="d-block w-100"
                                        />
                                    </div>
                                    <div className="carousel-item">
                                        <img
                                            src={bmx5}
                                            className="d-block w-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <div className="col-5 align-self-center">
                    <object
                        data={logo}
                        type="image/svg+xml"
                        ref={object}
                        onLoad={onLoad}
                    ></object>
                </div>
            </Row>
        </Container>
    );
};
