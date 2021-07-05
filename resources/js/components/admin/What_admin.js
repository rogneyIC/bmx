import React from "react";
import bmx1 from "../../../img/bmx1.jpg";
import { Link } from "react-router-dom";

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
                <div className="row justify-content-md-end">
                    <div className="col-2 d-grid">
                        <Link to="/home" className="btn btn-primary btn-lg">
                            Atrás
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default What_admin;
