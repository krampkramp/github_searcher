import React, { useState, useEffect } from 'react';
import './App.css';
import { Grid } from '@mui/material';
import HeaderSearch from './components/HeaderSearch';
import BodyContainer from './components/BodyContainer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  componentBox: {
    paddingTop: '70px',
    minWidth: '0',   
  } 
}));

function App() {
  const classes = useStyles();
  const [username, setUsername] = useState();
  const [usernameInfo, setUsernameInfo] = useState();
  const [error,setError] = useState(false);

  // useEffect(() => {
    
  // }, []);

  return (
     <Grid container maxHeight 
  direction="column"
  justifyContent="space-between"
  alignItems="center">
 
      <Grid item xs={6} md={6}className={classes.componentBox} >
          <HeaderSearch 
            setUsername={setUsername}
            username={username}
            setUsernameInfo={setUsernameInfo}
            setError={setError}
          />
      </Grid>

      <Grid item xs={6} md={6} className={classes.componentBox}>
       <BodyContainer
        usernameInfo={usernameInfo}
        error={error}
        />
      </Grid>
    </Grid> 
  );
}

export default App;
