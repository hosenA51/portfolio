import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {

    const links = <>
         <li><ScrollLink to="home" smooth={true} duration={500} className="cursor-pointer">Home</ScrollLink></li>
        <li><ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer">About Me</ScrollLink></li>
        <li><ScrollLink to="skills" smooth={true} duration={500} className="cursor-pointer">Skills</ScrollLink></li>
        <li><ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer">My Project</ScrollLink></li>
        <li><ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</ScrollLink></li>
    </>
    return (
        <div className='bg-gray-700'>
            <div className="navbar w-full md:w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-base-200">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-base-100"><img className='w-12' src="https://i.ibb.co.com/qpX8F7m/logo-1-removebg-preview.png" alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base-200">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a
                        href="https://docs.google.com/document/d/1XziKeILc3HeKrvFo-S_4dYtIh2fY8BfhON-YpWPLs-0/export?format=pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn hover:bg-[#FF6B00]"
                    >Download Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;