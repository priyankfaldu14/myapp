import axios from 'axios'
import React, { Component } from 'react'

export default class ApiClass extends Component {

    constructor(){
        super()
        this.state={
            data:[]
        }
    }

    componentDidMount=()=>{
        axios.get("https://student-api.mycodelibraries.com/api/product/get").then((res)=>{
            this.setState({data : res.data.data})
        })
    }
    render() {
    return (
        <div>
        <table className='table'>
            <thead>
                <tr>
                    <th>Category</th>
                    <th>ProductName</th>
                    <th>Price</th>
                    <th>ClothSize</th>
                    <th>InStock</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.data.map((x,i)=>{
                        return(

                            <tr key={x._id}>
                                <td>{x.category}</td>
                                <td>{x.productName}</td>
                                <td>{x.price}</td>
                                <td>{x.clothSize}</td>
                                <td>{x.inStock}</td>
                                <td>{x.description}</td>
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
