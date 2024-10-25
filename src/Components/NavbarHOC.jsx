import React from 'react'
import {NavLink } from 'react-router-dom'

function NavbarHOC(Component) {
    const NewComponent=()=>{

    
  return (
    <>
    <div>
        <div className='bg-info'><NavLink to={'/'}>Form</NavLink></div>
        <div className='bg-info'><NavLink to={'/table'}>Table</NavLink></div>
    </div>

<Component/>
    </>
  )
}
return NewComponent
}

export default NavbarHOC