
function Dropdown({list}) {
  return (
    <select name="department" id="department">
      {list.map((el, i) => <option key={i}> {el} </option>)}
    </select>
  )
}

export default Dropdown;