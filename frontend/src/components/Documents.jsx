import { Description } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/documents")
      .then((response) => response.json())
      .then((jsonData) => {
        setDocuments(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Description />
          <Typography
            variant="h6"
            style={{ paddingLeft: "5px" }}
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Documents
          </Typography>
        </Toolbar>
      </AppBar>
      <br />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">TYPE</TableCell>
              <TableCell align="right">DESCRIPTION</TableCell>
              <TableCell align="right">FILE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents.map((document) => (
              <TableRow
                key={document.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {document.id}
                </TableCell>
                <TableCell align="right">{document.name}</TableCell>
                <TableCell align="right">{document.type}</TableCell>
                <TableCell align="right">{document.description}</TableCell>
                <TableCell align="right">
                  <Button variant="outlined">
                    <a
                      href={`http://localhost:8081/${document.path}`}
                      download={document.name}
                    >
                      Download
                    </a>
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

export default Documents;
