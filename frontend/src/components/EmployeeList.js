import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './EmployeeList.css';

const EmployeeList = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/employee/get-emps")
    .then((response) => { setData(response.data); })
    .catch(() => { console.log("Unable to fetch data"); });
  }, []);

  return (
    <div className="employee-list-container">
      <h1>Employee List</h1>
      <div className="employee-list">
        {data.map((emp) => (
          <div className="employee-card" key={emp.id}>
            <img src={emp.image} alt={`${emp.name}`} className="employee-image" />
            <div className="employee-details">
              <p><strong>Name:</strong> {emp.name}</p>
              <p><strong>Email:</strong> {emp.email}</p>
              <p><strong>Phone:</strong> {emp.phone}</p>
              <p><strong>Designation:</strong> {emp.designation}</p>
              <p><strong>Gender:</strong> {emp.gender}</p>
              <p><strong>Courses:</strong> {emp.course.join(', ')}</p>
              <Link to={`/edit-employee/${emp._id}`} className="employee-edit-link">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EmployeeList;
