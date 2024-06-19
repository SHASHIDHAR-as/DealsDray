import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  
import './Registration.css';

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();  

  const formHandle = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const payload = {
      name: name,
      email: email,
      password: password,
      cnfPassword: confirmPassword  
    };
    
    axios.post("http://localhost:4000/auth/register", payload)
      .then((response) => {
        navigate(`/login`);  
      })
      .catch(() => { 
        alert("Error registering user");
      });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Register</h1>
      <form onSubmit={formHandle}>
        <input className="form-input" placeholder="Enter Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        <input className="form-input" placeholder="Enter Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input className="form-input" placeholder="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <input className="form-input" placeholder="Confirm Password" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        <button className="form-button" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
