import React from "react";
import { Container, Row, Col } from "reactstrap";
import img_chart from "../../img/img-chart.jpg";
import LevelerChart from "../components/LevelerChart";

export default (props) => {
    return (
        <Container>
            <Row>
                <Col xs="2">
                    <img src={img_chart} className="img-fluid" alt="..." />
                </Col>
                <Col xs="10">
                    <LevelerChart></LevelerChart>
                </Col>
            </Row>
        </Container>
    );
};
