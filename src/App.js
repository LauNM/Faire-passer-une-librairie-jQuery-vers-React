import { Routes, Route } from "react-router-dom";

import Error from './pages/error';
import EmployeeList from './pages/employeeList';
import CreateEmployee from './pages/createEmployee';
import { useState, useEffect } from "react";

function App() {
  const [employeeList, setEmployeeList] = useState([])
  const addEmployee = (data) => {
    setEmployeeList([...employeeList , data])
    localStorage.setItem("EmployeeList", JSON.stringify([...employeeList , data]));
  }
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("EmployeeList"));
    if (items) {
      setEmployeeList(items);
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={ <CreateEmployee addEmployee={addEmployee}/> }/>
        <Route path="/employee-list" element={ <EmployeeList list={employeeList}/> }/>
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
