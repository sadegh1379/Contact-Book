import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Contact from './Contact';
import {useSelector} from 'react-redux';



const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
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

  return (
    <React.Fragment>
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Contacts
        </Typography><hr/>
        <List dense className={classes.root}>
        {allContact.map((contact , index) => {
           
            return (
                <Contact key={index} contact={contact}/>
            );
        })}
        </List>
      </Paper>
    </React.Fragment>
  );
}