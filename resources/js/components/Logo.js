import React from "react";
import Logo from "../../img/logo-index.svg";
import { useNavigate } from "react-router-dom";

export default () => {
    const object = React.useRef(null);
    const navigate = useNavigate();
    const onLoad = () => {
        const container = $(object.current.contentDocument);
        $(container.find("#svg-leveler")).on("click", function () {
            navigate("/leveler");
        });
        $(container.find("#svg-donation")).on("click", function () {
            navigate("/donation");
        });
        $(container.find("#svg-what")).on("click", function () {
            navigate("/what");
        });
        $(container.find("#svg-dataTec")).on("click", function () {
            navigate("/datatec");
        });
        $(container.find("#svg-trip")).on("click", function () {
            navigate("/trip");
        });
    };

    return (
        <object
            data={Logo}
            type="image/svg+xml"
            ref={object}
            onLoad={onLoad}
        ></object>
    );
};
