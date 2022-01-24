import React from 'react'
import { Grid,Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {getUser} from '../services/Api';

export default function HeaderSearch(props) {
  const handleNameSearch = (e) => {
    
    props.setUsername(e.target.value);
  }

   const getUserInfo = () =>{
    getUser(props.username).then( res => {
      if(res.message){
        props.setError(true);
      }else {
        props.setError(false);
      }
      props.setUsernameInfo(res)
    });
  }
  return (
    <div>
      <Grid>
        <Box component="form" noValidate autoComplete="off">
          <TextField id="button-searcher" label="Username" variant="outlined" onChange={ e => handleNameSearch(e)}/>
        </Box>
        <Button variant="outlined" onClick={getUserInfo}>Search User</Button>
      </Grid>
    </div>
  )
}
