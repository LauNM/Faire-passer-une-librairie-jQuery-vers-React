import PropTypes from "prop-types";

function Dropdown({list = []}) {
  return (
    <select name="department" id="department">
      {list.map((el, i) => <option key={i} value={el.value}> {el.label} </option>)}
    </select>
  )
}

Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    label:  PropTypes.string.isRequired
  })).isRequired,
}
export default Dropdown;