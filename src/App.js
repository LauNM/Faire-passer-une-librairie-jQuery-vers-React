import { Routes, Route } from "react-router-dom";

import Error from './pages/error';
import EmployeeList from './pages/employeeList';
import CreateEmployee from './pages/createEmployee';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <CreateEmployee /> }/>
        <Route path="/employee-list" element={ <EmployeeList /> }/>
        <Route path="*" element={ <Error /> } />
      </Routes>
    </div>
  );
}

export default App;
