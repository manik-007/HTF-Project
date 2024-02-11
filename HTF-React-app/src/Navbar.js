import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="Nav">
        <div className='Nav-left'>
            <div className='Nav-left-main'>
                Welcome to Service Lane
            </div>
        </div>
        <div className='Nav-right'>
            <div>Need Help</div>
            <div>Settings</div>
        </div>
    </div>
  )
}

export default Navbar