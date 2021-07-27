import axios from "axios";
import { useState } from "react";
import { Button, Form, ListGroup, Modal, Row } from "react-bootstrap";
import toastr from "toastr";

export default (props) => {
    console.log(props);
    const handleClose = () => props.setShow(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [trick, setTrick] = useState("");
    const [link, setLink] = useState("");
    const [point, setPoint] = useState("");

    const onShow = () => {
        setName(props.name);
        setPhone(props.phone);
        setInstagram(props.instagram);
        setTrick(props.trick);
        setLink(props.link);
        setPoint(props.point);
    };

    const sendData = async (e) => {
        e.preventDefault();
        const id = props.progress_id;
        const data = {
            id,
            trick,
            link,
            point,
        };
        await axios
            .post("/progress/update", data)
            .then((response) => {
                handleClose();
                toastr.success("Progreso del usuario aptualizado con éxito");
            })
            .catch((error) => {
                console.error(error);
                toastr.warning(error);
            });
    };

    const handleDelete = async () => {
        const id = props.props.progress_id;
        await axios
            .post("/progress/delete", id)
            .then((response) => {
                handleClose();
                toastr.success("Progreso eliminado con éxito");
            })
            .catch((error) => {
                console.log(error);
                toastr.warning(error);
            });
    };

    return (
        <Modal
            show={props.show}
            onHide={handleClose}
            size="lg"
            onShow={onShow}
            centered
        >
            <Modal.Header>
                <Modal.Title>Progreso:</Modal.Title>
                <button
                    type="button"
                    className="btn-close"
                    onClick={handleClose}
                ></button>
            </Modal.Header>
            <Form onSubmit={sendData}>
                <Modal.Body className="px-4 overflow">
                    <Row>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Nombre:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Número:</Form.Label>
                            <Form.Control
                                type="text"
                                name="phone"
                                value={phone}
                                disabled
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Instagram:</Form.Label>
                            <Form.Control
                                type="text"
                                name="instagram"
                                value={instagram}
                                disabled
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group className="mb-3 col">
                            <Form.Label>Link:</Form.Label>
                            <Form.Control
                                type="text"
                                name="link"
                                value={link}
                                onChange={(event) =>
                                    setLink(event.target.value)
                                }
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 col-2">
                            <Form.Label>Puntos:</Form.Label>
                            <Form.Control
                                type="text"
                                name="point"
                                value={point}
                                onChange={(event) =>
                                    setPoint(event.target.value)
                                }
                            />
                        </Form.Group>
                    </Row>
                    <Row>
                        <ListGroup className="col">
                            <ListGroup.Item className="text-center fw-bold">
                                {"Trucos:"}
                            </ListGroup.Item>
                            {Object.keys(props.trick).map((oneKey, i) => {
                                return (
                                    <ListGroup.Item key={i}>
                                        {i + 1 + " - " + props.trick[oneKey]}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Aceptar
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};
