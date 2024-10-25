import axios from 'axios'
// import React from 'react'
import React, { useEffect, useState } from 'react';


function Apidelete() {

const [aray, setaray] = useState([])
const [obj, setobj] = useState({})
useEffect(() => {
  axios.get("https://student-api.mycodelibraries.com/api/product/get").then((res)=>{setaray([...res.data.data])

  }).catch((error)=>{console.log(error);})

}, [])

const getdata=(e)=>{
if(e.target.type=='checked'){
    console.log(e.target.value);
    
}
}

const savedata=()=>{

}


return (
    <div>
<form action="">
<label htmlFor="">Category</label>
<input type="text" name='Category' value={obj.Category} onChange={getdata} /><br />

<label htmlFor="">ProductName</label>
<input type="text" name='ProductName' value={obj.ProductName} onChange={getdata} /><br />

<label htmlFor="">Price</label>
<input type="text" name='Price' value={obj.Price} onChange={getdata} /><br />

<label htmlFor="">ClothSize</label>
<input type="text" name='ClothSize' value={obj.ClothSize} onChange={getdata} /><br />

<label htmlFor="">InStock</label>
<input type="text" name='InStock' value={obj.InStock} onChange={getdata} /><br />

<label htmlFor="">Description</label>
<input type="text" name='Description' value={obj.Description} onChange={getdata} /><br />
<button type='button' onClick={savedata}>Save</button>
</form>




        {/* {console.log(add)} */}
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
                {aray.map((student, index) => 
                
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

export default Apidelete