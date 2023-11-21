import {  AccountCircleRounded } from '@mui/icons-material';
import { AppBar,Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

function Classmates() {
    const [students, setStudents] = useState([]);

    useEffect(()=> {
        fetch('http://localhost:8081/classmates')
        .then((response) => response.json())
        .then((jsonData) => {
          setStudents(jsonData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    })
  return (
    <div>
        <AppBar position="static">
        <Toolbar>
            <AccountCircleRounded />
          <Typography variant="h6" style={{paddingLeft:'5px'}} component="div" sx={{ flexGrow: 1 }}>
            Classmates
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{minWidth:650}} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='right'>FIRST NAME</TableCell>
                <TableCell align='right'>LAST NAME</TableCell>
                <TableCell align='right'>REGISTRATION NUMBER</TableCell>
                <TableCell align='right'>EMAIL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {students.map((student) => (
                <TableRow
                    key={student.id}
                    sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell component="th" scope="row">
                        {student.id}
                      </TableCell>
                      <TableCell align="right">{student.fname}</TableCell>
                      <TableCell align="right">{student.lname}</TableCell>
                      <TableCell align="right">{student.registration}</TableCell>
                      <TableCell align="right">{student.email} </TableCell>                         
                    </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Classmates