import { useState } from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import Profile from "../../img/users/default-avatar.png";
import ModalAdminDonation from "./modal/ModalAdminDonation";

export default (props) => {
    const { read = false } = props;
    const readClassName = read ? "" : "text-danger";

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <ListGroup.Item
                //tag="a"
                action
                //href={link}
                className="border-bottom border-light"
                onClick={handleShow}
            >
                <Row className="align-items-center">
                    <Col className="col-auto">
                        <Image
                            src={Profile}
                            className="user-avatar lg-avatar rounded-circle"
                        />
                    </Col>
                    <Col className="ps-0 ms-2">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                                <h6 className="mb-0 text-small">
                                    {props.user_name}
                                </h6>
                            </div>
                            <div className="text-end">
                                <small className={readClassName}>
                                    {props.updated_at}
                                </small>
                            </div>
                        </div>
                        <p className="font-small mt-1 mb-0">{props.donation}</p>
                    </Col>
                </Row>
            </ListGroup.Item>

            <ModalAdminDonation show={show} setShow={setShow} props={props} />
        </>
    );
};
