import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('user'); 
    window.location.href = '/login'; 
  };

  const isLoggedIn = localStorage.getItem('user');

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
      <header className="app-header">
        <p className="logo">LOGO HERE</p>
      </header>
        <li className="navbar-item"><Link to='/home'>Home</Link></li>
        {isLoggedIn ? (
          <>
            <li className="navbar-item"><Link to='/create-employee'>Create Employee</Link></li>
            <li className="navbar-item"><Link to="/employee-list">Employee List</Link></li>
            <li className="navbar-item user-info">{JSON.parse(isLoggedIn).name}</li>
            <li className="navbar-item" onClick={handleLogout}>Logout</li>
          </>
        ) : (
          <>
            <li className="navbar-item"><Link to='/login'>Login</Link></li>
            <li className="navbar-item"><Link to='/register'>Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
