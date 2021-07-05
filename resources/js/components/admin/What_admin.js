import React from "react";
import bmx1 from "../../../img/bmx1.jpg";

class What_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <textarea
                            className="form-control shadow"
                            rows="10"
                        ></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <textarea
                            className="form-control shadow"
                            rows="15"
                        ></textarea>
                    </div>
                    <div className="col-6">
                        <img src={bmx1} className="img-fluid" />
                    </div>
                </div>
            </div>
        );
    }
}

export default What_admin;
