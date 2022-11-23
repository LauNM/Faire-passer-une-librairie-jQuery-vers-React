import PropTypes from "prop-types";
import React from 'react';

const Select = React.forwardRef(({ list, name }, ref) => (
  <select name={name} ref={ref} id={name}>
    {list.map((el, i) => <option key={i} value={el.value}> {el.label} </option>)}
  </select>
));

Select.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired
  })),
  name: PropTypes.string
}
export default Select;