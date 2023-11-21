import styled from "@emotion/styled";
import { LocalLibrary } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import { Delete } from "@mui/icons-material";

function Admin() {
  const [students, setStudents] = useState([]);
  const [lecturers, setLecturers] = useState([]);

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

   
  useEffect(()=> {
    fetch('http://localhost:8081/lecturer')
    .then((response) => response.json())
    .then((jsonData) => {
      setLecturers(jsonData);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
})

  const handledelete = (id) => {
    setTimeout(function () {
      window.location.reload();
    }, 100);
    axios
      .post("http://localhost:8081/delete", { id })
      .then(() => {
        fetch("http:/localhost:8081/")
          .then((response) => response.json())
          .then((jsonData) => {
            setStudents(jsonData);
          })
          .catch((error) => {
            console.error("Error fetchind data:", error);
          });
      })
      .catch((err) => console.log(err));
  };
  const handledelete2 = (id) => {
    setTimeout(function () {
      window.location.reload();
    }, 100);
    axios
      .post("http://localhost:8081/delete2", { id })
      .then(() => {
        fetch("http:/localhost:8081/")
          .then((response) => response.json())
          .then((jsonData) => {
            setLecturers(jsonData);
          })
          .catch((error) => {
            console.error("Error fetchind data:", error);
          });
      })
      .catch((err) => console.log(err));
  };
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <div>
      <AppBar position="stick">
        <StyledToolbar>
          <Typography
            variant="h6"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Steins;Gate
          </Typography>
          <Typography variant="h6">Administrator Dashboard</Typography>
          <LocalLibrary sx={{ display: { xs: "block", sm: "none" } }} />
        </StyledToolbar>
      </AppBar>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow><Typography variant="h5">STUDENTS DATA</Typography></TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
                <TableCell align='right'>FIRST NAME</TableCell>
                <TableCell align='right'>LAST NAME</TableCell>
                <TableCell align='right'>REGISTRATION NUMBER</TableCell>
                <TableCell align='right'>EMAIL</TableCell>
                <TableCell align='right'>DELETE</TableCell>
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
                       <TableCell align="right">
                  <Button
                    onClick={() => handledelete(student.id)}
                    style={{ paddingLeft: "95%", fontSize: "20px" }}
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow><Typography variant="h5">INSTRUCTOR DATA</Typography></TableRow>
            <TableRow>
              <TableCell>ID</TableCell>
                <TableCell align='right'>FIRST NAME</TableCell>
                <TableCell align='right'>LAST NAME</TableCell>
                <TableCell align='right'>REGISTRATION NUMBER</TableCell>
                <TableCell align='right'>EMAIL</TableCell>
                <TableCell align='right'>DELETE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {lecturers.map((lecturer) => (
                <TableRow
                    key={lecturer.id}
                    sx={{ '&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell component="th" scope="row">
                        {lecturer.id}
                      </TableCell>
                      <TableCell align="right">{lecturer.fname}</TableCell>
                      <TableCell align="right">{lecturer.lname}</TableCell>
                      <TableCell align="right">{lecturer.registration}</TableCell>
                      <TableCell align="right">{lecturer.email} </TableCell>  
                       <TableCell align="right">
                  <Button
                    onClick={() => handledelete2(lecturer.id)}
                    style={{ paddingLeft: "95%", fontSize: "20px" }}
                  >
                    <Delete />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default Admin;
