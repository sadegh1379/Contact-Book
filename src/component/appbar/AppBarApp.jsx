import React , {useState} from 'react'
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';
import { makeStyles} from '@material-ui/core/styles';
import {useSelector , useDispatch} from 'react-redux';
import {addButtonToggle , selectedAll , deleteSelectedContacts} from '../redux/Actions';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Paper, TextField } from '@material-ui/core';

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
      searchBox:{
        border :'1px solid grey',
        width:'100%',
        padding:'10px',
        margin:'10px auto',
        textAlign:'center',
        top: 'auto',
        bottom: 100,
        position: 'absolute',
    
      }

}))
function AppBarApp() {
    const dispatch = useDispatch();
    const showAddBtn = useSelector(state => state.showAddButton);
    const [show , setShow] = useState(false);
    const classes = useStyles();

    const AddBtn = ()=>{
        dispatch(addButtonToggle(false));
    }
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
          {
            show?(
              <Paper className={classes.searchBox} elevation={1} >
                <TextField  name="name" size="small" variant="outlined" id="standard-basic" label="Enter Name" />
              </Paper>
            ) : null
          }
         
        <Toolbar>
          
          {
              showAddBtn?
              (
                  <>
                    <IconButton onClick={()=>setShow(!show)} edge="start" color="inherit" aria-label="open drawer">
                        <SearchIcon />
                    </IconButton>
                    <Link onClick={AddBtn} to="/add">
                         <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                          <AddIcon />
                        </Fab>
                    </Link>
                 <div className={classes.grow} />
                    <IconButton onClick={()=>dispatch(selectedAll())} color="inherit">
                    <CheckBoxIcon />
                    </IconButton>
                    <IconButton onClick={()=>dispatch(deleteSelectedContacts())}  edge="end" color="inherit">
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


     
