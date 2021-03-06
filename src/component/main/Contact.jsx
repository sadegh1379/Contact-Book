import React  from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from 'react-avatar';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import {addButtonToggle , deleteContact , onChangeCheckBox} from '../redux/Actions';
import {useDispatch} from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles(()=>({
  bold : {
    fontWeight:'bolder',
  }
}))

function Contact({contact}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const dispatch = useDispatch();

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        setChecked(newChecked);
      };
      
      const {name , phone , selected , id} = contact ;
    return (
        <ListItem button>
            <ListItemAvatar>
            <Avatar
                name={name}
                size={45}
                round
            />
            </ListItemAvatar>
            <ListItemText  primary={name} />
            <ListItemText   primary={phone} />
            <ListItemSecondaryAction>
            <IconButton onClick={()=>dispatch(deleteContact(id))} m={2}  edge="end" color="secondary">
                    <DeleteIcon />
            </IconButton>
              <Link to={`/edit/${id}`} onClick={()=>dispatch(addButtonToggle(false))}>
                 <IconButton edge="end" color="inherit">
                   <EditIcon />
                 </IconButton>
              </Link>
            <Checkbox
                edge="end"
                onChange={handleToggle(id)}
                checked={selected}
                onChange={()=>dispatch(onChangeCheckBox(id))}
            />
            
            </ListItemSecondaryAction>
    </ListItem>
    )
}

export default Contact
