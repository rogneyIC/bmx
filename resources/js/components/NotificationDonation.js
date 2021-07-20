import React from 'react';
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import Profile from "../../img/users/default-avatar.png";

export default (props) => {
    const { link, user_name, image, updated_at, donation, read = false } = props;
    const readClassName = read ? "" : "text-danger";

    return (
        <ListGroup.Item
            tag="a"
            action
            //href={link}
            className="border-bottom border-light"
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
                            <h6 className="mb-0 text-small">{user_name}</h6>
                        </div>
                        <div className="text-end">
                            <small className={readClassName}>{updated_at}</small>
                        </div>
                    </div>
                    <p className="font-small mt-1 mb-0">{donation}</p>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};
