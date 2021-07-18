import React, { useEffect } from "react";

export default (props) => {
    useEffect(() => {
        if (props.refSidebar.current)
            props.refSidebar.current.style.display = "flex";

        if (props.refMainPanel.current)
            props.refMainPanel.current.style.width = "calc(100% - 287px)";
    });
    return (
        <div>
            <p>TRIP</p>
        </div>
    );
};
