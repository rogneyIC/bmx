import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row, Tab, Tabs } from "react-bootstrap";

export default (props) => {
    const [progress, setProgress] = useState([]);

    const getProgress = async () => {
        await axios
            .post("/progress/get", { user_id: props.user.id })
            .then((response) => {
                /*let date = new Date(response.data[0].created_at).toISOString();
                console.log(
                    response.data[0].created_at.slice(0, 19).replace("T", " ")
                );*/
                console.log(response.data);
                setProgress(response.data);
            })
            .catch((error) => {
                toastr.error(error);
            });
    };

    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";

        getProgress();
    }, []);

    const srcImg = "/images/avatars/" + props.user.photo;

    return (
        <Container className="py-3 px-4 profile">
            <Row>
                <Col xs={3} className="text-center">
                    <img
                        src={srcImg}
                        className="user-avatar md-avatar rounded-circle"
                    />
                </Col>
                <Col xs={9}>
                    <Tabs
                        defaultActiveKey="profile"
                        id="uncontrolled-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="profile" title="Perfil">
                            Perfil
                        </Tab>
                        <Tab eventKey="history" title="Historial">
                            <ListGroup>
                                {progress.length == 0 ? (
                                    <ListGroup.Item className="text-center">
                                        Usted no tiene avances
                                    </ListGroup.Item>
                                ) : (
                                    progress.map((n) => (
                                        <ListGroup.Item key={n.id}>
                                            <Row>
                                                <Col>{n.trick}</Col>
                                                <Col>
                                                    {n.created_at
                                                        .slice(0, 19)
                                                        .replace("T", " ")}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))
                                )}
                            </ListGroup>
                        </Tab>
                        <Tab eventKey="config" title="Configuraciones">
                            Configuraciones
                        </Tab>
                        <Tab eventKey="message" title="Mensajes">
                            Mensajes
                        </Tab>
                        <Tab eventKey="support" title="Soporte">
                            Soporte
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container>
    );
};
