import styled from '@emotion/styled'
import { LocalLibrary, Mail,Notifications, SearchOffRounded, SearchOutlined, SearchRounded} from '@mui/icons-material'
import { AppBar,Box, InputBase, Toolbar, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Badge from '@mui/material/Badge'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white", 
  padding:"0 10px",
  width: "240px ",
  borderRadius:"10px"
 
})); 

const Button2 = styled(Box)(({ theme }) => ({
  display: "flex",
  gap:"10px",
  width:'700px'
  
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems:"center",
  gap:"10px",
  
})); 

const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems:"center",
  gap:"10px"
})); 

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})



const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  //function to fetch results
  useEffect(() => {
    if(searchQuery.trim() == ''){
      setSearchResults([]);
      setShowResults(false);
      return;
    }
  })

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    const handleSearch =(searchQuery) =>{
      
      //fetch results from backend
      fetch(`/search?query=${searchQuery}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error searching:', error);
        })
    }

    handleSearch(searchQuery);
  }

  //logout
  const navigate = useNavigate()
const handleSubmit = (event) =>{
            navigate('/login') 
};

  
  return (
    <AppBar position='stick'>
      <StyledToolbar>
        <Icons>
       <SchoolIcon sx={{display : {xs:'none', md: 'flex'}, mr: 1 }} />
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Steins;Gate</Typography>
        </Icons>
        <Button2>
        <Search><InputBase placeholder='search...' 
          value={searchQuery}a
          onChange={handleInputChange}
          style={{
          width:'600px',
          height:'50px'
        }}></InputBase></Search>
        <Button variant='contained' 
         onClick={handleSearchClick}
         style={{
         height:'45px'
        }}>Search</Button>
        </Button2>
        {/*render results*/}
        {showResults && searchResults.length > 0 && (
          <div className='search-results'>
            <ul>
              {searchResults.map((result) => (
                <li key={result.id}>
                  <h3>{result.name}</h3>
                  <p>{result.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <Icons>
         <Button 
         onClick={handleSubmit}
         variant='contained'>
          Logout
         </Button>
        </Icons>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem><Link to = '/register'>Logout</Link></MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar