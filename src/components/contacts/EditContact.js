import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editContact, updateContact } from '../../actions/contactaction';

export const EditContact = () => {
    let {id} = useParams();
	
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	
	let contact = useSelector((state)=> state.contact.contact);

	useEffect(()=>{
		if(contact!=null){
			setName(contact.name);
			setPhone(contact.phone);
			setEmail(contact.email);
		}
		dispatch(editContact(id));
	},[contact])
	const history = useNavigate();

	function updateNewContact(event){
		event.preventDefault();
		const updated_contact={
			id:id,
			name:name,
			phone:phone,
			email:email
		}
		dispatch(updateContact(updated_contact));
		history("/");
		}

  return (
	<div>
		<div className='card border-0 shadow'>
		<div className='card-header'>
		
		<h1>Edit Contact</h1>
		<div className='card-body'>
		<form className='my-form'>
			<div className='form-group'>
			<label for="name-id"><u>Enter Your Name</u></label>
			<input placeholder='Please Enter Name' name='nameOfPerson' type="text" value={name} className='form-control'
					onChange={(event)=>{
						return setName(event.target.value);
					}}/>
			
			<label for="phone-id"><u>Enter Your Phone Number</u></label>
			<input name='phoneOfPerson' type="text" placeholder='Please Enter Phone Number' value={phone} className='form-control' onChange={(event)=>{
						return setPhone(event.target.value);
					}}/>
			<label for="email-id"><u>Enter Your Email</u></label>
			<input name='emailOfPerson' type="text" placeholder='Please Enter Email' value={email} className='form-control' onChange={(event)=>{
						return setEmail(event.target.value);
					}}/>
			<button className='btn btn-danger ml-auto' onClick={updateNewContact}>Edit Contact</button>
			</div>
		</form>
		</div>
		</div>
		</div>
	</div>
  )
}
