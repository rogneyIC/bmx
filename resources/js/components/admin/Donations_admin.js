import React from "react";

class Donations_admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <table className="table table-success table-striped table-hover table-bordered border-primary">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Pepe</td>
                                <td>pepe@gmail.com</td>
                                <td>76829301</td>
                            </tr>
                            <tr>
                                <td>Roberto</td>
                                <td>robert@gmail.com</td>
                                <td>128303912</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-4 d-grid">
                        <button type="button" class="btn btn-primary btn-lg">
                            Haz tu donación
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Donations_admin;
