import React, { Component } from "react";

class Leveler_admin extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>td1</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>td2</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Leveler_admin;
