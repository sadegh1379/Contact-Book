import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Contact from './Contact';
import {useSelector} from 'react-redux';
import { TextField } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  text1: {
    padding: theme.spacing(2, 2, 0),
    
  },
  text: {
    padding: theme.spacing(2,20, 0),
    
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    textAlign:'center'
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
 
}));

export default function BottomAppBar() {
  const classes = useStyles();
  const allContact = useSelector(state=>state.contacts);
  const filterContact = useSelector(state=>state.filter);
  const filterError = useSelector(state=>state.filterErr);

  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        <Typography className={classes.text1} variant="h5" gutterBottom>
          Contacts
        </Typography><hr/>
        <List dense className={classes.root}>
        {
          filterError.length > 0 ? filterError : 
          filterContact.length > 0 ? filterContact.map((contact , index) => {
           
            return (
                <Contact key={index} contact={contact}/>
            );
        }) : allContact.length > 0 ? allContact.map((contact , index) => {
           
          return (
              <Contact key={index} contact={contact}/>
          );
      }) :   <Typography className={classes.text} variant="caption" >
             No Contact Yet
            </Typography>
        
      }
        </List>
      </Paper>
    </React.Fragment>
  );
}
