import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 
import './DashBord.css';

const DashBord = () => {
  const { name } = useParams();

  return (
    <div>
      <div className="dashboard-content">
        <h1>Dashboard</h1>
        <p>Welcome to the admin panel {name}</p>
      </div>
    </div>
  );
}

export default DashBord;
