import React, { useState } from 'react'
import ChildComp from './Functionchild'

function ParaComp() {

const [count, setcount]=useState(0)


  return (
    <div>FunctionPara
<h1>ParaComp{count}</h1>
<ChildComp count={count} setcount={setcount}/>
    </div>
  )
}

export default ParaComp
