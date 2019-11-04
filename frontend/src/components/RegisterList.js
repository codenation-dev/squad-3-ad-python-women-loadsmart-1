import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = props => (
    <tr>
        <td>{props.register.id}</td>
        <td>{props.register.level}</td>
        <td>{props.register.env}</td>
        <td>
            <Link to={"/edit/"+props.register.id}>Edit</Link>
        </td>
    </tr>
)

export default class RegisterList extends Component {

    constructor(props) {
        super(props);
        this.state = {registers: []};
    }

    componentDidMount() {
        axios.get('http://localhost:8000/api/central/')
            .then(response => {
                this.setState({ registers: response.data['results'] });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    registerList() {
        return this.state.registers.map(function(currentRegister, i){
            return <Register register={currentRegister} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Todos List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <body>
                        { this.registerList() }
                    </body>
                </table>
            </div>
        )
    }
}