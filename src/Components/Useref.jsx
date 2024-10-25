import React, { useRef } from 'react'

function Useref() {
const h1ref=useRef(null)
const inp=useRef()


const onHandle=()=>{
    console.log(h1ref);
h1ref.current.innerHTML='PRIYANK'
h1ref.current.style.color='rgb(245, 161, 66)'
console.log(inp.current.value);
}



  return (
    <div>
        <h1 ref={h1ref}>
            Hello World
        </h1>
        <input type="text" ref={inp} />
        <button onClick={onHandle}>Click Here</button>
        <button></button>
    </div>
  )
}

export default Useref   