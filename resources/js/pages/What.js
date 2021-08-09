import React, { useEffect } from "react";
import { Container, Row, Col, Accordion, Image, Card } from "react-bootstrap";

import bmx1 from "../../img/bmx1.jpg";
import bmx2 from "../../img/bmx2.jpg";
import bmx3 from "../../img/bmx3.jpg";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    }, []);

    return (
        <Container className="py-3 px-4">
            <Row>
                <h3 className="text-center">¿Qué es?</h3>
                <p>
                    <strong>CCO</strong> es una plataforma web que incentiva el
                    bmx chileno a través de ideas que buscan motivar y generar
                    apoyo al bmx nacional.
                </p>
                <p>
                    <strong>“Nivelador”:</strong> En esta función podrás conocer
                    tu nivel calculado en un puntaje ficticio según tus trucos
                    aterrizados. Podrás competir por premios en una animación
                    que agrupa y grafica los bmx de todas las regiones.
                </p>
                <p>
                    <strong>“Donaciones”:</strong> En esta función se
                    coordinarán todo tipo de donaciones usándolas como incentivo
                    para motivar el deporte.
                </p>
                <p>
                    <strong>“Trip”:</strong> (próximamente disponible) La
                    función trip busca fomentar los viajes interregionales
                    abriendo opciones y facilitando los viajes entre comunas y
                    regiones.
                </p>
                <p>
                    <strong>“Datos técnicos y salud”:</strong> (función
                    próximamente disponible) en esta función tendrás disponible
                    información técnica. Constara de un foro donde podrás leer y
                    consultar sobre tips, tratamiento lesiones, repuestos
                    compartiendo tus propias experiencias para la comunidad
                    biker.
                </p>
            </Row>

            <Row>
                <Col>
                    <h3 className="text-center">¿Cómo funciona?</h3>
                    <ul>
                        <li></li>
                    </ul>
                </Col>
            </Row>

            <div className="accordion" id="function1">
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
                            1 ¿Cómo funciona?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#function1"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <p>
                                        La plataforma funciona en base a los
                                        videos de tus trucos aterrizados. Se te
                                        entregara un puntaje según cada truco
                                        que bajes. El puntaje será ficticio y
                                        acumulable, el cual te servirá para
                                        nivelarte nacionalmente y competir (solo
                                        si quieres) por premios que se donaran
                                        en la misma plataforma.
                                    </p>
                                    <p>
                                        También encontraras información útil de
                                        todo tipo y esperamos incentivar los
                                        viajes interregionales a través de las
                                        nuevas ideas propuestas por nuestro
                                        equipo.
                                    </p>
                                    <p>
                                        Las “competencias” serán distintas.
                                        CCObmx propone un tipo de competencia
                                        mas generalizada y de largo plazo, ideal
                                        para los periodos “entre campeonatos”.
                                    </p>
                                    <p>
                                        CCO busca complementar las fechas de
                                        campeonatos premiando la constancia y
                                        dedicación cuando no haya eventos.
                                    </p>
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
