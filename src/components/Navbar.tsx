// src/components/Navbar.tsx

// src/components/Navbar.tsx

import React from 'react';
import {
    FaHome,
    FaUser,
    FaBriefcase,
    FaProjectDiagram,
    FaEnvelope,
    FaSun,
    FaMoon,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleDarkMode, toggleNavOpen, closeNav } from '../store/themeSlice';
import TransitionLink from './TransitionLink';

const Navbar: React.FC = () => {
    const dispatch = useAppDispatch();
    const navOpen = useAppSelector((state) => state.theme.navOpen);
    const darkMode = useAppSelector((state) => state.theme.darkMode);

    const navLinks = [
        { to: '/', icon: <FaHome size={24} />, label: 'Home' },
        { to: '/about', icon: <FaUser size={24} />, label: 'About' },
        { to: '/experience', icon: <FaBriefcase size={24} />, label: 'Experience' },
        { to: '/projects', icon: <FaProjectDiagram size={24} />, label: 'Projects' },
        { to: '/contact', icon: <FaEnvelope size={24} />, label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-md z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo or Brand Name */}
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                            Sanjeev Sharma
                        </h1>
                    </div>
                    {/* Navigation and Theme Toggle */}
                    <div className="flex items-center">
                        {/* Hamburger Menu Button */}
                        <div className="flex items-center sm:hidden">
                            <button
                                onClick={() => dispatch(toggleNavOpen())}
                                className="text-gray-700 dark:text-gray-200 focus:outline-none"
                                aria-label="Toggle navigation menu"
                                aria-expanded={navOpen}
                            >
                                {navOpen ? <IoMdClose size={30} /> : <GiHamburgerMenu size={30} />}
                            </button>
                        </div>
                        {/* Desktop Navigation Links */}
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {navLinks.map((link) => (
                                <TransitionLink
                                    key={link.to}
                                    to={link.to}
                                    className="flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                                >
                                    {link.icon}
                                    <span className="ml-2">{link.label}</span>
                                </TransitionLink>
                            ))}
                        </div>
                        {/* Theme Toggle Button */}
                        <button
                            onClick={() => dispatch(toggleDarkMode())}
                            className="text-gray-700 dark:text-gray-200 focus:outline-none ml-4"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Navigation Menu */}
            {navOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <TransitionLink
                                key={link.to}
                                to={link.to}
                                onClick={() => dispatch(closeNav())}
                                className="flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
                            >
                                {link.icon}
                                <span className="ml-2">{link.label}</span>
                            </TransitionLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default React.memo(Navbar);
