import React, { Component } from "react";
import logo from "../../../img/logo.svg";
import bmx1 from "../../../img/bmx1.jpg";
import bmx2 from "../../../img/bmx2.jpg";
import bmx3 from "../../../img/bmx3.jpg";

class Home_admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.myRef = React.createRef();
        this.onLoad = this.onLoad.bind(this);
    }
    // componentDidMount() {

    // }
    onLoad() {
        const container = $(this.myRef.current.contentDocument);
        const _this = this;
        $(container.find("svg g")).css("cursor", "pointer");
        $(
            container.find(
                'svg g[filter="url(#filter5_bd)"], svg g[filter="url(#filter6_d)"]'
            )
        ).on("click", function () {
            _this.props.history.push("/what");
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-5">
                        <div className="row padding20">
                            <div className="col">
                                <textarea
                                    className="form-control shadow"
                                    rows="5"
                                ></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div
                                    id="carouselIndex"
                                    className="carousel slide carousel-fade shadow"
                                    data-ride="carousel"
                                >
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img
                                                src={bmx1}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={bmx2}
                                                className="d-block w-100"
                                            />
                                        </div>
                                        <div className="carousel-item">
                                            <img
                                                src={bmx3}
                                                className="d-block w-100"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-3 align-self-center">
                        <object
                            data={logo}
                            type="image/svg+xml"
                            ref={this.myRef}
                            onLoad={this.onLoad}
                        ></object>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home_admin;
