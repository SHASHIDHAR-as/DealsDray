import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreateEmployee.css';

const CreateEmployee = () => {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  let [designation, setDesignation] = useState('');
  let [gender, setGender] = useState("");
  let [course, setCourse] = useState([]);
  let [image, setImage] = useState();

  let formHandle = (e) => {
    e.preventDefault();
    let payload = {
      name: name,
      email: email,
      phone: phone,
      image: image,
      designation: designation,
      gender: gender,
      course: course
    };

    if (!name || !email || !phone || !designation || !gender || !course.length || !image) {
      alert("To Create Employee Fill all the fields..!");
    } else {
      axios.post("http://localhost:4000/employee/create-emp", payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((e) => { alert(e.data) })
      .catch(() => { console.log("cannot register"); });

      navigate("/employee-list");
    }
  };

  let handleCourseChange = (e) => {
    const course1 = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setCourse([...course, course1]);
    } else {
      setCourse(course.filter(item => item !== course1));
    }
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Create Employee</h1>
      <form onSubmit={formHandle}>
        <input className="form-input" placeholder="Enter Full Name" type="text" value={name} onChange={(e) => { setName(e.target.value); }} />
        <input className="form-input" placeholder="Enter Email" type="email" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        <input className="form-input" placeholder="Enter Phone Number" type="text" value={phone} onChange={(e) => { setPhone(e.target.value); }} />

        <label>Designation</label>
        <select className="form-input" onChange={(e) => { setDesignation(e.target.value); }} value={designation}>
          <option value="">Select Designation</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
        </select>

        <label>Gender</label>
        <div className="form-radio-group">
          <input type="radio" id="male" name="gender" value="Male" checked={gender === "Male"} onChange={(e) => { setGender("Male"); }} />
          <label htmlFor="male"> Male </label>
          <input type="radio" id="female" name="gender" value="Female" checked={gender === "Female"} onChange={(e) => { setGender("Female"); }} />
          <label htmlFor="female"> Female </label>
        </div>

        <label>Courses</label>
        <div className="form-checkbox-group">
          <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
          <label htmlFor="MCA"> MCA </label>
          <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
          <label htmlFor="BCA"> BCA </label>
          <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
          <label htmlFor="BSC"> BSC </label>
        </div>

        <label>Upload your photo</label>
        <input className="form-input" accept="image/jpeg, image/png" type="file" name='image' onChange={(e) => { setImage(e.target.files[0]); }} />

        <button className="form-button" type="submit">Register Me</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
