import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
        
        <Link className="navbar-brand" to="/"><b><u>Contact Book</u></b></Link>

        <div> 
            <Link to="/contacts/add" className='btn btn-light ml-auto'>Create Contact</Link>
        </div>

      </div>
      </nav>
  </div>;
};
