import axios from 'axios'
import React, { Component } from 'react'

export default class ApiClass2 extends Component {

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount=()=>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res)=>{
            this.setState({data : res.data.data})
        })
    }
    render() {
    return (
        <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>age</th>
                    <th>gender</th>
                    <th>hobbies</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((student,i)=>{
                        return(

                            <tr key={student._id}>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.city}</td>
                                <td>{student.age}</td>
                                <td>{student.gender}</td>
                                <td>{student.hobbies}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
    )
  }
}
