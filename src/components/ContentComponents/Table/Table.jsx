import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";

function createData(name, orderId, date, status) {
  return { name, orderId, date, status };
}

const rows = [
  createData("Adobo", 18908424, "24 December 2022", "Pending"),
  createData("Tapsilog", 18908424, "24 December 2022", "Done"),
  createData("Egg", 18908424, "24 December 2022", "Done"),
  createData("Nilaga", 18908421, "24 December 2022", "Done"),
  createData("Sinigang", 18908421, "24 December 2022", "Done"),
  createData("Pepsi", 18908421, "24 December 2022", "Done"),
 
];


const makeStyle=(status)=>{
  if(status === 'Approved')
  {
    return {
      background: 'rgb(145 254 159 / 47%)',
      color: 'green',
    }
  }
  else if(status === 'Pending')
  {
    return{
      background: '#ffadad8f',
      color: 'red',
    }
  }
  else{
    return{
      background: '#59bfff',
      color: 'white',
    }
  }
}

export default function BasicTable() {
  return (
      <div className="Table">
      <h3 className="titles">Recent Orders</h3>
        <TableContainer
          component={Paper}
          style={{ paddingLeft: "5rem", paddingTop: "1rem", borderRadius: "1rem", boxShadow: "0px 0px 10px 0px #00000029" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="left">Order ID</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
               
              </TableRow>
            </TableHead>
            <TableBody style={{ color: "white" }}>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.orderId}</TableCell>
                  <TableCell align="left">{row.date}</TableCell>
                  <TableCell align="left">
                    <span className="status" style={makeStyle(row.status)}>{row.status}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
  );
}
