import React from "react";
import Logo from "../../img/logo-index.svg";

export default (props) => {
    const object = React.useRef(null);
    const onLoad = () => {
        const container = $(object.current.contentDocument);
        $(container.find("#svg-leveler")).on("click", function () {
            props.props.history.push("/leveler");
        });
        $(container.find("#svg-donation")).on("click", function () {
            props.props.history.push("/donation");
        });
        $(container.find("#svg-what")).on("click", function () {
            props.props.history.push("/what");
        });
        $(container.find("#svg-dataTec")).on("click", function () {
            props.props.history.push("/datatec");
        });
        $(container.find("#svg-trip")).on("click", function () {
            props.props.history.push("/trip");
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
