// import { hover } from '@testing-library/user-event/dist/hover'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Apiget() {
    const [obj, setobj] = useState({ hobbies: [] })
    const [blankobj, setblankobj] = useState({ hover: [] })
    const [data, setdata] = useState([])

    useEffect(() => {

            getAPIdata()


    }, [])

    const getdata = async (x) => {

        if (x.target.type === 'checkbox') {
            if (x.target.checked) {
                obj.hobbies.push(x.target.value);
                // obj.hobbies = tech;
            }
            else {
                obj.hobbies = obj?.hobbies.filter((e) => e !== x.target.value);


                // const index=tech.indexOf(x.target.value);
                // tech.splice(index,1);
                // obj.technology = tech;
            }
            // settech([...tech]);
            blankobj.hobbies = [];
        }

        else {
            obj[x.target.name] = x.target.value;
            blankobj[x.target.name] = '';
        }


        setblankobj({ ...blankobj });
    };

    const getAPIdata=()=>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res) => {
            setdata([...res.data.data])
        })
    }

    const savedata = () => {

        if(obj._id === undefined)
        {

            axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
                getAPIdata()
            })
    
        }
        else{
            obj.id=obj._id;
            axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
                getAPIdata()

            }).catch((err)=>{
                console.log(err);
            })
        }
            setobj({...blankobj})
        
        
        
    }

    const deletedata=(id)=>{
        
        axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((res)=>{
            getAPIdata()
        })
    }
    
    const editdata=(id)=>{
    
            axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id="+id).then((res)=>{
                
                const hobbie=res.data.data.hobbies.split(',');
                // console.log(hobbie);
                setobj({...res.data.data, hobbies : hobbie})
            })
    
    }

    return (
        <div className='bg-dark-subtle w-75 m-auto rounded-4 fw-bold'>
            <h1 className='text-center bg-info text-bg-primary rounded-2 w-75 m-auto '>StudentData_API</h1>
            <form action="" className='w-50 mx-auto'>

                <label className='text-primary'>First Name</label>
                <input type="text" name='firstName' value={obj.firstName} className='w-100' onChange={getdata} />

                <label className='text-primary'>Last Name</label>
                <input type="text" name='lastName' value={obj.lastName} className='w-100' onChange={getdata} />


                <label className='text-primary'>Age</label>
                <input type="number" name='age' value={obj.age} className='w-100' onChange={getdata} />


                <label className='text-primary'>City</label>
                <input type="text" name='city' className='w-100' value={obj.city} onChange={getdata} />


                <label className='text-primary g-2'>Gender</label><br />
                <input className='text-primary mx-1 g-2' type="radio" name='gender' value={'Male'} checked={obj.gender === 'Male'} onChange={getdata} />Male
                <input className='text-primary mx-1 g-2' type="radio" name='gender' value={'Female'} onChange={getdata} checked={obj.gender === 'Female'} />Female
                <input className='text-primary my-3 mx-1 g-2' type="radio" name='gender' value={'Transgender'} onChange={getdata} checked={obj.gender === 'Transgender'} />Transgender 
                <input className='text-primary mx-1 g-2' type="radio" name='gender' value={'Other'} onChange={getdata} checked={obj.gender === 'Other'} />Other <br />



                <label className='text-primary'>Hobbies</label><br />
                <div>
                <input className='mx-2' type="checkbox" value='Cricket' checked={obj.hobbies?.includes("Cricket")} onChange={getdata} />Cricket
                <input className='mx-2'  type="checkbox" value='Football' onChange={getdata} checked={obj.hobbies?.includes("Football")} />Football
                <input className='mx-2'  type="checkbox" value='Golf' onChange={getdata} checked={obj.hobbies?.includes("Golf")} />Golf
                </div>

                
                <button type='button' className='text-center btn btn-success mt-4' onClick={savedata}>Submit Now</button>
            </form>
            <table className='table'>
                <thead>
                    <tr>
                        <th className='text-primary text-center text-decoration-underline'>FirstName</th>
                        <th className='text-primary text-center text-decoration-underline'>LastName</th>
                        <th className='text-primary text-center text-decoration-underline'>Age</th>
                        <th className='text-primary text-center text-decoration-underline'>Gender</th>
                        <th className='text-primary text-center text-decoration-underline'>City</th>
                        <th className='text-primary text-center text-decoration-underline'>Hobbies</th>
                        <th className='text-primary text-center text-decoration-underline'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((x) => {
                            return (

                                <tr key={x._id}>
                                    <td className='text-center'>{x.firstName}</td>
                                    <td className='text-center'>{x.lastName}</td>
                                    <td className='text-center'>{x.age}</td>
                                    <td className='text-center'>{x.gender}</td>
                                    <td className='text-center'>{x.city}</td>
                                    <td className='text-center'>{x.hobbies}</td>
                                    <td>
                                        <button className='btn mx-4 btn-warning text-center' onClick={()=>editdata(x._id)}>Edit</button>
                                        <button className='btn btn-info text-center' onClick={()=>deletedata(x._id)}>Delete</button>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Apiget