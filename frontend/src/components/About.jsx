import React from "react";
import {
  AppBar,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Toolbar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

function About() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" align="center">
            Steins;Gate Online School
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <Container>
        <Typography>
        <b>Steins;Gate</b> is an online educational institution dedicated to providing
        high-quality computer science education and fostering a community of
        passionate learners and educators. Our mission is to empower students
        and professionals with the knowledge and skills they need to excel in
        the dynamic world of technology. <br />At Steins Gate, we believe in the
        transformative power of education. We understand that computer science
        is not just about coding; it's about problem-solving, innovation, and
        creativity. With this understanding, we have curated a comprehensive
        curriculum that covers a wide range of computer science topics, from
        programming and data structures to artificial intelligence and
        cybersecurity.<br /> What sets Steins Gate apart is our commitment to
        excellence in education. Our courses are designed and taught by
        experienced professionals and educators who are experts in their
        respective fields. We provide our students with a supportive and
        collaborative learning environment that encourages them to explore,
        experiment, and grow.<br /><br /> Here's what you can expect when you join the
        Steins Gate community:<br />
        <ol>
          <li>
          <b>Quality Content:</b>
          </li>
          Our courses are meticulously
        designed to provide in-depth knowledge and practical skills that are
        relevant to the tech industry. We keep our content up-to-date to ensure
        that our students are well-prepared for the latest trends and challenges
        in the field. 
        <li>
        <b>Experienced Instructors:</b>
        </li>
        Our team of instructors comprises
        seasoned professionals with a wealth of industry experience. They are
        not just teachers; they are mentors who are dedicated to your success.
        <li>
        <b>Flexible Learning:</b>
        </li>
        We understand that everyone has a unique learning
        style and schedule. That's why we offer flexible learning options,
        including self-paced courses and live interactive sessions, to cater to
        the diverse needs of our students. 
        <li>
        <b>Supportive Community:</b> 
        </li>
        Learning is a
        collaborative journey. At Steins Gate, you'll become part of a vibrant
        community of learners and enthusiasts. You can connect with fellow
        students, participate in discussions, and seek help when needed.
        <li>
        <b>Practical Projects: </b>
        </li>
        We believe in learning by doing. Many of our courses
        include hands-on projects that allow you to apply what you've learned in
        a real-world context.
        <li>
        <b>Career Development:</b>
        </li>
        Whether you're starting your
        career in tech or looking to advance, we provide resources and guidance
        to help you achieve your goals. From resume building to interview
        preparation, we're here to support your career journey.
        </ol>
        <Typography>
            At Steins Gate,
          we are passionate about fostering a love for computer science and
          technology. We are committed to helping individuals of all backgrounds
          and skill levels achieve their educational and career aspirations. Join
          us on this exciting journey, and let's explore the endless possibilities
          that the world of computer science has to offer. Your success is our
          success, and we look forward to being a part of your educational and
          professional growth.
        </Typography>
        </Typography>
      </Container>
      <Typography  variant="h3" style={{paddingLeft:'25%'}}><b>Welcome to Steins Gate!</b></Typography>
    </div>
  );
}

export default About;
