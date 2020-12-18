import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography , Paper, Button  } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {useDispatch} from 'react-redux';
import {addContact , addButtonToggle} from '../redux/Actions';
import shortid from 'shortid';
import {Alert} from '@material-ui/lab';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: 'auto',
      width: '90%',
      textAlign:'center'

    },
    textAlign:'center'

  },
  paper:{
      padding:'20px',
      textAlign:'center'
  },
  button:{
      marginTop:'20px',
  },
  margin:{
      margin:'20px auto'
  }
}));

export default function AddContact() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [formData , setFormData] = useState({name : '' , phone:''});
  const [showA , setShowA] = useState('');
  const history = useHistory();

  const onChangeData = (e)=>{
      setFormData({
          ...formData , 
          [e.target.name] : e.target.value
      })
    
  } 

  const handleSubmit = (e)=>{
      e.preventDefault();
      const {name , phone} = formData;
      if(name === ''){
          setShowA("please Enter Your Name .");
          setTimeout(()=>setShowA('') , 3000)
      }else if(phone === ''){
        setShowA("please Enter Your phone .");
        setTimeout(()=>setShowA('') , 3000)
      }else{
        const new_contact = {
            id : shortid.generate(),
            name : name,
            phone : phone
        }
        dispatch(addContact(new_contact));
        dispatch(addButtonToggle(true));
        history.push("/")
      }
  }

  

  return (
   
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Add Contact
        </Typography><hr/>
            <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <TextField onChange={(e)=>onChangeData(e)} name="name" className={classes.margin} id="standard-basic" label="Enter Your Name" />
            <TextField onChange={(e)=>onChangeData(e)}  name="phone"  className={classes.margin} id="standard-basic" label="Enter Your Phone" />
            {
                showA.length > 1 ?(
                    <Alert severity="error">{showA}</Alert>
                ):null
            }
            <Button
                
                variant="contained"
                color="primary"
                size="large"
                type="submit"
                className={classes.button}
                startIcon={<AddCircleOutlineIcon />}
                >
                Create
            </Button>
            </form>
      </Paper>
  );
}
