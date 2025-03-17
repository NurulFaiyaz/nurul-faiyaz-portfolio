import React from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';


const links = <>
    <li><Scroll smooth={true} duration={500} to='about'>About</Scroll></li>
    <li><Scroll smooth={true} duration={500} to='skills'>Skills</Scroll></li>
    <li><Scroll smooth={true} duration={500} to='projects'>Projects</Scroll></li>
    <li><Scroll smooth={true} duration={500} to='content'>Content</Scroll></li>
</>

const Navbar = () => {
    return (

        <div className='bg-base-100 shadow-sm'>
            <div className="navbar max-w-7xl mx-auto">
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
                <Link className="btn">Resume</Link>
            </div>
        </div>
        </div>
        
    );
};

export default Navbar;