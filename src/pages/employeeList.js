import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const columns = [
  {
    field: 'first-name',
    headerName: 'First Name',
    flex: 1,
  },
  {
    field: 'last-name',
    headerName: 'Last Name',
    flex: 1,
  },
  {
    field: 'start-date',
    headerName: 'Start Date',
    flex: 1,
  },
  {
    field: 'department',
    headerName: 'Department',
    flex: 1,
  },
  {
    field: 'date-of-birth',
    headerName: 'Date of Birth',
    flex: 1,
  },
  {
    field: 'street',
    headerName: 'Street',
    flex: 1,
  },
  {
    field: 'city',
    headerName: 'City',
    flex: 1,
  },
  {
    field: 'state',
    headerName: 'State',
    flex: 1,
  },
  {
    field: 'zip-code',
    headerName: 'Zip Code',
    flex: 1,
  },
];

function EmployeeList({ list }) {
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div id="employee-div" className="container" >
      <h1>Current Employees</h1>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={list}
          columns={columns}
          pagination
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[2, 5, 20]}
          disableColumnFilter
          disableColumnSelector
          disableDensitySelector
          components={{ Toolbar: GridToolbar }}
          componentsProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 400 },
            },
          }}
          disableColumnMenu />
      </Box>
      <Link class="link" to={ "/" }>Home</Link>
    </div>
  );
}

export default EmployeeList;