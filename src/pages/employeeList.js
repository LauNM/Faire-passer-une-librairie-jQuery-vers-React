import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TablePagination from '@mui/material/TablePagination';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import JobsList from '../assets/data/jobs.json';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'first-name',
    label: 'First Name',
  },
  {
    id: 'last-name',
    label: 'Last Name',
  },
  {
    id: 'start-date',
    label: 'Start Date',
  },
  {
    id: 'department',
    label: 'Department',
  },
  {
    id: 'date-of-birth',
    label: 'Date of Birth',
  },
  {
    id: 'street',
    label: 'Street',
  },
  {
    id: 'city',
    label: 'City',
  },
  {
    id: 'state',
    label: 'State',
  },
  {
    id: 'zip-code',
    label: 'Zip Code',
  },
];

function TableHeader({ order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        { headCells.map((headCell) => (
          <TableCell
            key={ headCell.id }
            sortDirection={ orderBy === headCell.id ? order : false }
          >
            <TableSortLabel
              active={ orderBy === headCell.id }
              direction={ orderBy === headCell.id ? order : 'asc' }
              onClick={ createSortHandler(headCell.id) }
            >
              { headCell.label }
              { orderBy === headCell.id ? (
                <Box component="span" sx={ visuallyHidden }>
                  { order === 'desc' ? 'sorted descending' : 'sorted ascending' }
                </Box>
              ) : null }
            </TableSortLabel>
          </TableCell>
        )) }
      </TableRow>
    </TableHead>
  );
}

TableHeader.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EmployeeList({ list }) {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = list.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Avoid a layout jump when reaching the last page with empty list.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;

  return (
    <div id="employee-div" className="container">
      <h1>Current Employees</h1>
      <Paper sx={ { width: '100%', mb: 2 } }>
        <TableContainer>
          <Table
            sx={ { minWidth: 750 } }
            aria-labelledby="tableTitle"
          >
            <TableHeader
              numSelected={ selected.length }
              order={ order }
              orderBy={ orderBy }
              onSelectAllClick={ handleSelectAllClick }
              onRequestSort={ handleRequestSort }
              rowCount={ list.length }
            />
            <TableBody>
              { list.sort(getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      key={ row['first-name'] }
                      hover
                    >
                      <TableCell>{ row["first-name"] }</TableCell>
                      <TableCell>{ row["last-name"] }</TableCell>
                      <TableCell>{ row["start-date"] }</TableCell>
                      <TableCell>{ JobsList.find((el) => el.value === row.department).label }</TableCell>
                      <TableCell>{ row["date-of-birth"] }</TableCell>
                      <TableCell>{ row.street }</TableCell>
                      <TableCell>{ row.city }</TableCell>
                      <TableCell>{ row.state }</TableCell>
                      <TableCell>{ row["zip-code"] }</TableCell>
                    </TableRow>
                  );
                }) }
              { emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={ 9 }/>
                </TableRow>
              ) }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={ [5, 10, 25] }
          component="div"
          count={ list.length }
          rowsPerPage={ rowsPerPage }
          page={ page }
          onPageChange={ handleChangePage }
          onRowsPerPageChange={ handleChangeRowsPerPage }
        />
      </Paper>
      <Link to={ "/" }>Home</Link>
    </div>
  );
}

export default EmployeeList;