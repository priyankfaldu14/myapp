import React from 'react'

function ChildComp(props) {
  return (
    <div>
        <h3>{props.count}</h3>
        <button onClick={()=>props.setcount(props.count+1)}>Count</button>
    </div>
  )
}

export default ChildComp