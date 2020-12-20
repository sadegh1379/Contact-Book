import { ArrowRightSharp } from '@material-ui/icons';
import { ADD_CONTACT , RESET_FILTER, FILTER_BY_NAME , EDIT_CONTACT , ONCHANGE_CHECKBOX , GET_CONTACT , DELETE_CONTACT , DELETE_SELECTED_CONTACTS , SELECTED_ALL , ADD_BUTTON} from './Types';


const getInLocalStorage = (itemName)=>{
    return window.localStorage.getItem(itemName)?JSON.parse(window.localStorage.getItem(itemName)):[]
 }
 
 const setInLocalStorage = (itemName , item )=>{
     window.localStorage.setItem(itemName , JSON.stringify(item));
 }


const initialState = {
    contacts : getInLocalStorage('contacts'),
    showAddButton : true,
    contact : [],
    counter : 0 ,
    filter : [] ,
    filterErr : ''
}



export const ReducerContact = (state = initialState , action)=>{
    const {payload , type } = action;
    switch(type){
        case ADD_CONTACT :
            const new_contacts = [payload , ...state.contacts];
            setInLocalStorage('contacts',new_contacts);
            console.log(new_contacts);
            return{
                ...state ,
                contacts : new_contacts
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
            const Edit_contacts = state.contacts.map((contact)=>{
                if(contact.id == payload.id){
                    contact.name = payload.name;
                    contact.id = payload.id;
                    contact.phone = payload.phone;
                    return contact;
                }else{
                    return contact;
                }
            })
            setInLocalStorage('contacts',Edit_contacts);
            return{
                ...state,
                contacts : Edit_contacts
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
            const deleteContacts = state.contacts.filter((contact)=>contact.id !== payload);
            setInLocalStorage('contacts',deleteContacts);
            return{
                ...state,
                contacts : deleteContacts
            }
        case DELETE_SELECTED_CONTACTS:
            const deleteSelected = state.contacts.filter((contact)=>contact.selected === false)
            setInLocalStorage('contacts',deleteSelected);
            return{
                ...state,
                contacts : deleteSelected
            }
        case ONCHANGE_CHECKBOX:
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
        case FILTER_BY_NAME:
            const filterCon = state.contacts.filter((contact)=>contact.name === payload);
            return{
                ...state,
                filter : filterCon.length > 0 ? filterCon : [] ,
                filterErr : filterCon.length > 0 ? "" : "Contact Not Found",
            }
        case RESET_FILTER:{
            return{
                ...state,
                filter : [],
                filterErr : ''
            }
        }
            
        default :
            return state;
    }
}