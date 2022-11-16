import { Link } from "react-router-dom";
import React, { useState } from 'react';
import DatePicker from 'react-date-picker'
import Dropdown from "../components/Dropdown";



function CreateEmployee() {
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('saved')
    } catch (error) {
      console.log(error)
    }
  }

  const jobs =  ['Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'];

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={"/employee-list"}>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id={"create-employee"} onSubmit={ handleSubmit }>
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name"/>

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name"/>

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker id="date-of-birth" calendarIcon={null} onChange={setDateOfBirth} value={dateOfBirth} maxDate={new Date()}/>

          <label htmlFor="start-date">Start Date</label>
          <DatePicker id="start-date" calendarIcon={null} onChange={setStartDate} value={startDate} />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text"/>

            <label htmlFor="city">City</label>
            <input id="city" type="text"/>

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number"/>
          </fieldset>

          <label htmlFor="department">Department</label>
          <Dropdown list={jobs} />
          <button type="submit" className="submit-button">Save</button>
        </form>
      </div>
      <div id="confirmation" className="modal">Employee Created!</div>
    </div>
  )
}

export default CreateEmployee;