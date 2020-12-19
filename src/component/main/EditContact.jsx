import React , {useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography , Paper, Button  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch , useSelector} from 'react-redux';
import {addContact , addButtonToggle, getContact , editContact} from '../redux/Actions';
import shortid from 'shortid';
import {Alert} from '@material-ui/lab';
import {useHistory , useParams} from 'react-router-dom';

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
  const {id} = useParams();
  const contact = useSelector(state=>state.contact);
  const [formData , setFormData] = useState({name : '' , phone:''});
  const [showA , setShowA] = useState('');
  const history = useHistory();

  const onChangeData = (e)=>{
      setFormData({
          ...formData , 
          [e.target.name] : e.target.value
      })
    
  } 

  useEffect(() => {
     
      dispatch(getContact(id));
      if(contact){
        setFormData({
            name : contact.name,
            phone: contact.phone ,
        })
      }
     
  }, [contact])

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
            id : id ,
            name : name,
            phone : phone
        }
        dispatch(editContact(new_contact));
        dispatch(addButtonToggle(true));
        history.push("/")
      }
  }



  

  return (
   
      <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>
          Edit Contact
        </Typography><hr/>
            <form onSubmit={handleSubmit} className={classes.root} autoComplete="off">
            <TextField value={formData.name} onChange={(e)=>onChangeData(e)} name="name" className={classes.margin} id="standard-basic" label="Enter Your Name" />
            <TextField value={formData.phone} onChange={(e)=>onChangeData(e)}  name="phone"  className={classes.margin} id="standard-basic" label="Enter Your Phone" />
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
                startIcon={<EditIcon />}
                >
                Update
            </Button>
            </form>
      </Paper>
  );
}

