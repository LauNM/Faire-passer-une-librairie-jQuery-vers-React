import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useForm, Controller } from "react-hook-form";
import DatePicker from 'react-date-picker';
import Select from "../components/Select";
import StatesList from '../assets/data/states.json';
import JobsList from '../assets/data/jobs.json';
import Modal from "../components/Modal/Modal";

function CreateEmployee() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [displayModal, setDisplayModal] = useState(false);
  const onSubmit = data => {
    console.log(data)
    setDisplayModal(true)
  }

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to={ "/employee-list" }>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id={ "create-employee" } onSubmit={ handleSubmit(onSubmit) }>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            className={errors["first-name"] ? "error" : ""}
            {...register("first-name", {
              required: true
            })}
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            className={errors["last-name"] ? "error" : ""}
            {...register("last-name", {
              required: true
            })}
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <Controller
            control={control}
            name="date-of-birth"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                id="date-of-birth"
                className={errors["date-of-birth"] ? "error" : ""}
                calendarIcon={ null }
                onChange={ onChange }
                onBlur={onBlur}
                value={ value }
                maxDate={ new Date() }
              />
            )}
          />

          <label htmlFor="start-date">Start Date</label>
          <Controller
            control={control}
            name="start-date"
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <DatePicker
                id="start-date"
                className={errors["start-date"] ? "error" : ""}
                calendarIcon={ null }
                onChange={ onChange }
                onBlur={onBlur}
                value={ value }
              />
            )}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text"  className={errors.street ? "error" : ""} {...register("street", {
              required: true
            })}/>

            <label htmlFor="city">City</label>
            <input id="city" type="text" className={errors.city ? "error" : ""} {...register("city", {
              required: true
            })}/>

            <label htmlFor="state">State</label>
            <Select
              list={ StatesList.map((state) => ({ value: state.abbreviation, label: state.name })) }
              name="state"
              {...register("state", {
                required: true
              })}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              className={errors["zip-code"] ? "error" : ""}
              {...register("zip-code", {
                required: true
              })}
            />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select
            list={ JobsList }
            name="department"
            {...register("department", {
              required: true
            })}
          />
          <button type="submit" className="submit-button">Save</button>
        </form>
      </div>
      <Modal
        isOpen={displayModal}
        closeModal={() => setDisplayModal(false)}
        divider
        content={ <p>Employee Created!</p>}
      />
    </div>
  )
}

export default CreateEmployee;