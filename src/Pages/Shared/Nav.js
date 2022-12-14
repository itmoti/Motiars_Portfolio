import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
 const Item = <>
      <li><Link to='/'>Home</Link></li>
      <li><a href='#about'>About</a></li>
      <li><Link to='/'>Portfolio</Link></li>
      <li><a href='#projects'>Projects</a></li>
      <li><a href='#contactform'>Contact</a></li>
 </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
             {Item}
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Resume</Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {Item}
           
          </ul>
        </div>
          
      </div>
    );
};

export default Nav;