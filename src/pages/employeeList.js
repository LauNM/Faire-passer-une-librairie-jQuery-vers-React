import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function EmployeeList() {
  const rows = [
    {
      "city": "nantes",
      "date-of-birth": "Tue Nov 07 1995 00:00:00 GMT+0100 (heure normale d’Europe centrale)",
      "department": "sales",
      "first-name": "Mia",
      "last-name": "Garcia",
      "start-date": "Fri Nov 25 2022 00:00:00 GMT+0100 (heure normale d’Europe centrale) ",
      "state": "AL",
      "street": "rue",
      "zip-code": "44444"
    }
  ]

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <TableContainer component={ Paper }>
        <Table sx={ { minWidth: 650 } } aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Start Date</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Date of Birth</TableCell>
              <TableCell align="right">Street</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Zip Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { rows.map((row) => (
              <TableRow
                key={ row["first-name"]}
                sx={ { '&:last-child td, &:last-child th': { border: 0 } } }
              >
                <TableCell component="th" scope="row">
                  { row["first-name"] }
                </TableCell>
                <TableCell align="right">{ row["last-name"] }</TableCell>
                <TableCell align="right">{ row["start-date"] }</TableCell>
                <TableCell align="right">{ row.department}</TableCell>
                <TableCell align="right">{ row["date-of-birth"] }</TableCell>
                <TableCell align="right">{ row.street }</TableCell>
                <TableCell align="right">{ row.city }</TableCell>
                <TableCell align="right">{ row.state }</TableCell>
                <TableCell align="right">{ row["zip-code"] }</TableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default EmployeeList;