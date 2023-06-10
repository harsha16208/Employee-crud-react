import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar'>
            <NavLink exact to="/" activeClassName="active-link">
                View Employees
            </NavLink>
            <NavLink to="/add-Employee" activeClassName="active-link">
                Add Employee
            </NavLink>
        </div>
    );
}
