import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { Link, NavLink } from 'react-router-dom';

const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to=''>About</NavLink></li>
    <li><NavLink>Skills</NavLink></li>
    <li><NavLink>Projects</NavLink></li>
    <li><NavLink>Content</NavLink></li>
</>

const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-xl lg:hidden">
                            <RiMenu2Line />

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="text-xl">NurulFaiyaz</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;