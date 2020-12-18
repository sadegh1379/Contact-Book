import React from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import {useSelector , useDispatch} from 'react-redux';
import {addButtonToggle} from '../redux/Actions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles(()=>({
    appBar: {
        top: 'auto',
        bottom: 0,
      },
      fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },
      grow: {
        flexGrow: 1,
      },

}))
function AppBarApp() {
    const dispatch = useDispatch();
    const showAddBtn = useSelector(state => state.showAddButton);
    const classes = useStyles();

    const AddBtn = ()=>{
        dispatch(addButtonToggle(false));
    }
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          
          {
              showAddBtn?
              (
                  <>
                    <IconButton edge="start" color="inherit" aria-label="open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Link onClick={AddBtn} to="/add">
                         <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                          <AddIcon />
                        </Fab>
                    </Link>
                 <div className={classes.grow} />
                    <IconButton color="inherit">
                    <SearchIcon />
                    </IconButton>
                    <IconButton  edge="end" color="inherit">
                    <DeleteIcon />
                    </IconButton>
                    
                 </>
              ) : ( 
              <Link to="/" onClick={()=>dispatch(addButtonToggle(true))} style={{color:'white' , fontWeight:'bold'}}>
                  <IconButton  edge="end" color="inherit">
                    <ArrowBackIcon  />
                  </IconButton>
              </Link>
              )
          }
         
        </Toolbar>
      </AppBar>
    )
}

export default AppBarApp


     
