import PropTypes from "prop-types";
import React from 'react';
import { MenuItem, TextField } from '@mui/material';

const FormSelect = React.forwardRef(({ list, name, selectedValue, setValue, inputProps }, ref) => {
  const handleChange = (event) => {
    setValue(event.target.value, name);
  };
  return (
    <TextField id={name} label={name} value={selectedValue}  ref={ref} onChange={handleChange} select inputProps={inputProps} >
      { list.map((el, i) => <MenuItem key={ i } value={ el.value }> { el.label } </MenuItem>) }
    </TextField>
  )
});

FormSelect.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired
  })),
  name: PropTypes.string,
  selectedValue: PropTypes.string,
  setValue: PropTypes.func
}
export default FormSelect;