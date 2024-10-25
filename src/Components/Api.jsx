import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Api() {
    const [add, setAdd] = useState([]);

    useEffect(() => {
        axios.get("https://student-api.mycodelibraries.com/api/student/get")
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
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>City</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                    </tr>
                </thead>
                <tbody>
                    {add.map((student, index) => 
                    
                        {
                            return (
                                <tr key={index}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td>{student.city}</td>
                                    <td>{student.age}</td>
                                    <td>{student.gender}</td>
                                    <td>{student.hobbies
                                        }</td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Api;
