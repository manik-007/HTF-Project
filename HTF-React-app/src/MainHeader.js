import React, {useState} from 'react'
import './MainHeader.css'
import {Link} from 'react-router-dom'
import Logo from './resources/Logo.jpg'

const MainHeader = () => {
    const [search, setSearch] = useState('')
  return (
    <div>
        <div className='Home-nav'>
        <img className='Nav-img' src={Logo} />
        <div className='box-cont'>
            <div className='box'><Link to={'/'}>Home</Link></div>
            <div className='box'>Contact</div>
            <div className='box'>About</div>
        </div>
        <div className='User-name box'><Link to={'/Signin'}>Signin</Link></div>
      </div>
      <div className='Search'>
        <input placeholder='Search'className='Search-bar' value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className='btn'>
        <Link to={'/SearchFeed'}><button className='Search-button'>Search</button></Link>
        </div>
      </div>
    </div>
  )
}

export default MainHeader