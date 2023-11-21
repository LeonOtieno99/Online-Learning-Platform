import React from 'react'
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {AppBar, Container, Grid, Typography} from '@mui/material'


function Footer() {
    const footerstyle = {
        padding: '2rem 0',
    };
  return (
    <div>
         <AppBar position='static' style={footerstyle}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>Social Links</Typography>
                            <ul>
                                <li>
                                    <Link href="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 3</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>Social Links</Typography>
                            <ul>
                                <li>
                                    <Link href="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 3</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>Social Links</Typography>
                            <ul>
                                <li>
                                    <Link href="#">Link 1</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 2</Link>
                                </li>
                                <li>
                                    <Link href="#">Link 3</Link>
                                </li>
                            </ul>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3}>
                            <Typography variant='h6'>Follow Us</Typography>
                            <div>
                                <Link href="#">
                                    <FacebookIcon />
                                </Link>
                                <Link href="#">
                                    <TwitterIcon />
                                </Link>
                                <Link href="#">
                                    <InstagramIcon />
                                </Link>
                                <Link href="#">
                                    <LinkedInIcon />
                                </Link>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </AppBar>
    </div>
  )
}

export default Footer