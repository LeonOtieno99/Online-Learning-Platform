import React, { useState } from 'react'
import Lectappbar from './components/Lectappbar'
import { AppBar, Box, Button, Container, Grid, Input, InputBase, Paper, TextField, Typography } from '@mui/material'
import Footer from './components/Footer'
import axios from 'axios'
import io from 'socket.io-client'
import Chat from './Chat';
import { Link } from 'react-router-dom'
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


const socket = io.connect("http://localhost:8081")

export default function Lecturer() {
  const [file, setFile] = useState()
  const [values, setValues] = useState({
    link:'',
    name:'',
    desc:'',

})

const handleupload = (event) =>{
  event.preventDefault();
      console.log(values);
      axios.post('http://localhost:8081/upload',values)
      .then(res => {})
      .catch(err => console.log(err));
};


  const submit = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('desc2', document.getElementsByName('desc2')[0].value);
  
    axios.post('http://localhost:8081/submit', formData)
    .then((res) => {})
    .catch(er => {
      console.log(er);
    });
  }

  

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
      <Lectappbar />
      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <br />
        <Paper elevation={3} style={{padding: '20px'}}>
          <div>
            <Typography variant='h5'>
              Enter Youtube video link
            </Typography>
            <form> 
              <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                  <TextField fullWidth label="Enter Link here" id="fullWidth"
                  name='link'
                  onChange={e => setValues({...values, link: e.target.value})}
                   />
              </Box>
              <br />
              <br />
              <Typography variant='h5'>
              Name of video
            </Typography>
            <Box
                  sx={{
                    width: 500,
                    maxWidth: '100%',
                  }}
                >
                <TextField fullWidth label="Enter Link here" id="fullWidth" 
                name='name'
                onChange={e => setValues({...values, name: e.target.value})}
                />
              </Box>
              <br />
              <br />
              <Typography variant='h6'>
                Description of video
              </Typography>
              <TextField
                id="outlined-multiline-static"
                name='desc'
                label="Enter text"
                onChange={e => setValues({...values, desc: e.target.value})}
                multiline
                rows={4}
                placeholder='Enter text here'
              />
              <br />
              <br />
              <Button variant='contained'onClick={handleupload}>
                Upload
              </Button>
            </form>
          </div>
        </Paper>
      </Grid>
    
      {/*Right column*/}
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
        </Grid>
        </Grid>

      <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <br />
        <Paper elevation={3} style={{padding: '20px'}}>
              <Typography variant='h5'>
                Choose document to upload
              </Typography>
              <InputBase type='file' name="file" onChange={(e) => setFile(e.target.files[0])} />
              <br />
              <br />
              <Typography variant='h6'>
                Description of document
              </Typography>
              <TextField
                id="description"
                name="desc2"
                label="Enter text"
                multiline
                rows={4}
                placeholder='Enter text here'
                />
              <br />
              <br />
              <Button variant='contained' onClick={submit}>
                Submit
              </Button>
        </Paper>
      </Grid>
      </Grid>
    
       {/*Footer component*/}
       <br />
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
  )
}
