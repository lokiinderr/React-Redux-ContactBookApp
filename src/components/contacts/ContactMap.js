import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { useNavigate, useParams } from 'react-router-dom';
import { deleteContact } from '../../actions/contactaction';

export const ContactMap = (props) => {
    // let {id} = useParams();
	const dispatch = useDispatch();

  return(
    <tr>
    <td scope='row'>
        <div className='custom-control custom-checkbox'>
            <input checked={props.isChecked} type="checkbox" className="custom-control-input"/>
            <label className='custom-control-label'></label>
        </div>
    </td>
    <td><Avatar name={props.indicontact.name} size="45" className='mr-2' round={true}/>
        {props.indicontact.name}
    </td>
    <td>
        {props.indicontact.phone}
    </td>
    <td>
        {props.indicontact.email}
    </td>
    <td>
        <Link to={`/contacts/edit/${props.indicontact.id}`}>
            <span className='material-icons'>edit</span>
        </Link>
        <Link to="#"><span className='material-icons' onClick={()=>{
            dispatch(deleteContact(props.indicontact.id))}}>remove_circle</span></Link>
    </td>
</tr>
  ) 
};
