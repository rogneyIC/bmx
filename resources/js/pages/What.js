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
import what10 from "../../img/what/what10.png";
import what11 from "../../img/what/what11.png";
import what12 from "../../img/what/what12.png";
import what13 from "../../img/what/what13.png";

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
                    bmx motivando y generando más opciones de apoyo al bmx
                    regional y nacional.
                </p>
                <p>
                    En la plataforma podrás conocer una aproximación de tu nivel
                    real y referenciarlo a escala nacional.
                </p>
                <p>
                    Para esto deberás enviarnos el link de tus clips (ej.: link
                    de YouTube, Instagram, video, etc., de tus trucos y/o
                    combinaciones).
                </p>
                <p>
                    Nace de la idea de dar a conocer y potenciar el bmx en
                    Chile.
                </p>
                <p>
                    Nos gustaría ser una especie de ventana web que ayude a
                    descubrir a biker dedicados y a las promesas del bmx.
                </p>
            </Row>

            <Row>
                <Col>
                    <h3 className="text-center">¿Cómo funciona?</h3>
                    <ul className="index">
                        <li>
                            <a href="#accordion1" onClick={index}>
                                1 Funciones
                            </a>
                        </li>
                        <li>
                            <a href="#accordion2" onClick={index}>
                                2 ¿Cómo funciona?
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion3" onClick={index}>
                                2.1 Ejemplo de funcionamiento
                            </a>
                        </li>
                        <li>
                            <a href="#accordion4" onClick={index}>
                                3 Nivelador
                            </a>
                        </li>
                        <li className="ms-2">
                            <a href="#accordion5" onClick={index}>
                                3.1 Detalle de puntuación
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion6" onClick={index}>
                                3.1.1 Por disciplina
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion7" onClick={index}>
                                3.1.2 Por cada truco
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion8" onClick={index}>
                                3.1.3 Niveles de puntuación
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion9" onClick={index}>
                                3.1.4 Por categoría
                            </a>
                        </li>
                        <li className="ms-4">
                            <a href="#accordion10" onClick={index}>
                                3.1.5 Tabla resumen general
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
                            <strong>1 Funciones</strong>
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
                                <strong>“Nivelador”:</strong> En esta función
                                podrás conocer tu nivel calculado en un puntaje
                                ficticio según tus trucos aterrizados. Podrás
                                competir por premios en una animación que agrupa
                                y grafica los bmx de todas las regiones.
                            </p>
                            <p>
                                <strong>“Donaciones”:</strong> En esta función
                                se coordinarán todo tipo de donaciones que se
                                podrán usar como incentivo para en las
                                competencias de “nivelador”.
                            </p>
                            <p>
                                <strong>“Trip”:</strong> (próximamente
                                disponible) La función trip busca facilitar
                                viajes entre comunas y regiones para fomentar el
                                bmx, generar contactos y conocer gente para
                                ayudar a unir el bmx de todas las regiones.
                            </p>
                            <p>
                                <strong>“Datos técnicos”:</strong> (próximamente
                                disponible) En esta función tendrás información
                                técnica del deporte, podrás hacer consultas y
                                publicar tus experiencias relacionadas con el
                                bmx (de piezas, tips de trucos, cuidado de
                                lesiones, y más). Esta función busca informar,
                                educarnos entre nosotros y darle el peso que
                                corresponde al bmx.
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
                            <strong>2 ¿Cómo funciona?</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse2"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading2"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Funciona en base a tus clips, una puntuación
                                ficticia, un gráfico general y donaciones
                                voluntarias que incentiven el deporte.
                            </p>
                            <p>
                                Cada truco tendrá un puntaje variable
                                (dependiendo de la dificultad y tu motivación).
                            </p>
                            <p>
                                Por cada truco podrás sacar puntos por: 1era vez
                                que lo caigas, control y fluidez, altura o
                                combinación de 2 o más trucos.
                            </p>
                            <p>
                                Si hay donaciones, se usaran como premio en
                                competencias a distancia. Sera necesario cierto
                                compromiso de parte del donador (ya que si donas
                                algo que después te arrepientes, le habrás hecho
                                una falsa ilusión a algún rider que se haya
                                motivado con tu donación.
                            </p>
                            <p>
                                Mientras más motivado seas, mayor puntaje
                                sacaras y más posibilidades tendrás de ganar
                            </p>
                            <p>
                                Cuando lleguen donaciones*, CCO analizará la
                                donación y creará distintos tipos de
                                competencias (adaptadas a esta forma de competir
                                online) para potenciar y premiar el progreso del
                                rider
                            </p>
                            <p>
                                La idea es un tipo de competencia de largo
                                plazo, ideal para fechas sin campeonatos. Al ser
                                online será una competencia generalizada**
                            </p>
                            <p>
                                *También estaremos continuamente buscando apoyo
                                para generar un flujo constante de donaciones
                            </p>
                            <p>
                                **Generalizada porque el puntaje será aproximado
                                según lo que se pueda calcular de tu video. En
                                ningún caso CCO es lo mismo que un campeonato
                                presencial debido a todos esos factores que no
                                se pueden analizar a distancia
                            </p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" id="accordion3">
                    <h2 className="accordion-header" id="heading3">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapse3"
                            aria-expanded="false"
                            aria-controls="collapse3"
                        >
                            <strong>2.1 Ejemplo de funcionamiento</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse3"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading3"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <ol>
                                <li>
                                    Se reciben donaciones:
                                    <ul className="ulDonation">
                                        <li>
                                            Un plato 28 dientes usado sin
                                            detalles.
                                        </li>
                                        <li>Unos puños eclat nuevos.</li>
                                    </ul>
                                </li>
                                <li>
                                    Luego, CCO analiza cada premio e inventamos
                                    una competencia pensando a quien le podría
                                    servir más.
                                </li>
                                <li>
                                    Se publica la competencia:
                                    <br />
                                    Ej.:
                                    <ul className="ulDonation">
                                        <li>
                                            El plato se irá para el rider que
                                            tenga registrado mayor cantidad de
                                            trucos bajados al momento de la
                                            donación.
                                        </li>
                                        <li>
                                            Los puños se irán para el rider que:
                                            tenga más gastados los puños y que
                                            tenga la mayor cantidad de trucos
                                            bajados hace una semana atrás a
                                            partir del momento de la donación.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Así, esperamos ir generando apoyo y al mismo
                                    tiempo potenciando el bmx del país a
                                    distancia.
                                </li>
                            </ol>
                            <div className="text-center">
                                <Image src={what1} fluid rounded />
                            </div>
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
                                gráfica para mostrar el nivel aproximado de cada
                                biker y sus trucos.
                            </p>
                            <p>
                                Cada truco y/o combinación se le asignará un
                                puntaje ficticio según el
                                <strong>nivel</strong> y la{" "}
                                <strong>calidad</strong> del truco.
                            </p>
                            <p>
                                <strong>Nivel:</strong> para hacerlo más
                                práctico, hemos separado los trucos en 5 niveles
                                de complejidad (que define el rango puntaje que
                                puedes obtener).
                            </p>
                            <p>
                                <strong>Calidad:</strong> representa el puntaje
                                según el control, fluidez y estilo en la
                                bicicleta. Para esto, debes subir el video a
                                internet (YouTube, Instagram, video, etc.) y
                                enviarnos el link de tus videos para la
                                puntuación.
                            </p>
                            <p>
                                Además, tus trucos quedaran registrados como un
                                “historial de tus trucos” para mostrar los
                                detalles de cada biker (esto último estará
                                disponible próximamente).
                            </p>
                            <div className="text-center">
                                <Image src={what2} fluid rounded />
                            </div>
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
                            <strong>3.1 Detalle de la puntación</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse5"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading5"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Para evaluar la mayor cantidad de trucos y sus
                                combinaciones posibles, el puntaje dependerá de
                                5 factores principales (se detallan en el punto
                                3.1.2).
                            </p>
                            <ul className="ulDonation">
                                <li>1ra vez.</li>
                                <li>Control y fluidez.</li>
                                <li>Altura.</li>
                                <li>Spot.</li>
                                <li>Combinación.</li>
                            </ul>
                            <p>
                                Nota: esta forma de evaluar está en periodo de
                                prueba. Cualquier sugerencia o crítica
                                constructiva será bien recibida. Necesitamos ir
                                puliendo la evaluación para mejorar el cálculo
                                de tu nivel real
                            </p>
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
                            <strong>3.1.1 Por disciplina</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse6"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading6"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Los trucos los separamos en las 3 disciplinas
                                clásicas (más adelante queremos abarcar las
                                otras).
                            </p>
                            <p>
                                La puntuación total está pensada para motivar a
                                los rider a practicar al menos 2 disciplinas.
                            </p>
                            <p>
                                Por lo tanto, los biker más completos tendrán
                                más posibilidades de ganar.
                            </p>
                            <div className="text-center">
                                <Image src={what3} fluid rounded />
                            </div>
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
                            <strong>3.1.2 Por cada truco</strong>
                        </button>
                    </h2>
                    <div
                        id="collapse7"
                        className="accordion-collapse collapse"
                        aria-labelledby="heading7"
                        data-bs-parent="#function"
                    >
                        <div className="accordion-body">
                            <p>
                                Cada truco puede recibir puntos acumulables
                                según los siguientes factores:
                            </p>
                            <ul className="ulDonation">
                                <li>1ra vez.</li>
                                <li>Control y fluidez.</li>
                                <li>Altura.</li>
                                <li>Spot.</li>
                                <li>Combinación.</li>
                            </ul>
                            <strong>1) Por primera vez</strong>
                            <br />
                            <p>
                                Cada vez que caigas un truco por primera vez,
                                recibirás este puntaje. Los trucos están
                                separados por nivel de complejidad el cual
                                define la cantidad de puntos que sacas
                            </p>
                            <div>
                                <Image src={what4} fluid rounded />
                            </div>
                            <br />
                            <strong>2) Control y fluidez</strong>
                            <br />
                            <p>
                                Este puntaje se te sumara cada vez que cumplas
                                con un control relativo del truco (o
                                combinación).
                            </p>
                            <p>
                                Para esto, deberás enviar el truco caído tres
                                veces en la misma sesh
                            </p>
                            <p>
                                Estos 3 intentos deben cumplir con un mínimo de
                                control para sacar el puntaje.
                            </p>
                            <p>
                                Necesitarás tirar el truco con una altura mínima
                                (ver figura de altura), realizar el truco sin
                                complicaciones (sin mayor esfuerzo), movimientos
                                fluidos, giros controlados y un aterrizaje
                                limpio.
                            </p>
                            <p>
                                Este puntaje de control, se lo podrás sacar a
                                trucos individuales y combinaciones.
                            </p>
                            <div>
                                <Image src={what5} fluid rounded />
                            </div>
                            <br />
                            <strong>3) Altura</strong>
                            <br />
                            <p>
                                El puntaje de altura se sumara cada vez que
                                superes un rango aproximado de altura. Es
                                aproximado por ser una puntuación online, las
                                distancias verdaderas se distorsionan según la
                                ubicación de la cámara.
                            </p>
                            <p>
                                Para calcular la altura promedio, se medirá
                                según el tamaño de tu rueda. De esta forma
                                calcularemos la altura aproximada en los videos
                                que nos envíes.
                            </p>
                            <p>
                                (Para rider pequeñitos, la altura será según su
                                propio aro)
                            </p>
                            <p>
                                Cuando cueste demasiado calcular la altura,
                                simplemente no se evaluara y después podrás
                                enviar una nueva toma donde se logre apreciar
                                mejor la altura.
                            </p>
                            <p>(ver figura de abajo)</p>
                            <div className="text-center">
                                <Image src={what6} fluid rounded />
                                <Image src={what7} fluid rounded />
                            </div>
                            <br />
                            <strong>4) Spot</strong>
                            <br />
                            <p>
                                Este puntaje se sumara cuando sueltes trucos en
                                spot nuevos de mayor dificultad. Esta dificultad
                                se refiere principalmente a la altura del spot.
                            </p>
                            <div className="text-center">
                                <Image src={what8} fluid rounded />
                            </div>
                            <br />
                            <strong>5) Combinación</strong>
                            <br />
                            <p>
                                Este puntaje se te sumara cada vez que aterrices
                                dos o más trucos combinados.
                            </p>
                            <p>
                                Por ejemplo, si caes Barspin-No hander, los
                                puntos que sacaras serán la suma de la
                                combinación del bars y del no hander (ver imagen
                                de ejemplo)
                            </p>
                            <div className="text-center">
                                <Image src={what9} fluid rounded />
                            </div>
                            <p>
                                A estas combinaciones, también le podrás sacar
                                puntos de control, altura y spot si fuera el
                                caso
                            </p>
                            <p>
                                En street, se refiere a toda combinación que sea
                                continua. Continua se refiere a que los trucos
                                deben estar conectados entre ellos. La línea se
                                acaba cuando las dos ruedas tocan el piso (a
                                excepción de ir de fakie obviamente). Las líneas
                                exactamente iguales o muy parecidas (en trucos y
                                en spot parecidos), se analizarán juntas y solo
                                se tomará en cuenta la más completa.
                            </p>
                            Ej.
                            <ol>
                                <li>feeble + 180 + halcab a un cajon</li>
                                <li>
                                    feeble + 180 + halcab baspin a un cajon
                                    parecido.
                                </li>
                            </ol>
                            <p>
                                En un caso así, se puntuará solo la combinación
                                nº2.
                            </p>
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
                            <strong>3.1.3 Niveles de puntación</strong>
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
                                <Col className="text-center">
                                    <Image src={what10} fluid rounded />
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
                            <strong>3.1.4 Por categoría</strong>
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
                                    <Image src={what11} fluid rounded />
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
                            <strong>3.1.5 Tabla resumen general</strong>
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
                                <Col className="text-center">
                                    <Image src={what12} fluid rounded />
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
                            <Image src={what13} fluid rounded />
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
