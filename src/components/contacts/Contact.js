import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ContactMap } from './ContactMap';
import { deleteAllContact, selectContact, clearContact } from '../../actions/contactaction';

export const Contact = () => {
    const contacts=useSelector((state)=>state.contact.contacts);
    const selected_contacts=useSelector((state)=>state.contact.selectedContacts);
    const [selectAll, setselectAll]=useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(selectAll){
            dispatch(selectContact(contacts.map(contact => contact.id)))
        }
        else{
            dispatch(clearContact());
        }
    },[selectAll])
  return <div>
        {
            selected_contacts.length>0 ? (<button className="btn btn-danger mb-3" onClick={()=> dispatch(deleteAllContact())}>Delete All</button>):null
        }
            <table className="table shadow table-striped">
        <thead>
            <tr>
            <th scope="col">
                <div className='custom-control custom-checkbox'>
                    <input onClick={()=> setselectAll(!selectAll)} value={selectAll} type="checkbox" className="custom-control-input"/>
                    <label className='custom-control-label'></label>
                </div>
            </th>
            <th>Name</th>
            <th>Phone Number</th>
            <th>E-Mail</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((indicontact)=>{
                return (
                    <ContactMap key={indicontact.id} isChecked={selectAll} indicontact={indicontact}/>
                )
            })}
        </tbody>
        </table>
  </div>;
};
