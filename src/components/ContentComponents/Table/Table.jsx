import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Item Name', minWidth: 170 },

  
  { id: 'code', label: 'Code', minWidth: 100 },
  {
    id: 'quantity',
    label: 'Quantity',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'value',
    label: 'Value (Included Vat)',
    minWidth: 170,
    align: 'right',
    format: (value) => new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(value),
    },

];

function createData(name, code, quantity, value) {
  return { name, code, quantity, value };
}





class BasicTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,
            overallData: {},
            rows: []
        }
    }

    componentDidMount(){


      fetch(`http://localhost:3000/grabdata3`, {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((values) => {
          if (values) {
            let data = values.map((item) => {
                return createData(item.product, item.code, item.quantity, item.valueinvat);
            });
            this.setState({
              rows: data
            });
          }
        });
    }


    handleChangePage = (event, newPage) => {
        this.setState({page: newPage});
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({rowsPerPage: +event.target.value, page: 0});
    };




    render() {
        return (
        <div className="Table">
        <h3 className="title" style = {{marginBottom: "10px"}}>Recent Orders</h3>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer sx={{ maxHeight: 350}}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
              {this.state.rows
                .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={this.state.rows.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onPageChange={this.handleChangePage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
          />
        </Paper>
        </div>
      );
    }
}

export default BasicTable;

