import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './EditEmployee.css';

const EditEmployee = () => {
  const { ID } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    gender: "",
    course: [],
    image: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:4000/employee/edit/${ID}`)
      .then(response => {
        const data = response.data;
        setEmployee({
          name: data.name,
          email: data.email,
          phone: data.phone,
          designation: data.designation,
          gender: data.gender,
          course: data.course,
          image: data.image
        });
      })
      .catch(error => {
        console.log("Unable to fetch data", error);
      });
  }, [ID]);

  const formHandle = (e) => {
    e.preventDefault();
    const payload = {
      name: employee.name,
      email: employee.email,
      phone: employee.phone,
      designation: employee.designation,
      gender: employee.gender,
      course: employee.course,
      image: employee.image
    };

    axios.put(`http://localhost:4000/employee/edit/${ID}`, payload)
      .then(() => {
        navigate("/employee-list");
      })
      .catch(() => {
        console.log("Unable to update data");
      });
  };

  const handleCourseChange = (e) => {
    const course1 = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setEmployee(prevState => ({
        ...prevState,
        course: [...prevState.course, course1]
      }));
    } else {
      setEmployee(prevState => ({
        ...prevState,
        course: prevState.course.filter(item => item !== course1)
      }));
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Edit Employee</h1>
      <form onSubmit={formHandle}>
        <input className="form-input" placeholder="Enter Full Name" type="text" value={employee.name} onChange={(e) => setEmployee({ ...employee, name: e.target.value })} />
        <input className="form-input" placeholder="Enter Email" type="email" value={employee.email} onChange={(e) => setEmployee({ ...employee, email: e.target.value })} />
        <input className="form-input" placeholder="Enter Phone Number" type="text" value={employee.phone} onChange={(e) => setEmployee({ ...employee, phone: e.target.value })} />

        <label>Designation</label>
        <select className="form-input" onChange={(e) => setEmployee({ ...employee, designation: e.target.value })} value={employee.designation}>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        <label>Gender</label>
        <div className="form-radio-group">
          <input type="radio" id="male" name="gender" value="Male" checked={employee.gender === "Male"} onChange={(e) => setEmployee({ ...employee, gender: "Male" })} />
          <label htmlFor="male"> Male </label>
          <input type="radio" id="female" name="gender" value="Female" checked={employee.gender === "Female"} onChange={(e) => setEmployee({ ...employee, gender: "Female" })} />
          <label htmlFor="female"> Female </label>
        </div>

        <label>Courses</label>
        <div className="form-checkbox-group">
          <input type="checkbox" id="MCA" name="course" value="MCA" checked={employee.course.includes('MCA')} onChange={handleCourseChange} />
          <label htmlFor="MCA"> MCA </label>
          <input type="checkbox" id="BCA" name="course" value="BCA" checked={employee.course.includes('BCA')} onChange={handleCourseChange} />
          <label htmlFor="BCA"> BCA </label>
          <input type="checkbox" id="BCOM" name="course" value="BCOM" checked={employee.course.includes('BCOM')} onChange={handleCourseChange} />
          <label htmlFor="BCOM"> BCOM </label>
        </div>

        <label>Image</label>
        <input className="form-input" type="file" onChange={(e) => setEmployee({ ...employee, image: e.target.files[0] })} />
        <button className="form-button" type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditEmployee;
