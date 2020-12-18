import React from 'react';
import './styles/App.css';
import Contacts from './component/main/Contacts';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import EditContact from './component/main/EditContact';
import AddContact from './component/main/AddContact';
import {Provider , useSelector} from 'react-redux';
import store from './store';
import AppBarApp from './component/appbar/AppBarApp';

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
 
 

}));


function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
       <React.Fragment>
      <CssBaseline />
      {/* switch router */}
      <Switch>
          <Route exact path="/" component={Contacts}/>
          <Route exact path="/edit" component={EditContact}/>
          <Route exact path="/add" component={AddContact}/>
      </Switch>
     <AppBarApp/>
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;







