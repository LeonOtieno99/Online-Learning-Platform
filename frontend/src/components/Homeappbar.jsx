import React from "react";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import graduates from "/home/leon/Documents/online-learning-platform/frontend/src/components/Graduation.jpg";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Homeappbar() {
  const containerStyle = {
    backgroundImage:
    `linear-gradient(rgba(0, 0, 0.7, 0.2), rgba(0, 0, 0.7, 0.2)), url(${graduates})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  const cardContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  };

  const cardStyle = {
    maxWidth: 345,
    width: "50%",
    marginBottom: "1rem",
    marginTop: "1rem",
    marginLeft: "3%",
    marginRight: "3%",
  };

  const footerstyle = {
    padding: "2rem 0",
  };
  const typed = {
    strings:['Welcome to Steins;Gate Schools!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
  }


  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <SchoolIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Steins;Gate
            </Typography>
            <div style={{ flexGrow: 1 }} />
            <Link to="/login">
              <Button variant="contained">Login</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <br />
      <div style={containerStyle} >
        <Typography variant="h2" style={{color:'white'}} onS><span className="auto-input">WELCOME TO STEINS;GATE</span></Typography>
        <Typography variant="h3" style={{paddingLeft:"11%"}}>Computer Science Online Learning Platform
          <Link to="/register">
            <Button
              variant="contained"
              color="primary"
              style={{ width: "30%", marginLeft: "30%" }}
            >
              Enroll Now
            </Button>
          </Link>
          </Typography>
          <script src="frontend/src/typing.js"></script>
      </div>
      <br />
      <Typography
        style={{ fontFamily: "inherit", fontSize: "45px", marginLeft: "35%"}}
      >
        Some of our staff
      </Typography>
      <div style={cardContainerStyle}>
        <Card style={cardStyle}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://pbs.twimg.com/media/EvI9qSqXAAEP50g.jpg"
              alt="lec 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mr.Omollo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Steins Gate is a shining star in the world of online computer
                science education. This exceptional institution has established
                itself as a beacon of knowledge and innovation, providing
                students with an unparalleled learning experience.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://ommcomnews.com/wp-content/uploads/2023/01/69c2466c19d663baff4f11841fcb2087-e1673230451124.jpg"
              alt="lec 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mr.Kiplangat
              </Typography>
              <Typography variant="body2" color="text.secondary">
                One of the most remarkable aspects of Steins Gate is its
                commitment to excellence. The school boasts a team of dedicated
                and highly qualified educators who are experts in their
                respective fields. Their passion for computer science is
                contagious, and they inspire students to reach new heights in
                their learning journey.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://publicsectormag.net/wp-content/uploads/2023/08/Teachers-Service-Commission-Chief-Executive-Officer-Nancy-Macharia.jpeg"
              alt="lec 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mrs.Wanjiku
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Steins Gate offers a comprehensive curriculum that covers a wide
                range of computer science topics. From programming languages and
                data structures to artificial intelligence and machine learning,
                the school ensures that students receive a well-rounded
                education that equips them with the skills and knowledge needed
                to thrive in the ever-evolving tech industry.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://svai.africa/wp-content/uploads/2021/02/mumbi-wachira.jpg"
              alt="lec 4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Miss. Hassan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                what truly sets Steins Gate apart is its commitment to fostering
                a vibrant and supportive community. Students at Steins Gate
                benefit from a network of like-minded individuals who share
                their passion for technology. The school encourages
                collaboration and peer-to-peer learning, creating an environment
                where everyone can grow and succeed together.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://africabusinessnews.co.ke/wp-content/uploads/2021/06/TSC-CBA-Macharia-edited-800x400.jpg"
              alt="lec 5"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Prof. Joan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                In addition to its exceptional faculty and comprehensive
                curriculum, Steins Gate leverages cutting-edge technology and
                resources to enhance the learning experience. Their
                state-of-the-art virtual classrooms and interactive learning
                materials make it easy for students to engage with the material,
                ask questions, and receive timely feedback, ensuring their
                success.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card style={cardStyle} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image="https://images.squarespace-cdn.com/content/v1/586d154f03596e5605562ea7/1598279488284-0QXRFMTGA1QK0RSPXVQH/Sheikh+Jalaldeen.jpg?format=500w"
              alt="lec 6"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mr. Abdul
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Whether you're a beginner looking to start your journey in
                computer science or an experienced professional seeking to
                enhance your skills, Steins Gate has something to offer for
                everyone. It's a place where dreams are turned into reality, and
                where the possibilities in the world of computer science are
                endless.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
      <br />
      <Typography
        style={{ fontFamily: "inherit", fontSize: "45px", marginLeft: "35%" }}
      >
        Student Talks
      </Typography>
      <div>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              <br />
              <Container>
                <Typography
                  style={{
                    fontSize: "30px",
                    paddingBottom: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  Sophia
                </Typography>
                "Steins Gate School has been a transformative journey for me.
                The quality of education, the dedicated instructors, and the
                supportive community have all played a pivotal role in my growth
                as a computer scientist. I'm proud to be a part of this
                exceptional institution."
              </Container>
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "600px" }}
            image="https://www.britishcouncil.co.ke/sites/default/files/exams_students021.jpg"
            alt="student"
          />
        </Card>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: "600px" }}
            image="https://www.britishcouncil.co.ke/sites/default/files/exams_schools05.jpg"
            alt="student"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              <br />
              <Container>
                <Typography
                  style={{
                    fontSize: "30px",
                    paddingBottom: "20px",
                    paddingRight: "10px",
                  }}
                >
                  David
                </Typography>
                "What sets Steins Gate apart is its emphasis on practical
                skills. The hands-on projects and real-world applications of
                computer science concepts have been invaluable in my career
                development. I'm grateful for the opportunities this school has
                given me."
              </Container>
            </Typography>
          </Box>
        </Card>
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>
              <br />
              <Container>
                <Typography
                  style={{
                    fontSize: "30px",
                    paddingBottom: "20px",
                    paddingLeft: "10px",
                  }}
                >
                  Amanda
                </Typography>
                "I can't thank Steins Gate School enough for the knowledge and
                skills it has provided me. The interactive online platform made
                learning a breeze, and the professors are not only experts in
                their field but also incredibly approachable. I'm excited about
                my future in computer science!"
              </Container>
            </Typography>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: "600px" }}
            image="https://www.expat.com/upload/guide/1562582667-university-kenya-news_item_slider-t1562582667.jpg"
            alt="student"
          />
        </Card>
        <br />
      </div>
      <Typography
        style={{ fontFamily: "inherit", fontSize: "45px", marginLeft: "15%" }}
      >
        Discover New Technologies at Steins;Gate
      </Typography>
     <Paper style={{display:'flex', alignItems:'center'}}>
            <Card style={{padding:'20px',width:'450px'}}>
                <CardMedia
                component="iframe"
                alt="Embedded Video"
                height="400"
                width="315"
                src="https://www.youtube.com/embed/Ia55clAtdMs?si=pknOIOBpRtT9eQaa"
                title="YouTube video player"
                allowfullscreen
                />
            </Card>
            <Card style={{padding:'20px', width:'450px'}}>
                <CardMedia
                component="iframe"
                alt="Embedded Video"
                height="400"
                width="315"
                src="https://www.youtube.com/embed/UyxfPnO5lgk?si=JnR1v3h6xpGNo89J"
                title="YouTube video player"
                allowfullscreen
                />
            </Card>
            <Card style={{padding: '20px', width:'450px'}}>
                <CardMedia
                component="iframe"
                alt="Embedded Video"
                height="400"
                width="315"
                src="https://www.youtube.com/embed/nZ1ehJqXor0?si=TnVCQrqVAb0DIorM"
                title="YouTube video player"
                allowfullscreen
                />
            </Card>
      </Paper>

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

export default Homeappbar;
