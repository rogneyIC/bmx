import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Image, Card } from "react-bootstrap";

import bmx1 from "../../img/bmx1.jpg";
import bmx2 from "../../img/bmx2.jpg";
import bmx3 from "../../img/bmx3.jpg";
import bmx4 from "../../img/bmx4.jpg";
import bmx5 from "../../img/bmx5.jpg";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    });

    return (
        <Container className="py-3 px-4">
            <Row>
                <Col>
                    El BMX (abreviación de su nombre en inglés: "Bicycle
                    Motocross") es una disciplina del ciclismo que se practica
                    con bicicletas cross con ruedas de 20 pulgadas de diámetro.
                    El BMX abarca dos modalidades: carrera, cuyo objetivo es
                    completar el recorrido en el menor tiempo posible, y estilo
                    libre (freestyle), cuyo objetivo es realizar acrobacias.
                </Col>
            </Row>

            <div className="accordion" id="accordionWhat">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Accordion Item #1
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionWhat"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </Col>
                                <Col>
                                    <Image src={bmx1} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Accordion Item #2
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionWhat"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip
                                    ex ea commodo consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt
                                    mollit anim id est laborum.
                                </Col>
                                <Col>
                                    <Image src={bmx2} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Accordion Item #3
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionWhat"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <strong>
                                        This is the third item's accordion body.
                                    </strong>{" "}
                                    It is hidden by default, until the collapse
                                    plugin adds the appropriate classes that we
                                    use to style each element. These classes
                                    control the overall appearance, as well as
                                    the showing and hiding via CSS transitions.
                                    You can modify any of this with custom CSS
                                    or overriding our default variables. It's
                                    also worth noting that just about any HTML
                                    can go within the{" "}
                                    <code>.accordion-body</code>, though the
                                    transition does limit overflow.
                                </Col>
                                <Col>
                                    <Image src={bmx3} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
