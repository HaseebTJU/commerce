import React from 'react'; 
import { NavLink } from 'react-router-dom';

export default function Header () {
    return (
        <div>
            <NavLink to="./login">login</NavLink>
            <br></br>
            <NavLink to="./registration">registration</NavLink>
        </div>
    )
}