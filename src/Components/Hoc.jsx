import React from 'react'
import { Link } from 'react-router-dom';

function Hoc(Component) {
    const Newcomponent = () => {
        
        return (
            <div>
                <div className="w-100 d-flex align-items-start bg-primary p-3">
                    <h1 className="mb-2 bg-body-tertiary rounded-2"><Link to={'/'}>Home</Link></h1>
                    
                    <h1 className="mb-2 bg-danger-subtle mx-3 rounded-2"><Link to={'/about'}>About</Link></h1>
                    <h1 className='bg-info mx-3 rounded-2'><Link to={'/login'}>Login</Link></h1>
                </div>
                <Component/>
            </div>
        )

    }
    return (
        Newcomponent
    )
}

export default Hoc