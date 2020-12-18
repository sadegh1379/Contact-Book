import { ADD_CONTACT , EDIT_CONTACT , GET_CONTACT , DELETE_CONTACT , ADD_BUTTON} from './Types';

export const addContact = (contact) => ({
    type: ADD_CONTACT ,
    payload : contact
});

export const getContact = (id) => ({
    type: GET_CONTACT,
    payload : id
});

export const editContact = (contact) => ({
    type: EDIT_CONTACT,
    payload : contact
});

export const addButtonToggle = (toggle) => ({
    type: ADD_BUTTON,
    payload : toggle
})






