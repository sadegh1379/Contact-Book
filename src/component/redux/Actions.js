import { ADD_CONTACT , EDIT_CONTACT , ONCHANGE_CHECKBOX , GET_CONTACT , DELETE_CONTACT , DELETE_SELECTED_CONTACTS , SELECTED_ALL, ADD_BUTTON} from './Types';

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

export const selectedAll = () => ({
    type:  SELECTED_ALL ,
});

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload : id
})

export const deleteSelectedContacts = () => ({
    type: DELETE_SELECTED_CONTACTS,
    
});

export const onChangeCheckBox = (id) => ({
    type: ONCHANGE_CHECKBOX,
    payload : id
})










