import React, { Component } from 'react';
import bmx1 from "../../../img/bmx1.jpg";
import { Link } from "react-router-dom";

class What_user extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                </div>
                <div className="row">
                    <div className="col-6"></div>
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
 
export default What_user;