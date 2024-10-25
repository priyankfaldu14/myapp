import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Apiformclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aray: []
        };
        this.deleteData = this.deleteData.bind(this);
    }

    componentDidMount() {
        this.getApiData();
    }

    getApiData() {
        axios.get("https://student-api.mycodelibraries.com/api/user/get")
            .then((res) => {
                this.setState({ aray: [...res.data.data] });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    deleteData(id) {
        axios.delete('https://student-api.mycodelibraries.com/api/user/delete?id=' + id)
            .then((res) => {
                this.getApiData();
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <h1 className='text-center'>RouteClassTableApi</h1>
                <div className="border border-2 w-25 mx-auto border-dark mb-4"></div>
                <table border={4} className='table w-100'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Profile</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>City</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Hobbies</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.aray.map((x, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{x._id}</td>
                                        <td>
                                            <img src={x.image} width={'50px'} height={'50px'} alt="Profile" />
                                        </td>
                                        <td>{x.firstName}</td>
                                        <td>{x.lastName}</td>
                                        <td>{x.city}</td>
                                        <td>{x.age}</td>
                                        <td>{x.gender}</td>
                                        <td>{x.hobbies}</td>
                                        <td>
                                            <Link to={'/routeformapi/' + x._id}>
                                                <button className='btn btn-danger me-3'>Edit</button>
                                            </Link>
                                            <button className='btn btn-warning' onClick={() => this.deleteData(x._id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
