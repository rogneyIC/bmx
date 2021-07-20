import React from "react";
import ReactDOM from "react-dom";
import { Container, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";

function Main() {
    return (
        <Container className="text-center">
            <a href="/">
                <FaIcons.FaAngleLeft /> Regresar al inicio
            </a>
            <Row></Row>
        </Container>
    );
}
export default Main;
if (document.getElementById("main"))
    ReactDOM.render(<Main />, document.getElementById("main"));
