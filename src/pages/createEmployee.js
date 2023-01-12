import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Select from "../components/Select";
import StatesList from '../assets/data/states.json';
import JobsList from '../assets/data/jobs.json';
import { Button, TextField, Stack } from '@mui/material';
import { Modal } from "react-modal-oc-lb"

const formatText = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
function CreateEmployee(props) {
  const { register, handleSubmit,formState: { errors }, reset } = useForm();
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
        <Link className="link" to={ "/employee-list" }>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id={ "create-employee" } onSubmit={ handleSubmit(onSubmit) }>
          <Stack spacing={ 2 }>
            <TextField
              id="first-name"
              label="First Name"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("first-name", {
                setValueAs: v => formatText(v),
                required: true
              }) }
              error={!!errors["first-name"]}
              helperText={!!errors["first-name"] ? "First name is required" : ""}
            />
            <TextField
              id="last-name"
              label="Last Name"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("last-name", {
                setValueAs: v => formatText(v),
                required: true
              }) }
              error={!!errors["last-name"]}
              helperText={!!errors["last-name"] ? "Last name is required" : ""}
            />
            <TextField
              id="date-of-birth"
              label="Date of Birth"
              type="date"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("date-of-birth", {
                required: true
              }) }
              error={!!errors["date-of-birth"]}
              helperText={!!errors["date-of-birth"] ? "Date of Birth is required" : ""}
            />
            <TextField
              id="start-date"
              label="Start Date"
              type="date"
              InputLabelProps={ {
                shrink: true,
              } }
              { ...register("start-date", {
                required: true
              }) }
              error={!!errors["start-date"]}
              helperText={!!errors["start-date"] ? "Start Date is required" : ""}
            />
            <fieldset className="address">
              <legend>Address</legend>
              <Stack spacing={ 2 }>
                <TextField
                  id="street"
                  label="Street"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("street", {
                    setValueAs: v => formatText(v),
                    required: true
                  }) }
                  error={!!errors["street"]}
                  helperText={!!errors["street"] ? "Street is required" : ""}
                />
                <TextField
                  id="city"
                  label="City"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("city", {
                    setValueAs: v => formatText(v),
                    required: true
                  }) }
                  error={!!errors["city"]}
                  helperText={!!errors["city"] ? "City is required" : ""}
                />
                <Select
                  list={ StatesList.map((state) => ({ value: state.abbreviation, label: state.name })) }
                  name="state"
                  inputProps={{ ...register("state", {
                    required: true
                  }) }}
                />
                <TextField
                  id="zip-code"
                  label="Zip Code"
                  type="number"
                  InputLabelProps={ {
                    shrink: true,
                  } }
                  { ...register("zip-code", {
                    required: true
                  }) }
                  error={!!errors["zip-code"]}
                  helperText={!!errors["zip-code"] ? "Zip Code is required" : ""}
                />
              </Stack>
            </fieldset>
            <Select
              list={ JobsList }
              name="department"
              inputProps={{ ...register("department", {
                required: true
              }) }}
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