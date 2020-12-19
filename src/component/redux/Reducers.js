import { ArrowRightSharp } from '@material-ui/icons';
import { ADD_CONTACT , EDIT_CONTACT , ONCHANGE_CHECKBOX , GET_CONTACT , DELETE_CONTACT , DELETE_SELECTED_CONTACTS , SELECTED_ALL , ADD_BUTTON} from './Types';

const initialState = {
    contacts : [
        {
            id:1,
            name:'sadegh',
            phone : '09376770472',
            selected : false
        },
        {
            id:2,
            name:'ali',
            phone : '09192356855',
            selected : false
        },
        {
            id:3,
            name:'ahmad',
            phone : '09304485214',
            selected : false
        },
    ],
    showAddButton : true,
    contact : [],
    counter : 0
}

export const ReducerContact = (state = initialState , action)=>{
    const {payload , type } = action;
    switch(type){
        case ADD_CONTACT :
            return{
                ...state ,
                contacts : [payload , ...state.contacts]
            }
        case  ADD_BUTTON:
            return{
                ...state,
                showAddButton : payload
            }
        case GET_CONTACT :
            let arr = state.contacts.filter((contact)=>contact.id == payload);
            arr = arr.values();
            for(let val of arr){
                arr = val;
            }
            return{
                ...state,
                contact : arr
            }
        case EDIT_CONTACT:
            return{
                ...state,
                contacts : state.contacts.map((contact)=>{
                    if(contact.id == payload.id){
                        contact.name = payload.name;
                        contact.id = payload.id;
                        contact.phone = payload.phone;
                        console.log("edit contact : " , contact)
                        return contact;
                    }else{
                        return contact;
                    }
                })
            }
        case SELECTED_ALL:
            return{
                ...state,
                contacts:state.contacts.map((contact)=>{
                    contact.selected  = !contact.selected;
                    return contact 
                })
            };
        case DELETE_CONTACT:
            return{
                ...state,
                contacts : state.contacts.filter((contact)=>contact.id !== payload)
            }
        case DELETE_SELECTED_CONTACTS:
            return{
                ...state,
                contacts : state.contacts.filter((contact)=>contact.selected === false)
            }
        case ONCHANGE_CHECKBOX:
            console.log("onchange check run id :" , payload);

            return{
                ...state,
                contacts : state.contacts.map((contact)=>{
                    if(contact.id === payload){
                        contact.selected = !contact.selected;
                        return contact;
                    }else{
                        return contact;
                    }
                })
            }
            
        default :
            return state;
    }
}