import React, { useEffect, useState } from 'react';
import Appbar from './components/Appbar';
import { AppBar, Button, Container, Grid, InputBase, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import { AccountCircle, Article, Info } from '@mui/icons-material';
import './components/look.css'
import { Link } from 'react-router-dom';
import io from 'socket.io-client'
import Chat from './Chat';
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {  AccountCircleRounded } from '@mui/icons-material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';


const socket = io.connect("http://localhost:8081")


function Student() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/student')
      .then((response) => response.json())
      .then((jsonData) => {
        setVideos(jsonData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //classmates
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

  //chat
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false)
  

  const joinRoom = (() =>{
    if(username !== "" && room !== ""){
      socket.emit('join_room', room);
      setShowChat(true);
    }
  })
  const footerstyle = {
    padding: "2rem 0",
  };
  return (
    <div>
      <Appbar />
      <br />
      <Stack direction='row' spacing='3' justifyContent='space-between' paddingBottom={2}>
        <Grid>
          <List>
            <ListItem>
            <Link to = '/documents' style={{
                  textDecoration:'none',
                  color:'black'
                }}>
            <ListItemButton sx={{
                      
                      borderRadius: '8px',
                      width: '250px',
                      '&:hover': {
                        backgroundColor: '#b5b9bb',
                      },
                    }}>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText>
                  Documents
                </ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
            <ListItem>
            <Link to = '/about' style={{
                  textDecoration:'none',
                  color:'black'
                }}>
            <ListItemButton sx={{
                      borderRadius: '8px',
                      width: '250px',
                      '&:hover': {
                        backgroundColor: '#b5b9bb',
                      },
                    }}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText>
                  About us
                </ListItemText>
              </ListItemButton>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid style={{
          width: '670px'
        }}>
        <Container style={{ height: '800px', overflowY: 'scroll' }}>
          {videos.map((video) => (
            <Grid item key={video.id} xs={12} sm={12} maxWidth={3}>
              <div class="grid-item">
                <Paper style={{width: '620px', textAlign: 'center'}}>
                    <Container>
                        <br />
                        <div
                            id={`video-container-${video.id}`}
                            dangerouslySetInnerHTML={{ __html: video.video_link }}
                        ></div>
                            <h3>{video.name}</h3>
                        <Container >
                        <div style={{
                          backgroundColor: 'lightgray',
                          padding: '2px',
                          borderRadius: '8px',
                          display:'inline-block',
                          textAlign: 'center',
                          width:'100%'
                        }}>
                            <p style={{paddingBottom : '2px'}}>{video.description}</p>
                        </div>
                      </Container>
                      </Container>
                </Paper>
                <br />
              </div>
            </Grid>
          ))}
        </Container>
        </Grid>
        <Grid item xs={12} md={6} style={{paddingLeft:'20px'}}>
          <br />
         
          <Paper elevation={3} style={{padding:'20px'}}>
          {!showChat ? (
              <><Typography variant='h5'>Chat with Classmates and Lecturer</Typography><br /><Typography variant='h6'>Join a Chat</Typography><TextField type='text' placeholder='name...' onChange={(event) => { setUsername(event.target.value); } } /><br /><br /><TextField type='text' placeholder='Room ID...' onChange={(event) => { setRoom(event.target.value); } } /><br /><br /><Button variant='outlined' onClick={joinRoom}>Join a room</Button></>
            )
            : (
              <Chat socket={socket} username={username} room={room}/>
            )}
          
          </Paper>
          <br />
          <Paper elevation={3} style={{padding:'5px'}}>
          <Typography variant='h5'>Your classmates</Typography>
          <TableContainer component={Paper}>
        <Table sx={{minWidth:300}} aria-label="simple table">
          <TableHead>
            <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align='right'>FIRST NAME</TableCell>
                <TableCell align='right'>LAST NAME</TableCell>
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
                    </TableRow>
              ))}
          </TableBody>
        </Table>
        </TableContainer>
          </Paper>
        </Grid>
        
        
      </Stack>
      <div>
        <AppBar position="static" style={footerstyle}>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Courses Offered</Typography>
                <ul style={{ listStyle: "square" }}>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Data Science
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Software Development
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Cybersecurity
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Machine Learning
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Resources</Typography>
                <ul style={{ listStyle: "square" }}>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      TextBooks
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Journals
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Articles
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Newspapers
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Online Library
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      School History
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      School Nation
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      More Resources
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Admissions</Typography>
                <ul style={{ listStyle: "square" }}>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Application Forms
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Registration Forms
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Attachment Forms
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Ongoing Students Forms
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Graduation Forms
                    </Link>
                  </li>
                  <li style={{ paddingBottom: "5px" }}>
                    <Link
                      href="#"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      Others
                    </Link>
                  </li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="h6">Follow Us</Typography>
                <div>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <FacebookIcon /> Facebook
                    <br />
                  </Link>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <TwitterIcon />
                    X
                    <br />
                  </Link>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <InstagramIcon />
                    Instagram
                    <br />
                  </Link>
                  <Link
                    href="#"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <LinkedInIcon />
                    LinkedIn
                    <br />
                  </Link>
                </div>
              </Grid>
            </Grid>
          </Container>
        </AppBar>
      </div>
      
    </div>

  );
}

export default Student;
