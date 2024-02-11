import React, { useState } from 'react';
import './Form.css';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Form = () => {
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  }

  return (
    <div>
      <Navbar/>
    <form className="form" onSubmit={handleSubmit}>
      <h2>Enter User details</h2>
      <div className='fields'>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      
      <div className='fields'>
      <label htmlFor="mobile">Mobile number:</label>
      <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      </div>

      <div className='fields'>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className='fields'>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <div className='fields'>
      <label htmlFor="city">City name:</label>
      <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
      </div>

      <div className='fields'>
      <label htmlFor="gender">Gender:</label>
      <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="">Select</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      </div>

      <div className='fields'>
      <label htmlFor="image">Image:</label>
      <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} />
      </div>
      <Link to={'/'}>
      <button type="submit">Submit</button>
      </Link>
    </form>
    </div>
  );
}

export default Form;