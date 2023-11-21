import styled from '@emotion/styled'
import { LocalLibrary} from '@mui/icons-material'
import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Lectappbar = () => {
  return (
    <AppBar position='stick'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>Steins;Gate</Typography>
        <Typography variant='h6'>Instructor Dashboard</Typography>
        <LocalLibrary sx={{display:{xs:"block", sm:"none"}}}/>
      </StyledToolbar>
    </AppBar>
  )
}

export default Lectappbar