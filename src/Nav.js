import React from 'react';
import {NavLink} from 'react-router-dom';

import './App.css';
import logo from './img/logo.png';


function Nav() {
  
    return (
        <nav> 
            <img  src={logo} className="logo"/>
            <NavLink exact to='/' className="mainNav" activeClassName="mainNavActive">
                Home
            </NavLink>
            <NavLink exact to='/AddPoem' className="mainNav" activeClassName="mainNavActive">
                  Add Poem
            </NavLink>
            <NavLink exact to='/About' className="mainNav" activeClassName="mainNavActive">
                  About
            </NavLink>
        </nav>
    )
}

export default Nav;