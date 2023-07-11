import React from "react";
import useSWR, { mutate } from 'swr';
import axios from 'axios';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

const fetcher = url => axios.get(url).then(({ data }) => data);


function UserTable() {
  const { data: data } = useSWR('http://localhost:8080/Users', fetcher, { suspense: true });

  const deleterecord = (id) => {
    fetch("http://localhost:8080/Users/" + id, { method: 'DELETE' }).then((response) => response.json())
      .then((result) => {
        alert("Record deleted");
        mutate('http://localhost:8080/Users');
      })
  }
  return (<>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">State</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">
                <Button onClick={(e) => { deleterecord(row.id) }}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
  )
}
export default UserTable;