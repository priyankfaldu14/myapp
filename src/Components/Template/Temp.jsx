import React from 'react'
import '../Template/Temp.module.css'
import Childtemp from './Childtemp'

function Temp() {
  const aray=[
    {
      name : "diamond1",
      dis: "This is a wider card with supporting text below as a natural lead-in to additional content"
    },
    {
      name : "diamond2",
      dis: "This is a wider card with supporting text below as a natural lead-in to additional content"
    },
    {
      name : "diamond3",
      dis: "This is a wider card with supporting text below as a natural lead-in to additional content"
    },
    {
      name : "diamond4",
      dis: "This is a wider card with supporting text below as a natural lead-in to additional content"
    },
  ]
  return (
    <div>
      <div className="card-group">
        <div className="card">
        
          {
            aray.map((x,i)=>{
                return(

                  <Childtemp aray={x} key ={i} />
                )
            })
          }  
        </div>
      </div>
      </div>
      )
}

      export default Temp