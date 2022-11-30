import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Select from "../components/Select";
import StatesList from '../assets/data/states.json';
import JobsList from '../assets/data/jobs.json';
import Modal from "../components/Modal/Modal";
import { Button, TextField, Stack } from '@mui/material';

function CreateEmployee(props) {
  const { register, handleSubmit, reset } = useForm();
  const [displayModal, setDisplayModal] = useState(false);
  const onSubmit = data => {
    props.addEmployee(data)
    setDisplayModal(true)
    reset();
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
          <Stack spacing={ 2 }>
            <TextField
              required
              id="first-name"
              label="First Name"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("first-name", {
                required: true
              }) }
            />
            <TextField
              required
              id="last-name"
              label="Last Name"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("last-name", {
                required: true
              }) }
            />
            <TextField
              required
              id="date-of-birth"
              label="Date of Birth"
              type="date"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("date-of-birth", {
                required: true
              }) }
            />
            <TextField
              required
              id="start-date"
              label="Start Date"
              type="date"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("start-date", {
                required: true
              }) }
            />
            <fieldset className="address">
              <legend>Address</legend>
              <Stack spacing={ 2 }>
                <TextField
                  required
                  id="street"
                  label="Street"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("street", {
                    required: true
                  }) }
                />
                <TextField
                  required
                  id="city"
                  label="City"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("city", {
                    required: true
                  }) }
                />
                <Select
                  list={ StatesList.map((state) => ({ value: state.abbreviation, label: state.name })) }
                  name="state"
                  { ...register("state", {
                    required: true
                  }) }
                />
                <TextField
                  required
                  id="zip-code"
                  label="Zip Code"
                  type="number"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("zip-code", {
                    required: true
                  }) }
                />
              </Stack>
            </fieldset>
            <Select
              list={ JobsList }
              name="department"
              { ...register("department", {
                required: true
              }) }
            />
            <Button
              type={ "submit" }
              className="submit-button"
              variant="contained"
              size="small"
              color="primary"
            >Save</Button>
          </Stack>
        </form>
      </div>
      <Modal
        isOpen={ displayModal }
        closeModal={ () => setDisplayModal(false) }
        divider
      >
        <p>Employee Created!</p>
      </Modal>
    </div>
  )
}

export default CreateEmployee;