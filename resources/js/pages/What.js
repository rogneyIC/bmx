import React, { useEffect, useRef } from "react";
import { Container, Row, Col, Accordion, Image, Card } from "react-bootstrap";

import what1 from "../../img/what/what1.png";
import what2 from "../../img/what/what2.png";
import what3 from "../../img/what/what3.png";
import what4 from "../../img/what/what4.png";
import what5 from "../../img/what/what5.png";
import what6 from "../../img/what/what6.png";
import what7 from "../../img/what/what7.png";
import what8 from "../../img/what/what8.png";
import what9 from "../../img/what/what9.png";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    }, []);

    const index = (e) => {
        $(e.target.hash).find(".collapse").collapse("show");
    };

    return (
        <Container className="py-3 px-4 what">
            <Row>
                <h3 className="text-center">¿Qué es?</h3>
                <p>
                    <strong>CCO</strong> es una plataforma web que incentiva el
                    bmx chileno con ideas que buscan motivar y generar apoyo al
                    bmx regional y nacional.
                </p>
                <p>
                    En la plataforma podrás conocer tu nivel aproximado,
                    proponerte metas y referenciarlas según tu región o a nivel
                    nacional.
                </p>
                <p>
                    Para esto solo deberás enviarnos el link de tus clips con
                    tus trucos (ej.: link de YouTube, Instagram, Vimeo, etc.)
                </p>
                <p>
                    Tendrás información técnica, podrás hacer consultas y
                    publicar tus experiencias (de piezas, tipos de trucos,
                    cuidado de lesiones, y más).
                </p>
                <p>
                    Nos gustaría ser una especie de ventana web donde las marcas
                    puedan descubrir riders potencialmente competitivos.
                </p>
                <p>
                    <strong>
                        <em>Comparte</em>
                    </strong>{" "}
                    {"->"} Viene de la idea de buscar apoyo entre nosotros,
                    marcas y en cualquier persona que quiera aportar con el
                    deporte.
                </p>
                <p>
                    <strong>
                        <em>Compite</em>
                    </strong>{" "}
                    {"->"} Viene de la idea de generar una “competencia” a
                    distancia y en tiempo real que pueda potencie el bmx en
                    diferentes partes del país al mismo tiempo.
                </p>
                <p>
                    Nace de la idea de dar a conocer a los biker dedicados y al
                    mismo tiempo busca potenciar y consolidar el bmx nacional.
                </p>
            </Row>

            <Row>
                <Col>
                    <h3 className="text-center">¿Cómo funciona?</h3>
                    <ul className="index">
                        <li>
                            <a href="#accordion1" onClick={index}>
                                1 ¿Cómo funciona?
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion2" onClick={index}>
                                1.1 Ejemplo de funcionamiento
                            </a>
                        </li>
                        <li>
                            <a href="#accordion3" onClick={index}>
                                2 Funciones
                            </a>
                        </li>
                        <li>
                            <a href="#accordion4" onClick={index}>
                                3 Nivelador
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion5" onClick={index}>
                                3.1 Ejemplo
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion6" onClick={index}>
                                3.2 Detalle de puntuación
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion6" onClick={index}>
                                3.2.1 Por disciplina
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion7" onClick={index}>
                                3.2.2 Por cada truco
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion8" onClick={index}>
                                3.2.3 Niveles de puntuación
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion9" onClick={index}>
                                3.2.4 Por categoría
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion10" onClick={index}>
                                3.2.5 Tabla resumen general
                            </a>
                        </li>
                        <li>
                            <a href="#accordion11" onClick={index}>
                                4 Donaciones
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion12" onClick={index}>
                                4.1 ¿Qué se puede donar?
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion13" onClick={index}>
                                4.2 Ideas para motivar
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion13" onClick={index}>
                                4.2.1 Elige el destino de tu donación
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion14" onClick={index}>
                                4.2.2 Cadena de donación
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion15" onClick={index}>
                                4.3 Entrega de premios
                            </a>
                        </li>
                        <li>
                            <a href="#accordion16" onClick={index}>
                                5 Trip
                            </a>
                        </li>
                        <li>
                            <a href="#accordion17" onClick={index}>
                                6 Datos técnicos
                            </a>
                        </li>
                        <li>
                            <a href="#accordion18" onClick={index}>
                                7 Próximamente
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion19" onClick={index}>
                                7.1 Tu perfil
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion20" onClick={index}>
                                7.2 Lugares que andan xd
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion21" onClick={index}>
                                7.3 Liguilla presencial
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>

            <div className="accordion accordion-flush" id="function">
                <div className="accordion-item" id="accordion1">
                    <h2 className="accordion-header" id="heading1">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse1"
                            aria-expanded="false"
                            aria-controls="collapse1"
                        >
                            <strong>1 ¿Cómo funciona?</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse1"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading1"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Funciona en base a tus trucos aterrizados, una
                                puntuación ficticia y donaciones voluntarias
                                para incentivar la superación de cada uno.
                            </p>
                            <p>
                                Cada truco tendrá un puntaje (dependiendo su
                                dificultad promedio) y al mismo tiempo podrás
                                sacarle más puntos según: el control, la altura
                                o combinación que le des al truco. Solo nos
                                debes enviar tus videos para CCO te evalúe.
                            </p>
                            <p>
                                Las donaciones se podrán hacer en cualquier
                                momento y desde cualquier parte de chile. Solo
                                es necesario cierto compromiso de parte del
                                donador (ya que, si donas algo que después te
                                arrepientes, le habrás hecho una falsa ilusión a
                                algún rider que se haya motivado con tu
                                donación.
                            </p>
                            <p>
                                Tus trucos en videos te darán cierto puntaje que
                                se ira acumulando en el tiempo. En la misma
                                grafica veras tu progreso y de riders de todo
                                chile permitiendo nivelarse a distancia.
                            </p>
                            <p>
                                Cuando lleguen donaciones*, CCO analizara la
                                donación y creara distintos tipos de
                                competencias (adaptadas a esta nueva forma de
                                competir online) para potenciar y premiar a los
                                rider que más les pueda servir.{" "}
                            </p>
                            <p>
                                Las “competencias” serán distintas. La idea es
                                un tipo de competencia más generalizada** y de
                                largo plazo, ideal para las fechas “entre
                                campeonatos”.{" "}
                            </p>
                            <p>
                                También encontraras información útil de todo
                                tipo y esperamos incentivar los viajes
                                interregionales a través de las nuevas ideas
                                propuestas por nuestro equipo.
                            </p>
                            <p>
                                *También como CCO estaremos buscando apoyo para
                                generar un flujo constante de donaciones.
                            </p>
                            <p>
                                **Generalizada porque el puntaje será aproximado
                                según lo que se pueda calcular de tu video. En
                                ningún caso CCO lograra ser lo mismo que un
                                campeonato presencial (obviamente, ya que hay
                                muchos factores que no podemos analizar a
                                distancia) pero buscamos complementar los
                                campeonatos presenciales motivando la constancia
                                y competencia cuando no haya eventos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion2">
                    <h2 className="accordion-header" id="heading2">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse2"
                            aria-expanded="false"
                            aria-controls="collapse2"
                        >
                            <strong>1.1 Ejemplo de funcionamiento</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <ol>
                                        <li>
                                            Se reciben donaciones <br />- Un
                                            plato 28 dientes usado sin detalles
                                            <br />- y unos puños eclat nuevos.
                                        </li>
                                        <li>
                                            Luego, CCO analiza cada premio e
                                            inventamos una competencia pensando
                                            a quien le podría servir más.
                                        </li>
                                        <li>
                                            Se publica la competencia:
                                            <br />- El plato se ira para el
                                            rider que tenga registrado mayor
                                            cantidad de trucos bajados al
                                            momento de la donación
                                            <br />- Y los puños se irán para el
                                            rider que: tenga más gastados los
                                            puños y que tenga la mayor cantidad
                                            de trucos bajados en la última
                                            semana a partir del momento de la
                                            donación
                                        </li>
                                        <li>
                                            Así, esperamos ir generando apoyo y
                                            al mismo tiempo potenciando el bmx
                                            del país a distancia.
                                        </li>
                                    </ol>
                                </Col>
                                <Col>
                                    <Image src={what1} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion3">
                    <h2 className="accordion-header" id="heading3">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="true"
                            aria-controls="collapse3"
                        >
                            <strong>2 Funciones</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse3"
                        className="accordion-collapse collapse show"
                        aria-labelledby="heading3"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                <strong>“Nivelador”:</strong> En esta función
                                podrás conocer tu nivel calculado en un puntaje
                                ficticio según tus trucos aterrizados. Podrás
                                competir por premios en una animación que agrupa
                                y grafica los bmx de todas las regiones.
                            </p>
                            <p>
                                <strong>Donaciones:</strong> En esta función se
                                coordinarán todo tipo de donaciones que se
                                podrán usar como incentivo para motivar el bmx.
                            </p>
                            <p>
                                <strong>Trip:</strong>{" "}
                                <em>(próximamente disponible)</em> La función
                                trip busca facilitar los viajes entre comunas y
                                regiones para fomentar el bmx, para que conozcan
                                gente y gerar contactos con todas las regiones.
                            </p>
                            <p>
                                <strong>Datos técnicos:</strong>{" "}
                                <em>(próximamente disponible)</em> En esta
                                función información para leer (tips) técnica,
                                además podrás publicar y comentar. Constará de
                                un foro donde podrás leer y consultar sobre
                                tips, tratamiento lesiones, repuestos
                                compartiendo tus propias experiencias para la
                                comunidad biker.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion4">
                    <h2 className="accordion-header" id="heading4">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse4"
                            aria-expanded="false"
                            aria-controls="collapse4"
                        >
                            <strong>3 Nivelador</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse4"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading4"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Esta función busca motivar el bmx a través de la
                                nivelación a distancia. Se usa una animación
                                grafica para mostrar el nivel aproximadamente de
                                cada biker y sus trucos.
                            </p>
                            <p>
                                Cada truco y/o combinación se le asignara un
                                puntaje ficticio según el
                                <strong>nivel</strong> y la{" "}
                                <strong>calidad</strong> del truco.
                            </p>
                            <p>
                                <strong>Nivel:</strong> para hacerlo mas
                                practico, hemos separado los trucos en 4 niveles
                                de complejidad (que define el rango puntaje que
                                puedes obtener).
                            </p>
                            <p>
                                <strong>Calidad:</strong> representa el puntaje
                                según el control, fluidez y estilo en la
                                bicicleta. Para esto, debes subir el video a
                                internet (YouTube, Instagram, Vimeo, etc.) y
                                enviarnos el link de tus videos para la
                                puntuación.
                            </p>
                            <p>
                                Además, tus trucos quedaran registrados como un
                                “historial de tus trucos” para mostrar los
                                detalles de cada biker (esto último estará
                                disponible próximamente).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion5">
                    <h2 className="accordion-header" id="heading5">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse5"
                            aria-expanded="false"
                            aria-controls="collapse5"
                        >
                            <strong>3.1 Ejemplo</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col className="text-center">
                                    <Image src={what2} fluid rounded />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        Así podrás ir avanzando en tu progreso y
                                        podrás subirlo en CCO para postular a
                                        premios y nivelarte a distancia.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion6">
                    <h2 className="accordion-header" id="heading6">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse6"
                            aria-expanded="false"
                            aria-controls="collapse6"
                        >
                            <strong>
                                3.2 Detalle de la puntación <br />
                                3.2.1 Por disciplina
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <p>
                                        Por ahora abarcamos solo 3 disciplinas:
                                        Street, park y dirt. Además, el puntaje
                                        está pensado para casi “obligar” a los
                                        rider a practicar al menos 2 disciplinas
                                        (hay que andar en todos lados por cabros
                                        jjajsk)
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image src={what3} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion7">
                    <h2 className="accordion-header" id="heading7">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse7"
                            aria-expanded="false"
                            aria-controls="collapse7"
                        >
                            <strong>3.2.2 Por cada truco</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <p>
                                        Cada truco puede recibir diferentes
                                        puntuaciones según los siguientes
                                        factores:
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image src={what4} fluid rounded />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Figura de rangos de altura:</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image src={what5} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion8">
                    <h2 className="accordion-header" id="heading8">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse8"
                            aria-expanded="false"
                            aria-controls="collapse8"
                        >
                            <strong>3.2.3 Niveles de puntación</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse8"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading8"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <p>
                                        Los trucos se dividen en 5 niveles de
                                        puntaje. Están clasificados en orden de
                                        dificultad (según lo que preguntamos por
                                        Instagram, los trucos se pueden ir
                                        cambiando de nivel si la mayoría está de
                                        acuerdo)
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Image src={what6} fluid rounded />
                                </Col>
                                <Col>
                                    <Image src={what7} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion9">
                    <h2 className="accordion-header" id="heading9">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse9"
                            aria-expanded="false"
                            aria-controls="collapse9"
                        >
                            <strong>3.2.4 Por categoría</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse9"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading9"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <Image src={what8} fluid rounded />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>
                                        Las categorías las calculamos con el
                                        puntaje de ciertos cantidad de trucos y
                                        combinaciones preguntados por Instagram.
                                    </p>
                                    <p>
                                        Estos trucos los debes controlar y los
                                        debes soltar al menos en 2 disciplinas
                                        para motivar y premiar a los rider más
                                        completos.
                                    </p>
                                    <p>
                                        En <strong>iniciante</strong>, por
                                        ejemplo, deberás controlar todos los
                                        trucos del nivel 1, la mitad del nivel 2
                                        y algunas combinaciones de ambos
                                        niveles, con esto sumaras 2000 puntos
                                        aproximadamente.
                                    </p>
                                    <p>
                                        Para <strong>intermedio</strong> deberás
                                        controlar hasta la mitad del nivel 3 más
                                        algunas combinaciones.
                                    </p>
                                    <p>
                                        Para <strong>experto</strong> debes
                                        controlar hasta la mitad del nivel 4
                                        aproximadamente más combinaciones con
                                        los niveles anteriores.
                                    </p>
                                    <p>
                                        Y para <strong>pro</strong> debes
                                        superar la mitad del nivel 4 en
                                        adelante, sumando a tu puntaje todas las
                                        combinaciones que quieras darle.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion10">
                    <h2 className="accordion-header" id="heading10">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse10"
                            aria-expanded="false"
                            aria-controls="collapse10"
                        >
                            <strong>3.2.5 Tabla resumen general</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse10"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading10"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <Row>
                                <Col>
                                    <Image src={what8} fluid rounded />
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion11">
                    <h2 className="accordion-header" id="heading11">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse11"
                            aria-expanded="false"
                            aria-controls="collapse11"
                        >
                            <strong>4 Donaciones</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse11"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading11"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Esta función trata de facilitar el apoyo al bmx
                                coordinando todo tipo de donaciones y aportes
                                que sirvan para motivar el deporte.
                            </p>
                            <p>
                                La idea de “donaciones”, es una sección para
                                facilitar el apoyo al bmx. Casi cualquier
                                persona podrá donar de forma fácil y sencilla a
                                través de CCO bmx.
                            </p>
                            <p>
                                Además, estas donaciones servirán como incentivo
                                para motivar y desarrollar el deporte a través
                                de la competencia a distancia.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion12">
                    <h2 className="accordion-header" id="heading12">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse12"
                            aria-expanded="false"
                            aria-controls="collapse12"
                        >
                            <strong>4.1 ¿Qué se puede donar?</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse12"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading12"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Cualquier cosa que se pueda relacionar con el
                                deporte o que sirva incentivo para nosotros, por
                                ejemplo, stikers, piezas usadas en buen estado,
                                piezas nuevas, también pueden ser accesorios
                                como vendas, tobilleras, bolsitos, o alimentos,
                                bebidas para deportistas, productos para dolores
                                y cualquier cosa que de alguna forma sea un
                                apoyo o incentivo para biker.
                            </p>
                            <p>
                                También como CCO estaremos en una constante
                                búsqueda de posibles donaciones para generar un
                                flujo continuo de apoyo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion13">
                    <h2 className="accordion-header" id="heading13">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse13"
                            aria-expanded="false"
                            aria-controls="collapse13"
                        >
                            <strong>
                                4.2 Ideas para motivar
                                <br />
                                4.2.1 Elige el destino de tu donación
                            </strong>
                        </button>
                    </h2>
                    <div
                        id="collapse13"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading13"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p className="mb-0">
                                Al donar algo puedes elegir a quien regalar tu
                                donación. Podrás donarlo a:
                            </p>
                            <ul className="ps-4 ulDonation">
                                <li>
                                    “competencia” donde tu aporte se usará como
                                    premio en alguna competencia de CCO.
                                </li>
                                <li>
                                    “un biker” donde podrás regalarle
                                    directamente a algún biker.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion14">
                    <h2 className="accordion-header" id="heading14">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse14"
                            aria-expanded="false"
                            aria-controls="collapse14"
                        >
                            <strong>4.2.2 Cadena de donación</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse14"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading14"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Esta idea es para “multiplicar” el apoyo a
                                partir de una sola donación y funciona con rider
                                voluntarios que quieran apañar la propuesta. Se
                                trata de una “cadena” que trata de generar una
                                seguidilla de donaciones seguidas.
                            </p>
                            <p>
                                Inicia con una primera donación (ejemplo una
                                steam), la cual se regala en una competencia
                                donde el ganador de esta pieza (si quiere y si
                                puede), puede donar su steam sobrante para
                                premiar a un nuevo biker en una nueva
                                competencia.
                            </p>
                            <p>
                                Este 2do ganador (sólo si quiere y si puede),
                                podría donar también su steam sobrante en una
                                3era competencia beneficiando a un tercer biker.
                                Y asi sucesivamente repetir la dinámica las
                                veces que se pueda, hasta que un biker no
                                quiera, no le convenga o no puede porque la otra
                                pieza cago xd.
                            </p>
                            <p>
                                Con esta idea tratamos de generar varias
                                competencias a partir de una donación.
                            </p>
                            <Image src={what9} fluid rounded />
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion15">
                    <h2 className="accordion-header" id="heading15">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse15"
                            aria-expanded="false"
                            aria-controls="collapse15"
                        >
                            <strong>4.3 Entrega de premios</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse15"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading15"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                La donación necesita cierta seriedad de parte
                                del donador y del que recibe el premio. Cada
                                donador podrá ofrecer su aporte por la página y
                                no es necesario que la envíe a CCO bmx.
                            </p>
                            <p>
                                Solo deberá comprometerse a entregar sí o sí su
                                donación al ganador.
                            </p>
                            <p>
                                Luego de definir el ganador, deberá enviar por
                                pagar su donación directamente a la persona que
                                se lo gano por el medio que usted prefiera (si
                                además paga el envío ya seria extraordinario
                                jajaja).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion16">
                    <h2 className="accordion-header" id="heading16">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse16"
                            aria-expanded="false"
                            aria-controls="collapse16"
                        >
                            <strong>5 Trip</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse16"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading16"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <h4>Detalles aun no disponibles</h4>
                            <p>
                                La función trip tendrá como objetivo facilitar
                                los viajes entre comunas y regiones como fomento
                                al bmx. Esto sería para disminuir costos en sus
                                viajes, para que conozcan gente y hacer
                                contactos con todas las regiones.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion17">
                    <h2 className="accordion-header" id="heading17">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse17"
                            aria-expanded="false"
                            aria-controls="collapse17"
                        >
                            <strong>6 Datos técnicos</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse17"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading17"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <h4>Detalles aun no disponibles</h4>
                            <p>
                                En esta función tiene como objetivo informar y
                                compartir opiniones esperando educar sobre
                                deporte bmx.
                            </p>
                            <p>
                                Tendrás información para leer, podrás hacer
                                consultas sobre tips, tratamiento lesiones,
                                repuestos y podrás compartir tus propias
                                experiencias y opiniones para el beneficio de
                                todos.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion18">
                    <h2 className="accordion-header" id="heading18">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse18"
                            aria-expanded="false"
                            aria-controls="collapse18"
                        >
                            <strong>7 Próximamente</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse18"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading18"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Aquí numeramos otro par de ideas que tenemos
                                trabajadas las cuales iremos publicando a medida
                                como resulte CCO bmx.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion19">
                    <h2 className="accordion-header" id="heading19">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse19"
                            aria-expanded="false"
                            aria-controls="collapse19"
                        >
                            <strong>7.1 Tu perfil</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse19"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading19"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                En esta sección encontraras lo clásico de un
                                perfil y sus datos. También podrás ver tu nivel
                                de forma individual y tu historial de trucos y
                                combinaciones.
                            </p>
                            <p>
                                La idea, es que, si no eres competitivo, pero
                                aun así quieres conocer tu nivel respecto todo
                                chile, calcularemos tu puntaje, pero sin hacerlo
                                público en el <em>nivelador</em>.
                            </p>
                            <p>
                                Además, si eres pro amateur y llegas a captar la
                                atención de alguna marca, en tu perfil se
                                encontrarán los datos necesarios para
                                contactarte directamente contigo.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion20">
                    <h2 className="accordion-header" id="heading20">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse20"
                            aria-expanded="false"
                            aria-controls="collapse20"
                        >
                            <strong>7.2 Lugares que andan xd</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse20"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading20"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                El nombre se lo pusimos para ponerle gracia no
                                más jajaja.
                            </p>
                            <p>
                                Se trata de una sección donde se podrá subir
                                (con coordenadas para buscar por internet) los
                                diferentes spot y lugares que hay para andar en
                                cada región (sea spot de Street, rampas,
                                skatepark y cualquier lugar que sirva para
                                andar).
                            </p>
                            <p>
                                La idea es para dar a conocer diferentes lugares
                                para andar y motivar a los biker a andar en
                                todos lados. Además, para cuando viajes, que
                                sirva de ayuda para encontrar directamente los
                                lugares pa andar en la región que te encuentres.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion21">
                    <h2 className="accordion-header" id="heading21">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse21"
                            aria-expanded="false"
                            aria-controls="collapse21"
                        >
                            <strong>7.3 Liguilla presencial</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse21"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading21"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Esta sección, recopilaremos información de todos
                                los campeonatos hechos en chile para hacer una
                                especie de ranking nacional enfocado en la
                                puntuación presencial, con todos los factores
                                que la competencia online no puede medir
                                (curvaturas de guata, deformidades en una rampa,
                                nervios por el público, o el frio, y todos esos
                                factores de las competencias presenciales).
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};
