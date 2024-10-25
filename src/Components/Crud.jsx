import React, { useState } from 'react'



function Crud() {
    const [obj, setobj] = useState({})
    const [ary, setary] = useState([])
    const [hobbies, sethobbies] = useState([])
    const [blankobj,setblankobj] = useState({})

    const getData = (a) => {
        obj[a.target.name] = a.target.value
        // console.log(obj);
    }

    // const hobbie=(b)=>{
    //     console.log(hobbie);
    //     if(b.target.type==='checked'){
            
    //     }
    // }


    let data = () => {
        setobj({ ...obj })
        ary.push(obj)
        setary([...ary])
        console.log(ary);
        setobj=[...blankobj]
    }

    return (


        <div>
            <form action="" className='mx-auto w-50 p-5 my-4 shadow-lg '>
                <label htmlFor="">Name</label>
                <input type="text" className='w-100' name='name' onChange={getData} value={obj.name} /><br />
                <label htmlFor="">Email</label>
                <input type="email" className='w-100' name='email' onChange={getData} value={obj.email} /><br />
                <label htmlFor="">Password</label>
                <input type="password" className='w-100' name='password' onChange={getData} value={obj.password} /><br />
                <input type="radio" className='mx-3' name='gender' value={'Male'} onChange={getData} />Male
                <input type="radio" className='mx-3' name='gender' value={'Female'} onChange={getData} />Female<br />
                <input type="checkbox" className='mx-3' name='hobbies' value={'Cricket'} onChange={getData} />Cricket
                <input type="checkbox" className='mx-3' name='hobbies' value={'Footboll'} onChange={getData} />Footboll
                <input type="checkbox" className='mx-3' name='hobbies' value={'VideoGraphy'} onChange={getData} />VideoGraphy <br />
                <input type="file" />
                <button type='button' className='btn btn-success my-4' onClick={data}>Save</button>



            </form>
            <thead>
                <tr>
                    <td>Profile</td>
                    <td>name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>gender</td>
                    <td>file</td>
                </tr>
            </thead>
            <tbody>
            <thead>
                <tr>
                    <td>{x.Profile}</td>
                    <td>{x.name}</td>
                    <td>{x.Email}</td>
                    <td>{x.Password}</td>
                    <td>{x.gender}</td>
                    <td>{x.file}</td>
                </tr>
            </thead>
            </tbody>


        </div>
    )
}



export default Crud