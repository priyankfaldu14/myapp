import React, { useState } from 'react'

function Statefunction() {

    const [count,setcount] =useState(0)
const [obj,setobj] = useState({name:'Gujarat'})


const incrementhanle =()=>{
    setcount(count+1)
    console.log('inside click event',count);
}
const namehandle=(name)=>{
    setobj({name:name})
}

  return (    
  <div>
  <h1>count{count}</h1>
  <h3>{obj.name}</h3>
  <button onClick={incrementhanle}>Click</button>
  <button onClick={()=>namehandle('name')}>name</button>
  </div>
  )
}

  


export default Statefunction