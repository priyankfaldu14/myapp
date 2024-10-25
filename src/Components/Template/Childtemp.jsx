import React from 'react'

function Childtemp(vird) {
  return (
    <>
            <div className="card-body">
            <h5 className="card-title">{vird.aray.name}</h5>
            <p className="card-text">{vird.aray.dis}</p>
            
          </div>
    </>
  )
}

export default Childtemp