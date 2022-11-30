import { Routes, Route } from "react-router-dom";

import Error from './pages/error';
import EmployeeList from './pages/employeeList';
import CreateEmployee from './pages/createEmployee';
import { useState } from "react";

function App() {
  const [employeeList, setEmployeeList] = useState([])
  return (
    <div>
      <Routes>
        <Route path="/" element={ <CreateEmployee addEmployee={(data) => setEmployeeList([...employeeList , data])}/> }/>
        <Route path="/employee-list" element={ <EmployeeList list={employeeList}/> }/>
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
