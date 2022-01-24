import React,{useState, useEffect} from 'react'
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton, 
  Avatar, 
  Typography
 } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AssignmentReturnedIcon from '@mui/icons-material/AssignmentReturned'; 
import { blue } from '@mui/material/colors';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function BodyContainer(props) {
  const {usernameInfo} = props;
  const [open, setOpen] = useState(props.error ? true : false);

  return (
    <>  
    <Grid container >
    <Grid item xs={12} md={12}>
    {(usernameInfo && !usernameInfo.message) && (
      <Card>
        <CardMedia
        component="img"
        height="194"
        image={usernameInfo.avatar_url}
        alt="Paella dish"
      />
      <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={usernameInfo.name}
        subheader={usernameInfo.created_at.split('T')[0]}
        
      />
            <CardContent>
        <Typography variant="body2" color="text.secondary">
          The user named by {usernameInfo.name} living on '{ usernameInfo.location ? usernameInfo.location : ' "we dont know yet"'}' has a lot to show us. 
          <Typography>
             Read more...
          </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {usernameInfo.followers}
        </IconButton>
        <IconButton>
          <AssignmentReturnedIcon/> {usernameInfo.public_repos}
        </IconButton>
      </CardActions>
      </Card>
    )}
    {props.error && (
      <Grid>
      <Snackbar open={props.error }>
        <Alert severity="warning">The user not exist!</Alert>
      </Snackbar>
      </Grid>
    )}
    </Grid>

    </Grid>
    </>
  )

    
}
