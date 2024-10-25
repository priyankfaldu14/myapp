import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api2() {
    const [add, setAdd] = useState([]);

    useEffect(() => {
        axios.get("https://student-api.mycodelibraries.com/api/product/get")
            .then((res) => {
                console.log(res.data);
                setAdd([...res.data.data]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            {console.log(add)}
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
                    {add.map((student, index) => 
                    
                        {
                            return (
                                <tr key={index}>
                                    <td>{student.category}</td>
                                    <td>{student.productName}</td>
                                    <td>{student.price}</td>
                                    <td>{student.clothSize}</td>
                                    <td>{student.inStock}</td>
                                    <td>{student.description}</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Api2;
