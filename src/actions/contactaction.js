import { DELETE_ALL, CLEAR_CONTACT, SELECT_CONTACT, CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT } from "../constant/types"

export const addContact=((contact)=>{
    return {
        type:CREATE_CONTACT,
        payload:contact
    }
})

export const editContact = (id) => ({
  type: GET_CONTACT,
  payload: id
})

export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact
})

export const deleteContact = (id) => ({
  type: DELETE_CONTACT,
  payload: id 
})

// enters id of all contacts in an selectedContacts array
export const selectContact = (ids) => ({
  type: SELECT_CONTACT,
  payload: ids
})
// when we uncheck our checkbox removes all ids from array which were earlier stored in it by selectContact action
export const clearContact = () => ({
  type: CLEAR_CONTACT,
})

export const deleteAllContact = () => ({
  type: DELETE_ALL,
})



