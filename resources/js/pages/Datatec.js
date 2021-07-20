import React, { useEffect } from "react";
import { Container } from "react-bootstrap";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 256px)";
    });
    return (
        <Container className="py-3 px-4">
            <p>Datos técnicos</p>
        </Container>
    );
};
