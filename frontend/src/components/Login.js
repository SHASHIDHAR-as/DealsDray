import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let payload = {
      email: email,
      password: password
    };
    axios.post("http://localhost:4000/auth/login", payload)
      .then((response) => {
        localStorage.setItem('user', JSON.stringify(response.data)); 
        navigate(`/dashbord`);
      })
      .catch(() => { alert("Invalid credentials"); });
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Login</h1>
      <form onSubmit={handleLogin}>
        <input className="form-input" placeholder="Enter Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <input className="form-input" placeholder="Enter Password" type="password" value={password} onChange={(e) => { setPassword(e.target.value); }} />
        <button className="form-button" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
