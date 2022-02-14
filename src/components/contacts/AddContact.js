import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { generate } from 'shortid';
import { addContact } from '../../actions/contactaction';

export const AddContact = () => {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const history = useNavigate();

	function createContact(event){
		event.preventDefault();
		const new_contact={
			id:generate(),
			name:name,
			phone:phone,
			email:email
		} 
		dispatch(addContact(new_contact));
		history("/");
		}
  return (
	<div>
		<div className='card border-0 shadow'>
		<div className='card-header'>
		
		<h1>Add Contact</h1>
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
			<button className='btn btn-dark ml-auto' onClick={createContact}>Add Contact</button>
			</div>
		</form>
		</div>
		</div>
		</div>
	</div>
  )
}
