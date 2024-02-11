import React, { useState } from 'react';
import './Signin.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Form = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (
    <div>
      <Navbar/>
    <form className="form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      
      <div className='fields'>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className='fields'>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <Link to={'/'}>
      <button type="submit">Submit</button>
      </Link>
      <Link to={'/Userform'} className='last'>
        Don't have an account? Sign Up!
      </Link>
    </form>
    </div>
  );
}

export default Form;