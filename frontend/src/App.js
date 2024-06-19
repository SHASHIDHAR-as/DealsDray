import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import DashBord from './components/DashBord';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import Navbar from './components/Navbar'; 
import './App.css';

function App() {
  return (
    <div className="app-container">
      
      <main className="app-main">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<DashBord />} path="/home" />
            <Route element={<Registration />} path="/register" />
            <Route element={<DashBord />} path="/dashbord" />
            <Route element={<CreateEmployee />} path="/create-employee" />
            <Route element={<EmployeeList />} path="/employee-list" />
            <Route element={<EditEmployee />} path="/edit-employee/:ID" />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
